import stickerImg from "../../../components/handbag.png";

import bootsImg from "../../../components/boots.png";
// import { CiDeliveryTruck } from "react-icons/ci";
// import { MdOutlineWorkspacePremium } from "react-icons/md";
// import { RiSecurePaymentFill } from "react-icons/ri";
// import { MdOutlineSupportAgent } from "react-icons/md";
// import thinkingImg from "../../components/thinking.png"
// import truckImg from "../../components/truck.png";
// import fastDeliveryImg from "../../components/express-delivery.png"
// import shieldImg from "../../../components/shield.png";
import img from "../../../components/about.jpg";
import Image from "next/image";

export default function Aboutus(){
    return (<>
    
    <main className="py-8 bg-linear-to-br from-slate-100 via-purple-50 to-slate-200">
        
            <div className="max-w-7xl mx-auto">
             
              <div className="grid lg:grid-cols-2 items-center  p-4 rounded-xl">
                <div className="flex flex-col  gap-8 py-8">
                  <div className="flex justify-center">
                    <div className="bg-amber-400 h-20 w-20 rounded-full flex justify-center items-center flex-col -rotate-4 ">
                      <p className="text-sm font-bold -skew-4">Exclusive</p>
                      <p className="text-sm  font-bold -skew-4">offers</p>
                    </div>
                  </div>
                  {/* ********** */}
    
                  <h1 className="text-text text-2xl font-medium">
                    Purchase with pleasure
                  </h1>
                  <h1 className="text-primary font-bold text-6xl">
                    Shopping is easy from your app
                  </h1>
    
                  <p className="text-text text-base tracking-wide">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    sapiente voluptas inventore doloribus a illo sed reprehenderit
                    corporis amet itaque.
                  </p>
    
                  <button className="px-4 py-2 bg-primary text-white font-medium w-30">
                    Shop now
                  </button>
    
                  {/* badges */}
    
                  <div className="bg-amber-400 transform -skew-3 py-2 -rotate-2">
                    <span className="flex text-xl font-bold justify-center">
                      20% disscount
                    </span>
                  </div>
                </div>
                {/*  */}
                <div className="flex justify-center  py-4 relative">
                  <div className="">
                    <Image
                      src={img}
                      width={500}
                      priority
                      height={600}
                      alt="hero-img"
                    />
                  </div>
    
                  {/*  */}
                  <div className="absolute top-5 left-0 -rotate-12">
                    <Image
                      src={stickerImg}
                      width={60}
                      height={60}
                      alt="sticker-img"
                    />
                  </div>
                  <div className="absolute bottom-10 left-0 -rotate-45">
                    <Image
                      src={"/sneaker.png"}
                      width={60}
                      height={60}
                      className="object-cover"
                      alt="sticker-img"
                    />
                  </div>
                  {/*  */}
                  <div className="absolute top-50 right-0 -rotate-45">
                    <Image
                      src={bootsImg}
                      width={60}
                      height={60}
                      className="object-cover"
                      alt="sticker-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
    </>)
}