import img from "../../components/hero.jpg";
import Image from "next/image";
import Card from "../../components/Card";
import cardImg from "../../components/shirt-png-23759_11zon.png";
import stickerImg from "../../components/handbag.png";
import sneakerImg from "../../components/sneaker.png";
import bootsImg from "../../components/boots.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import thinkingImg from "../../components/thinking.png"
import truckImg from "../../components/truck.png";
import fastDeliveryImg from "../../components/express-delivery.png"
import shieldImg from "../../components/shield.png";

export  default async function Home() {

const res= await fetch("http://localhost:3000/api/products");
const result =await res.json();

const data= result.products.slice(0,4);


  return (
    <>
      <main className="py-4 bg-gradient-to-r from-purple-300 to-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-center  p-4 rounded-xl">
            <div className="flex flex-col  gap-8 py-8">
              <div className="flex justify-center">
                <div className="bg-amber-400 h-30 w-30 rounded-full flex justify-center items-center flex-col -rotate-4 ">
                  <p className="text-xl font-bold -skew-4">Exclusive</p>
                  <p className="text-xl  font-bold -skew-4">offers</p>
                </div>
              </div>
              {/* ********** */}

              <h1 className="text-text text-2xl font-medium">
                Purchase with pleasure
              </h1>
              <h1 className="text-secondary font-bold text-6xl">
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
                  src={sneakerImg}
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

      {/* features */}
      <section className="">
        <div className="mx-auto max-w-7xl py-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map(
              (val) => (
                <Card key={val.id} product={val} />
              ),
            )}
          </div>
        </div>
      </section>

      {/* service section */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto py-6">
          <div className="grid grid-cols-2">
              
            <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          
          <span className="text-6xl font-bold text-secondary mb-6 -skew-2">Why choosing Us ? </span>

          <div className="flex justify-center">
          <Image src={thinkingImg} alt="sticker_img" width={40} height={40} className="opacity-50"/>   
         </div>

          </div>
<div className="flex flex-col gap-3">
          <p className="bg-amber-400 w-50 py-2 ml-6 -skew-3 pl-4 text-lg font-medium text-text">Premium Quality</p>
          <p className="bg-amber-400 w-70 py-2 ml-10 -skew-3 pl-4 text-lg font-medium text-text">fast delivery</p>
          <p className="bg-amber-400 w-90 py-2 ml-14 -skew-3 pl-4 text-lg font-medium text-text">Secure payment</p>
          <p className="bg-amber-400 w-110 py-2 ml-18 -skew-3 pl-4 text-lg font-medium text-text">24/7 Expert Support</p>
          <p className="bg-amber-400 w-50 py-2 ml-50 -skew-3 pl-4 text-lg font-medium text-text">Easy to return</p>
</div>
{/* ****stickers**** */}
<div className="relative">
<Image alt="truck_img" src={truckImg} width={60} height={60} className="absolute right-20 bottom-50 -rotate-10 opacity-50"/>
</div>


          {/*  */}
          </div>
{/* ******************** */}
<div className="flex flex-col gap-6 py-4">
<div className="flex gap-4 -skew-2">
<div className="border-2 border-gray-300 w-40 h-40 flex justify-center items-center"><CiDeliveryTruck className="text-6xl  text-secondary"/></div>
{/*  */}

<div className="border-2 border-gray-300  w-40 h-40 flex justify-center items-center"><MdOutlineWorkspacePremium className="text-6xl text-secondary"/></div>
{/*  */}
</div>

<div className="flex gap-4 -skew-2">
<div className="border-2 border-gray-300 w-40 h-40 flex justify-center items-center"><RiSecurePaymentFill className="text-6xl text-secondary"/></div>
{/*  */}
<div className="border-2 border-gray-300 w-40 h-40 flex justify-center items-center"><MdOutlineSupportAgent className="text-6xl text-secondary"/></div>
{/*  */}
</div>
<div className="relative">
<Image alt="fast_delivery" src={fastDeliveryImg} width={60} height={60} className="absolute right-30 bottom-70 -rotate-10 opacity-50"/>
</div>
<div className="relative">
<Image src={shieldImg} width={60} height={60} className="absolute right-20 bottom-20 -rotate-10 opacity-50"/>
</div>
{/*  */}


</div>


          </div>



        </div>
   </section>
    </>
  );
}
