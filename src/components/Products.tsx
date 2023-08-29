import { API, GraphQLResult } from '@aws-amplify/api'
import { ListProductsQuery, Product } from 'API'
import { listProducts } from 'graphql/queries'
import { useEffect, useState } from 'react'

export default function Products() {
  const [products, setProducts] = useState<Product[]>()
  const [selectedProduct, setSelectedProduct] = useState<Product[]>()
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
    // set the state of selected item from the cached cookie
    const selectedProducts = localStorage.getItem('selectedProducts')
    if (selectedProducts) {
      setSelectedProduct(JSON.parse(selectedProducts))
    }
  }, [])

  const updateSelectedProducts = (product: Product, adding: boolean) => {
    if (adding) {
      setSelectedProduct([...(selectedProduct || []), product])
    }
    if (!adding) {
      setSelectedProduct(
        (selectedProduct || []).filter((p) => p.id !== product.id)
      )
    }
  }

  return (
    <>
      <h1 className="w-full pt-3 text-center text-4xl font-semibold ">
        Cat Available To Sponsor!
      </h1>
      <div className="grid grid-cols-6 gap-4 px-20 py-2">
        {products?.map((product) => (
          <div
            className="rounded-lg border border-gray-200 bg-white p-4 drop-shadow-md"
            key={product.id}
          >
            <div className="pb-2 text-center text-xl font-semibold">
              {product?.title}
            </div>
            <div className="flex justify-center">
              <img
                className="h-40 w-40 object-contain"
                src={
                  'https://cat-images-uni.s3.amazonaws.com/' +
                  product?.id +
                  '.jpg'
                }
                alt={product?.title}
              />
            </div>
            <div className="pt-4">
              <div className="text-gray-500">{product?.content}</div>
              <div className="flex justify-center pt-1">
                ${product?.price} / Month
              </div>
              <div className="flex items-center justify-center pt-4 ">
                <button
                  className={`w-[80%] rounded  px-4 py-2 font-bold text-white ${
                    !selectedProduct?.find((p) => p.id === product.id)
                      ? ' bg-blue-500 hover:bg-blue-700'
                      : ' bg-red-500 hover:bg-red-700'
                  }`}
                  onClick={() =>
                    updateSelectedProducts(
                      product,
                      !selectedProduct?.find((p) => p.id === product.id)
                    )
                  }
                >
                  {!selectedProduct?.find((p) => p.id === product.id)
                    ? 'Add Sponsorship To Cart'
                    : 'Remove Sponsorship From Cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* floating shopping cart button */}
        <div className="fixed bottom-0 right-0 p-4">
          {/* little floating number top right of the circle button showing number of items in car */}
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
            {selectedProduct?.length}
          </div>
          <button
            className="h-20 w-20   rounded-full bg-green-700 px-4 py-2 font-bold text-white hover:bg-green-900"
            onClick={() =>
              localStorage.setItem(
                'selectedProducts',
                JSON.stringify(selectedProduct)
              )
            }
          >
            Cart
          </button>
        </div>
      </div>
    </>
  )
}
