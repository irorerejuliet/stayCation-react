/* eslint-disable react/no-unknown-property */

import { Link } from "react-router"

const Booking = () => {
  return (
  <>
  <header className="w-full py-5 border border-gray-400">
    <nav  className="flex justify-center container max-w-[1141px]  mx-auto">
        <a href=""><img src="/images/Staycation..svg" alt="logo"/></a>
    </nav>
   </header> 

   <main  className="container m-auto max-w-[1141px] md:px-0 px-5">
    <section className="py-10">
        <img className="text-center m-auto py-10" src="/images/stepper.svg" alt="steps" />
        <div  className="text-center m-auto py-10">
            <h2 className="font-semibold md:text-[2.625rem] text-[1.625rem]">Booking Information</h2>
            <p className="font-light text-lg text-tertiary">Please fill up the blanks field below </p>
        </div>
        <div className="md:flex flex-row justify-center gap-24  items-center">
            <div>
                <img className="md:w-[420px] w-[350px]" src="/images/cashville.svg" alt="cashville"/>
                <div className="flex justify-between items-center md:w-[420px] w-[320px]">
                    <div>
                        <h3 className="font-medium text-xl text-light pt-3">cashville</h3>
                        <p className="font-light text-[0.938rem] text-tertiary">Kemang, Indonesia</p>
                    </div>
                    <p className="font-medium text-lg">$480 USD <span className="font-light text-lg text-tertiary">for</span> 2 night</p>
                </div>
            </div>
        <form action="">
            <div className="flex flex-col py-3 text-lg font-normal ">
                <label for="name">Name</label>
                <input className="border border-none bg-[#F5F6F8] py-2 px-6" type="text" name="name" id="" />
            </div>
            <div className="flex flex-col py-3 text-lg font-normal ">
                <label for="name">Last Name:</label>
                <input className="border border-none bg-[#F5F6F8] py-2 px-6" type="text" name="name" id="" />
            </div>
            <div className="flex flex-col py-3 text-lg font-normal ">
                <label for="name">Email Address</label>
                <input className="border border-none bg-[#F5F6F8] py-2 px-6" type="text" name="name" id="" />
            </div>
            <div className="flex flex-col py-3 text-lg font-normal ">
                <label for="name">Phone Number</label>
                <input className="border border-none bg-[#F5F6F8] py-2 px-6" type="text" name="name" id=""/>
            </div>
        </form>  
        </div>
        <div className="flex flex-col  m-auto py-32 space-y-5">
            <Link to="/payment" className="mx-auto"> <button className="font-medium text-lg text-white bg-secondary  roundded-[4px] py-3 px-20 ">Continue to Book</button></Link>
            <button className="font-medium text-lg text-tertiary bg-[#F5F6F8]  roundded-[4px] py-3 px-20 mx-auto text-center w-[300px]">Cancel</button>
        </div>
    </section>
   </main> 
  </>
  )
}

export default Booking
