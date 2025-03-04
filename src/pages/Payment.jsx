/* eslint-disable react/no-unknown-property */

import { Link } from "react-router"


const Payment = () => {
  return (
    <>
     <header className="py-5 border border-gray-400">
    <nav className="flex justify-center container max-w-[1141px]  mx-auto ">
        <a href=""><img src="/images/Staycation..svg" alt="logo" /></a>
    </nav>
   </header> 

   <main  className=" container max-w-[1141px] mx-auto px-5">
    <section className="py-10">
        <img className="text-center m-auto py-10" src="/images/stepper (3).svg" alt="steps" />
        <div  className="text-center m-auto py-10">
            <h2 className="font-semibold text-[2.625rem]">Payment</h2>
            <p className="font-light text-lg text-tertiary">Kindly follow the instruction below </p>
        </div>
        <div className="md:flex flex-row justify-center gap-24 items-center">
            <div className="space-y-2">
                <p>Transfer Payment:</p>
                <p>Tax: 10%</p>
                <p>Sub total: $480 USD</p>
                <p>Total: $580 USD</p>
                <div className="flex gap-4 items-center md:py-0 py-3">
                         <img className="pb-10" src="/images/bank-logo1.svg" alt="bank-logo" />
                    <div>
                    <p>Bank Central Asia</p>
                    <p>2208 1996</p>
                    <p>Tesla Inc.</p>       
                    </div>
                </div>
                 <div className="flex gap-4 items-center">
                         <img className="pb-10" src="/images/bank-logo2.svg" alt="bank-logo" />
                    <div>
                    <p>Bank Mandiri</p>
                    <p>2208 1996</p>
                    <p>Tesla Inc.</p>       
                    </div>
                </div>
            </div>
             
             <form action="">
            <div className="flex flex-col py-3 text-lg font-normal">
                <label for="name">Name</label>
                <input className="border border-none bg-[#F5F6F8] py-2 px-6" type="text" name="name" />
            </div>
            <div className="flex flex-col py-3">
                <label for="name">Last Name:</label>
                <input className="border border-none bg-[#F5F6F8] py-2 px-6" type="text" name="name"  />
            </div>
            <div className="flex flex-col py-3">
                <label for="name">Email Address</label>
                <input className="border border-none bg-[#F5F6F8] py-2 px-6" type="text" name="name"/>
            </div>
            <div className="flex flex-col py-3">
                <label for="name">Phone Number</label>
                <input className="border border-none bg-[#F5F6F8] py-2 px-6" type="text" name="name" />
            </div>
         </form>  
        </div>
        <div className="flex flex-col  m-auto py-32 space-y-5">
            <Link className="mx-auto" to="/complete">
             <button className="font-medium text-lg text-white bg-secondary  roundded-[4px] py-3 px-20 ">Continue to Book</button>
             </Link>
            <button className="font-medium text-lg text-tertiary bg-[#F5F6F8]  roundded-[4px] py-3 px-20 mx-auto text-center w-[300px]">Cancel</button>
        </div>
    </section>
   </main>
    </>
  )
}

export default Payment
