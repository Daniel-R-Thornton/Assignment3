import react, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import config from '../../aws-exports'
import { API } from '@aws-amplify/api'
const Products = react.lazy(() => import('./Products'))
const Home = react.lazy(() => import('./Home'))
const About = react.lazy(() => import('./About'))
const Layout = react.lazy(() => import('./Layout'))
// after your imports
API.configure(config)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* layout route (top bar) */}
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<>loading..</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/Products/*"
            element={
              <Suspense fallback={<>loading..</>}>
                <Products />
              </Suspense>
            }
          />
          <Route path="/about/*" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
