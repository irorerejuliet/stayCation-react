/* eslint-disable react/prop-types */

import { Link } from "react-router";
const MortigoResort = ({title, subtitle, location, description}) => {
  return (
    <>
      <section className="flex gap-[20%] items-center">
        <ul className="flex justify-between gap-10">
          <li>
            <Link to="/booking" className="text-lg text-tertiary font-light">
             {title}
            </Link>
          </li>
          <li>
            <Link to="#" className="font-normal text-lg text-light">
             {subtitle}
            </Link>
          </li>
        </ul>
        <div>
          <h1 className="font-semibold md:text-[2.625rem] text-[1.625rem] text-base text-light">
           {description}
          </h1>
          <p className="text-lg text-tertiary font-light text-center pt-3">
           {location}
          </p>
        </div>
      </section>

      <section className="md:flex flex-row justify-between items-center gap-2 py-10">
        <div>
          <img src={"/images/house-img.svg"} alt="house-img" />
        </div>
        <div className="md:py-0 py-5">
          <img
            className="pb-2"
            src="./images/resort-livingroom.svg"
            alt="living-room"
          />
          <img src="/images/resort-kitchen.svg" alt="kitchen" />
        </div>
      </section>
    </>
  );
}

export default MortigoResort

