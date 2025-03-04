

const HotelRoom = () => {
    const hotelLivingRooms = [
      {
        name: "Green Park",
        location: "Tangerang, Indonesia",
        image: "/images/backyard-image1.svg",
        id: 1,
      },

      {
        name: "Podo Wae",
        location: "Madiun, Indonesia",
        image: "/images/livingroom-img2.svg",
        id: 2,
      },

      {
        name: "Silver Rain",
        location: " Bandung, Indonesia",
        image: "/images/backyard-image1.svg",
        id: 3,
      },

      {
        name: "Cashville",
        location: " Popular Choice",
        image: "/images/livingroom-img4.svg",
        id: 4,
      },
    ];
  return (
    <section className="py-10">
      <h4 className="font-medium text-2xl text-light leading-9">
        Hotels with living room
      </h4>
      <div className="md:flex flex-row justify-between items-center">
        {hotelLivingRooms.map((item) => (
          <div className="py-5" key={item.id}>
            <a href="/about">
              <img src={item.image} alt={item.name} />
            </a>
            <div>
              <h4 className="font-medium text-xl text-light py-1">
                {item.name}
              </h4>
              <p className="font-light text-[0.938rem] text-tertiary">
                {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HotelRoom
