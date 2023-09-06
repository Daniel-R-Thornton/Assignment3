export default function About() {
  return (
    <div className="max-h-full overflow-auto">
      <div className=" px-20 py-2">
        <div className="h-[70vh] rounded-lg border border-gray-200 bg-white p-4 drop-shadow-md">
          <div className="flex flex-col justify-center gap-10  px-10 text-xl">
            <section>
              <h1 className="pb-2 text-3xl font-semibold">About Us</h1>
              <p>
                We are a small group of dedicated cat lovers who are passionate
                about helping cats find their forever homes. Our mission is to
                provide a safe and loving environment for cats in need, and to
                match them with caring and responsible owners who will give them
                the love and attention they deserve.
              </p>
            </section>

            <section>
              <h2 className="pb-2  text-3xl font-bold">Our Cooperative</h2>
              <p>
                Our cooperative is run entirely by volunteers who are committed
                to the well-being of our feline friends. We work closely with
                local animal shelters and rescue organizations to provide a
                second chance for cats who have been abandoned or surrendered by
                their previous owners.
              </p>
            </section>

            <section>
              <h2 className="pb-2  text-3xl font-bold">Our Cats</h2>
              <p>
                We have a wide variety of cats available for adoption, from
                playful kittens to mature cats who are looking for a quiet home
                to retire in. All of our cats are spayed or neutered, up-to-date
                on their vaccinations, and have received a thorough health check
                from our veterinarian.
              </p>
            </section>

            <section>
              <h2 className="pb-2  text-3xl font-bold">Adoption</h2>
              <p>
                If you're interested in adopting a cat, we encourage you to
                browse our selection and get to know our furry friends. You can
                book an appointment to meet them in person, or simply stop by
                our store to pick up some toys and snacks for your own cat.
                Thank you for considering adoption, and for supporting our
                mission to help cats in need!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
