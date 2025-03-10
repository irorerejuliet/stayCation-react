
import { mostPickedHouses } from "../constant/MostPicked";
const MostPicked = () => {
  return (
    <section className="space-y-6">
      <h4 className="font-medium text-2xl text-light">Most Picked </h4>
      <div className="md:flex flex-row  gap-5 relative">
        <div className="">
          <img
            src="/images/beach-img.svg"
            alt="beach-img"
            className="w-[700px]"
          />
          <div className="absolute top-[85%] left-7">
            <h4 className="font-medium text-xl text-light">Finns Beach Club</h4>
            <p className="font-light text-[0.938rem] text-light">
              Denpasar, Bali
            </p>
          </div>
          <div className="absolute lg:-top-1 -top-1 lg:left-[17%] left-[53%] bg-primary rounded-tr-[15px] rounded-bl-[15px]">
            <p className="font-medium text-lg text-white py-1 px-5 ">
              Popular Choice
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 lg:py-0 py-5">
          {mostPickedHouses.map(({ name, location, image, id }) => (
            <div className="relative" key={id}>
              <img src={image} alt={name}/>

              <div className="absolute top-[68%] left-7">
                <h4 className="font-medium text-xl text-light">{name}</h4>
                <p className="font-light text-[0.938rem] text-light">
                  {location}
                </p>
              </div>
              <div className="absolute lg:-top-1 -top-1 lg:left-[197px] left-[53%] bg-primary rounded-tr-[15px] rounded-bl-[15px]">
                <p className="font-medium text-lg text-white py-1 px-5 ">
                  Popular Choice
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default MostPicked






