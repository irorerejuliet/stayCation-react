

const KitchenApartment = () => {
  const houseWithKitchen = [
    {
      name: "PS Wood",
      location: "Depok, Indonesia",
      image: "/images/kitchen-img1.svg",
      id: 1,
    },

    {
      name: "One Five",
      location: "Jakarta, Indonesia",
      image: "/images/kitchen-img2.svg",
      id: 2,
    },

    {
      name: "Minimal",
      location: "Bogor, Indonesia",
      image: "/images/kitchen-img3.svg",
      id: 3,
    },

    {
      name: "Stays Home",
      location: "Wonosobo,Indonesia",
      image: "/images/kitchen-img4.svg",
      id: 4,
    },
  ];
  return (
    <section className="">
      <h4 className="font-medium text-2xl text-light leading-9">
        Apartement with kitchen
      </h4>
      <div className="md:flex flex-row justify-between items-center">
        {houseWithKitchen.map((item) => (
          <div className="py-5" key={item.Id}>
            <a href="/about">
              
              <img src={item.image} alt="kitchen-img1" />
            </a>
            <div>
              <h4 className="font-medium text-xl text-light py-1">{item.titel}</h4>
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

export default KitchenApartment
