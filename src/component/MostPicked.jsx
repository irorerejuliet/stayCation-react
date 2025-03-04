import { Link } from "react-router";
const MostPicked = () => {
  return (
    <section className="space-y-6">
      <h4 className="font-medium text-2xl text-light">Most Picked </h4>
      <div className="md:flex flex-row  gap-5 relative">
        <img src="/images/beach-img.svg" alt="beach-img" />
        <div className="absolute top-[85%] left-7">
          <h4 className="font-medium text-xl text-light">Finns Beach Club</h4>
          <p className="font-light text-[0.938rem] text-light">
            Denpasar, Bali
          </p>
        </div>
        <div className="absolute lg:-top-1 -top-1 lg:left-[18%] left-[53%] bg-primary rounded-tr-[15px] rounded-bl-[15px]">
          <p className="font-medium text-lg text-white py-1 px-5 ">
            Popular Choice
          </p>
        </div>
        <div className="flex flex-wrap gap-5 lg:py-0 py-5">
          <div className="relative">
            <Link to="/about">
              <img src="/images/resort-img.svg" alt="resort-img" />
            </Link>
            <div className="absolute top-[68%] left-7">
              <h4 className="font-medium text-xl text-light">
                Mortigho Resort
              </h4>
              <p className="font-light text-[0.938rem] text-light">
                Rio De Janeiro, Brazil
              </p>
            </div>
            <div className="absolute lg:-top-1 -top-1 lg:left-[197px] left-[53%] bg-primary rounded-tr-[15px] rounded-bl-[15px]">
              <p className="font-medium text-lg text-white py-1 px-5 ">
                Popular Choice
              </p>
            </div>
          </div>
          <div className="relative">
            <Link to="/about">
              <img src="/images/montana-img.svg" alt="montana-img" />
            </Link>
            <div className="absolute top-[68%] left-7">
              <h4 className="font-medium text-xl text-light">Montana Bay</h4>
              <p className="font-light text-[0.938rem] text-light">
                Bertin, Germany
              </p>
            </div>
            <div className="absolute md:-top-1 -top-1 lg:left-[198px] left-[53%] bg-primary rounded-tr-[15px] rounded-bl-[15px]">
              <p className="font-medium text-lg text-white py-1 px-5 ">
                Popular Choice
              </p>
            </div>
          </div>
          <div className="relative">
            <Link to="/about">
              <img src="/images/karpha-tree-img.svg" alt="karpha-tree-img" />
            </Link>
            <div className="absolute top-[70%] left-7">
              <h4 className="font-medium text-xl text-light">Karpha Tree</h4>
              <p className="font-light text-[0.938rem] text-light">
                Ternate, Nusa Tenggara Barat
              </p>
            </div>
            <div className="absolute md:-top-1 -top-1 lg:left-[197px] left-[53%] bg-primary rounded-tr-[15px] rounded-bl-[15px]">
              <p className="font-medium text-lg text-white py-1 px-5 ">
                Popular Choice
              </p>
            </div>
          </div>
          <div className="relative">
            <Link to="/about">
              <img src="/images/caeserpalace-img.svg" alt="caeserpalace-img" />
            </Link>
            <div className="absolute top-[68%] left-7">
              <h4 className="font-medium text-xl text-light">Caeser Palace</h4>
              <p className="font-light text-[0.938rem] text-light">
                Las Vegas, America
              </p>
            </div>
            <div className="absolute md:-top-1 -top-1 lg:left-[198px] left-[53%] bg-primary rounded-tr-[15px] rounded-bl-[15px]">
              <p className="font-medium text-lg text-white py-1 px-5 ">
                Popular Choice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MostPicked
