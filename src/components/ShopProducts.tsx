import { API, GraphQLResult } from '@aws-amplify/api'
import { Category, ListCategoriesQuery, ListProductsQuery, Product } from 'API'
import { listCategories, listProducts } from 'graphql/queries'
import { useEffect, useState } from 'react'
import { Modal } from './Modal'

export default function Adoptions() {
  const [products, setProducts] = useState<Product[]>()
  const [categories, setCategories] = useState<Category[]>()
  const [selectedProducts, setSelectedProducts] = useState<Product[]>()
  const [showCheckoutModal, setShowCheckoutModal] = useState(false)
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

  const formContent = (
    // simple checkout form with name and email and other details such as payment and what the user is ordering
    <form className="p-10">
      <div className="flex flex-col gap-3">
        <div className="flex">
          <label className="w-24 text-gray-500">Name</label>
          <input
            className="flex-1 rounded-md border border-gray-300"
            type="text"
            placeholder="Name"
          />
        </div>

        <div className="flex">
          <label className="w-24 text-gray-500">Email</label>
          <input
            className="flex-1 rounded-md border border-gray-300"
            type="text"
            placeholder="Email"
          />
        </div>

        <div className="flex">
          <label className="w-24 text-gray-500">Payment Method</label>
          <select className="flex-1 rounded-md border border-gray-300">
            <option value="">Select a payment method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bitcoin">Bitcoin</option>
          </select>
        </div>

        <div className="flex">
          <label className="w-24 text-gray-500">Order Details</label>
          <textarea
            className="flex-1 rounded-md border border-gray-300"
            placeholder="Order Details"
          />
        </div>
      </div>
    </form>
  )

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
                          ? 'Add to cart'
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
      <Modal
        title="Time to meet the cats, let us know about you!"
        content={formContent}
        isOpen={showCheckoutModal}
        onCancel={() => {
          setShowCheckoutModal(false)
        }}
        onOk={() => {
          setShowCheckoutModal(false)
        }}
        key={1}
      />
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
          className="h-20 w-20 rounded-full  bg-green-700 px-4 py-2 text-center font-bold text-white hover:bg-green-900"
          onClick={() => {
            localStorage.setItem(
              'selectedProducts',
              JSON.stringify(selectedProducts)
            )
            setShowCheckoutModal(true)
          }}
        >
          Check Out
        </button>
      </div>
    </div>
  )
}
