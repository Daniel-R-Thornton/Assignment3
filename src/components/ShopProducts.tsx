import { API, GraphQLResult } from '@aws-amplify/api'
import { Category, ListCategoriesQuery, ListProductsQuery, Product } from 'API'
import { listCategories, listProducts } from 'graphql/queries'
import { useEffect, useState } from 'react'

export default function Adoptions() {
  const [products, setProducts] = useState<Product[]>()
  const [categories, setCategories] = useState<Category[]>()
  const [selectedProducts, setSelectedProducts] = useState<Product[]>()
  // initially only get 1000, but if required we can use a next token for pagination.
  useEffect(() => {
    const fetchProducts = async () => {
      const response = (await API.graphql({
        query: listProducts,
        variables: { limit: 100 }
      })) as GraphQLResult<ListProductsQuery>
      console.log('response', response)
      if (response.data?.listProducts?.items) {
        setProducts(response.data?.listProducts.items as Product[])
      }
    }
    fetchProducts()

    // fetch the categories
    const fetchCategories = async () => {
      const response = (await API.graphql({
        query: listCategories,
        variables: { limit: 100 }
      })) as GraphQLResult<ListCategoriesQuery>
      console.log('response', response)
      if (response.data?.listCategories?.items) {
        setCategories(response.data?.listCategories.items as Category[])
      }
    }
    fetchCategories()

    // set the state of selected item from the cached cookie
    const selectedProducts = localStorage.getItem('selectedProducts')
    if (selectedProducts) {
      if (selectedProducts === 'undefined') {
        return
      }
      setSelectedProducts(JSON.parse(selectedProducts ?? '{}'))
    }
  }, [])

  const updateSelectedProducts = (product: Product, adding: boolean) => {
    if (adding) {
      setSelectedProducts([...(selectedProducts || []), product])
    }
    if (!adding) {
      setSelectedProducts(
        (selectedProducts || []).filter((p) => p.id !== product.id)
      )
    }
  }

  useEffect(() => {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts))
  }, [selectedProducts])

  return (
    <div className="max-h-full overflow-auto">
      {categories?.map((category) => (
        <>
          <div className="flex w-full items-center justify-center ">
            <div className="m-10 w-96   rounded-full bg-gray-700  p-2   pt-3 text-center text-3xl font-semibold text-gray-100 ">
              {category?.name}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-24 px-20 py-2 ">
            {products
              ?.filter((item) => item.categoryId === category.id)
              .map((product) => (
                <div
                  className="rounded-lg border border-gray-200 bg-white p-4 drop-shadow-md"
                  key={product.id}
                >
                  <div className="pb-2 text-center text-xl font-semibold">
                    {product?.title}
                  </div>
                  <div className="flex justify-center">
                    <img
                      className="h-96 w-96 object-contain"
                      src={
                        'https://catadoption-uni.s3.ap-southeast-2.amazonaws.com/' +
                        product?.id +
                        '.jpg'
                      }
                      alt={product?.title}
                    />
                  </div>
                  <div className="pt-4">
                    <div className="min-h-[140px] text-gray-500">
                      {product?.content}
                    </div>
                    <div className="flex justify-center pt-1">
                      ${product?.price}
                    </div>
                    <div className="flex items-center justify-center pt-4 ">
                      <button
                        className={`w-[80%] rounded  px-4 py-2 font-bold text-white ${
                          !selectedProducts?.find((p) => p.id === product.id)
                            ? ' bg-blue-500 hover:bg-blue-700'
                            : ' bg-red-500 hover:bg-red-700'
                        }`}
                        onClick={() =>
                          updateSelectedProducts(
                            product,
                            !selectedProducts?.find((p) => p.id === product.id)
                          )
                        }
                      >
                        {!selectedProducts?.find((p) => p.id === product.id)
                          ? 'Meet Me On Your Visit!'
                          : 'I Changed My Mind '}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      ))}
      {/* floating shopping cart button */}
      <div className="fixed bottom-0 right-0 p-4">
        {/* little floating number top right of the circle button showing number of items in car */}
        {!!selectedProducts?.length && (
          <div
            className="
            absolute
            right-6
            top-3
            h-6
            w-6  
            rounded-full
            bg-red-500
            text-center
            font-bold
            text-white
            "
          >
            {selectedProducts?.length}
          </div>
        )}
        <button
          className="h-20 w-20   rounded-full bg-green-700 px-4 py-2 font-bold text-white hover:bg-green-900"
          onClick={() =>
            localStorage.setItem(
              'selectedProducts',
              JSON.stringify(selectedProducts)
            )
          }
        >
          Book Now!
        </button>
      </div>
    </div>
  )
}
