
import { Link } from "react-router";
const HappyFamily = () => {
  return (
    <section className="">
      <div className="md:flex flex-row justify-between items-center my-10">
        <div>
          <img src="/images/family-picture.svg" alt="family-picture" />
        </div>
        <div className="md:w-[615px] space-y-5">
          <h3 className="font-medium text-2xl text-light">Happy Famiy</h3>
          <Link to="/booking">
            <img src="/images/review-icon.svg" alt="review-icon" />
          </Link>
          <p className="font-normal md:text-[2rem] text-[1.615rem] text-light">
            What a great trip with my family and I should try again next time
            soon ...
          </p>
          <p className="font-light text-lg text-light">Adi, UI/UX Designer</p>
          <button className="font-medium text-lg text-white bg-secondary py-2 px-4 rounded-[4px]">
            Read Our Stories
          </button>
        </div>
      </div>
    </section>
  );
}

export default HappyFamily
