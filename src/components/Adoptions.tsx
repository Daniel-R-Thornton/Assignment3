import { API, GraphQLResult } from '@aws-amplify/api'
import { ListCatsQuery, Cat } from 'API'
import { listCats } from 'graphql/queries'
import { useEffect, useState } from 'react'
import { Modal } from './Modal'

export default function Adoptions() {
  const [cats, setCats] = useState<Cat[]>()
  const [selectedCats, setSelectedCats] = useState<Cat[]>()
  const [showCheckoutModal, setShowCheckoutModal] = useState(false)
  // initially only get 1000, but if required we can use a next token for pagination.
  useEffect(() => {
    const fetchCats = async () => {
      const response = (await API.graphql({
        query: listCats,
        variables: { limit: 100 }
      })) as GraphQLResult<ListCatsQuery>
      console.log('response', response)
      if (response.data?.listCats?.items) {
        setCats(response.data?.listCats.items as Cat[])
      }
    }
    fetchCats()
    // set the state of selected item from the cached cookie
    const selectedCats = localStorage.getItem('selectedCats')
    if (selectedCats) {
      if (selectedCats === 'undefined') {
        return
      }
      setSelectedCats(JSON.parse(selectedCats ?? '{}'))
    }
  }, [])

  const updateSelectedCats = (cat: Cat, adding: boolean) => {
    if (adding) {
      setSelectedCats([...(selectedCats || []), cat])
    }
    if (!adding) {
      setSelectedCats((selectedCats || []).filter((p) => p.id !== cat.id))
    }
  }

  useEffect(() => {
    localStorage.setItem('selectedCats', JSON.stringify(selectedCats))
  }, [selectedCats])

  const formContent = (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <div className="flex w-1/2 flex-col gap-2">
        <div className="flex">
          <label className="w-24 text-gray-500">First Name</label>
          <input
            className="flex-1 rounded-md border border-gray-300"
            type="text"
            placeholder="First Name"
          />
        </div>

        <div className="flex">
          <label className="w-24 text-gray-500">Last Name</label>
          <input
            className="flex-1 rounded-md border border-gray-300"
            type="text"
            placeholder="Last Name"
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
          <label className="w-24 text-gray-500">Phone</label>
          <input
            className="flex-1 rounded-md border border-gray-300"
            type="text"
            placeholder="Phone"
          />
        </div>

        <div className="flex">
          <label className="w-24 text-gray-500">Address</label>
          <input
            className="flex-1 rounded-md border border-gray-300"
            type="text"
            placeholder="Address"
          />
        </div>

        <div className="flex">
          <label className="w-24 text-gray-500">City</label>
          <input
            className="flex-1 rounded-md border border-gray-300"
            type="text"
            placeholder="City"
          />
        </div>

        <div className="flex">
          <label className="w-24 text-gray-500">State</label>
          <input
            className="flex-1 rounded-md border border-gray-300"
            type="text"
            placeholder="State"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">Selected Cats</h2>

        {(selectedCats?.length ?? 0) > 0 ? (
          <ul className="list-inside list-disc">
            {selectedCats?.map((catName) => (
              <li key={catName.id}>{catName.title}</li>
            ))}
          </ul>
        ) : (
          <p>No cats selected.</p>
        )}
      </div>
    </div>
  )

  return (
    <div className="max-h-full overflow-auto">
      <Modal
        title="Time to meet the cats, let us know about you!"
        content={formContent}
        isOpen={showCheckoutModal}
        onCancel={() => {}}
        onOk={() => {
          setShowCheckoutModal(false)
        }}
        key={1}
      />
      <h1 className="w-full pt-3 text-center text-4xl font-semibold ">
        Cats Available To Adopt!
      </h1>
      <div className="grid grid-cols-6 gap-4 px-20 py-2">
        {cats?.map((cat) => (
          <div
            className="rounded-lg border border-gray-200 bg-white p-4 drop-shadow-md"
            key={cat.id}
          >
            <div className="pb-2 text-center text-xl font-semibold">
              {cat?.title}
            </div>
            <div className="flex justify-center">
              <img
                className="h-40 w-40 object-contain"
                src={
                  'https://catadoption-uni.s3.ap-southeast-2.amazonaws.com/' +
                  cat?.id +
                  '.jpg'
                }
                alt={cat?.title}
              />
            </div>
            <div className="pt-4">
              <div className="min-h-[140px] text-gray-500">{cat?.content}</div>
              <div className="flex justify-center pt-1">${cat?.price}</div>
              <div className="flex items-center justify-center pt-4 ">
                <button
                  className={`w-[80%] rounded  px-4 py-2 font-bold text-white ${
                    !selectedCats?.find((p) => p.id === cat.id)
                      ? ' bg-blue-500 hover:bg-blue-700'
                      : ' bg-red-500 hover:bg-red-700'
                  }`}
                  onClick={() =>
                    updateSelectedCats(
                      cat,
                      !selectedCats?.find((p) => p.id === cat.id)
                    )
                  }
                >
                  {!selectedCats?.find((p) => p.id === cat.id)
                    ? 'Meet Me On Your Visit!'
                    : 'I Changed My Mind '}
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* floating shopping cart button */}
        <div className="fixed bottom-0 right-0 p-4">
          {/* little floating number top right of the circle button showing number of items in car */}
          {!!selectedCats?.length && (
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
              {selectedCats?.length}
            </div>
          )}
          <button
            className="h-20 w-20   rounded-full bg-green-700 px-4 py-2 font-bold text-white hover:bg-green-900"
            onClick={() => {
              localStorage.setItem('selectedCats', JSON.stringify(selectedCats))
              setShowCheckoutModal(true)
            }}
          >
            Book Now!
          </button>
        </div>
      </div>
    </div>
  )
}
