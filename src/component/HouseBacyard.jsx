

const HouseBacyard = () => {
    const houseWithBackyards = [
      {
        name: "Tabby Town",
        location: "Gunug Batu, Indonesia",
        image: "/images/backyard-image1.svg",
        id: 1,
      },

      {
        name: "Anggana",
        location: " Bogor, Indonesia",
        image: "/images/backyard-image2.svg",
        id: 2,
      },

      {
        name: " Seattle Rain",
        location: "Jakarta, Indonesia",
        image: "/images/backyard-image3.svg",
        id: 3,
      },

      {
        name: "Wooden Pit",
        location: "Wonosobo, Indonesia",
        image: "/images/backyard-image4.svg",
        id: 4,
      },
    ];

  return (
    <section className="py-10">
      <h4 className="font-medium text-2xl text-light">Houses with backyard</h4>
      <div className="grid md:grid-cols-4 grid-cols-1">
        {houseWithBackyards.map((item) => (
          <div className= "py-5 relative" key={item.id}>
            <a href="/about">
              <img src={item.image} alt={item.name} />
            </a>
            <div className="absolute md:top-4 top-5 md:left-[35%] left-[28%] bg-primary rounded-tr-[15px] rounded-bl-[15px]">
              <p className="font-medium text-lg text-white py-1 px-5 ">
                Popular Choice
              </p>
            </div>
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

export default HouseBacyard
