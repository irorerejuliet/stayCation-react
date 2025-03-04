import { Link } from "react-router";
import Content from "./Content"
import ResortDesign from "./ResortDesign"
import Title from "./Title" 


const AboutTheResort = () => {
  return (
    <>
      <section>
        <Title text="About The Lodge" />
        <div className="md:flex flex-row justify-between">
          <div className="md:w-[600px] w-[350px] font-light text-base text-tertiary space-y-8 ">
            <Content className="">
              Lorem ipsum dolor for your design, website, and copywriting works.
              Use our tool to generate chunks of text that is free from
              repetition and copyright claims. Take Action. 3D Images Increase
              Sales. Learn More. Sell More Onlie Today.
            </Content>
            <Content>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Content>
            <Content>
              Design is a plan or specifiaction for the construction of an
              object or system or for the implementation of an activity or
              process, or the result of that plan or specification in the form
              of a prototype, product or process. The national agency for
              design: enabling Singapore to use design for economic growth and
              to make lives better.
            </Content>
            <div className="grid grid-cols-4 gap-5">
              <ResortDesign
                image="/images/ic_bedroom (1).svg"
                pair="3"
                title=" bedrooms"
              />

              <ResortDesign
                image="/images/ic_bathroom.svg"
                pair="3"
                title="Living room"
              />

              <ResortDesign
                image="/images/ic_livingroom.svg"
                pair="1"
                title="Bathroom"
              />

              <ResortDesign
                image="/images/ic_diningroom (1).svg"
                pair="1"
                title="Dining room"
              />

              <ResortDesign
                image="/images/ic_wifi.svg"
                pair="10"
                title="Mbp/s"
              />

              <ResortDesign
                image="/images/ic_ac (1).svg"
                pair="2"
                title="units ready"
              />

              <ResortDesign
                image="/images/ic_ac (1).svg"
                pair="3"
                title=" Refrigerator"
              />

              <ResortDesign
                image="/images/ic_tv.svg"
                pair="3"
                title="Television"
              />
            </div>
          </div>
          <div className="md:w-[487px] w-[400] rounded-[15px] md:pl-20 pl-5 py-20 lg:mt-0 mt-10  space-y-5 border border-[#E5E5E5]">
            <h2 className="font-medium text-2xl text-light">Start Booking</h2>
            <p className="font-light text-4xl text-tertiary ">
              <span className="font-medium text-4xl text-[#1ABC9C] mr-5">$280</span>
              per night
            </p>
            <p className="font-normal text-lg">How long you will stay?</p>
            <div className="flex items-center">
              <button className="font-bold text-[1.5rem] text-white bg-[#E74C3C] py-1 px-4 rounded-[4px]">
                -
              </button>
              <button className="font-normal text-[1.125rem] bg-[#F5F6F8]    py-2 px-16  rounded-[4px]">
                2 nights
              </button>
              <button className="font-bold text-[1.5rem] text-white bg-[#1ABC9C] py-1 px-3 rounded-[4px]">
                +
              </button>
            </div>
            <p className="font-light text-lg text-tertiary py-6">
              You will pay{" "}
              <span className="font-medium text-lg text-black">$480 USD</span>{" "}
              for 2{" "}
              <span className="font-medium text-lg text-black">night</span>
            </p>
            <Link to="/booking">
              <button className="font-medium text-lg text-white bg-secondary py-2 px-20 rounded-[4px]">
                Continue Book
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutTheResort


// const AboutTheResorts = [
//   {
//     image: "/images/ic_bedroom (1).svg",
//     pair: "3",
//     title: " bedrooms",
//     id: "1",
//   },
//   {
//     image: "/images/ic_bedroom (1).svg",
//     pair: "3",
//     title: " bedrooms",
//     id: "1",
//   },
//   {
//     image: "/images/ic_bedroom (1).svg",
//     pair: "3",
//     title: " bedrooms",
//     id: "1",
//   },
//   {
//     image: "/images/ic_bedroom (1).svg",
//     pair: "3",
//     title: " bedrooms",
//     id: "1",
//   },
//   {
//     image: "/images/ic_bedroom (1).svg",
//     pair: "3",
//     title: " bedrooms",
//     id: "1",
//   },
// ];
