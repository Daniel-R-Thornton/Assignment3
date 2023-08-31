import react, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import config from '../../aws-exports'
import { API } from '@aws-amplify/api'
const Adoptions = react.lazy(() => import('./Adoptions'))
const Home = react.lazy(() => import('./Home'))
const About = react.lazy(() => import('./About'))
const Layout = react.lazy(() => import('./Layout'))
const ShopProducts = react.lazy(() => import('./ShopProducts'))
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
            path="/Adoptions/*"
            element={
              <Suspense fallback={<>loading..</>}>
                <Adoptions />
              </Suspense>
            }
          />
          <Route
            path="/ShopProducts/*"
            element={
              <Suspense fallback={<>loading..</>}>
                <ShopProducts />
              </Suspense>
            }
          />
          <Route
            path="/about/*"
            element={
              <Suspense fallback={<>loading...</>}>
                <About />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
