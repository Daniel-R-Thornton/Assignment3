// top of file

export default function Home() {
  return (
    <>
      <div className="  flex  flex-col items-center justify-center ">
        <div className=" h-[calc(100vh-4rem)] w-[90%] rounded bg-white p-10 drop-shadow-sm">
          <div className="flex  flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">Home</h1>
            <p className="text-gray-500">Welcome to my shop</p>
            <div className="pt-10">
              <p>
                This is a demo shop, feel free to browse around and add items to
                your cart.
              </p>

              <h2 className="pt-10 font-semibold">About the shop</h2>
              {/* generic blurb about the "shop" */}
              <p className="text-gray-500">
                This Shop has been created using the following technologies:
                <ul className="list-inside list-disc">
                  <li>React</li>
                  <li>Typescript</li>
                  <li>Tailwind CSS</li>
                  <li>React Router</li>
                  <li>Aws Appsync</li>
                  <li>Aws DynamoDb</li>
                  <li>Aws Lambda</li>
                  <li>Aws S3</li>
                  <li>Aws Cloudfront</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
