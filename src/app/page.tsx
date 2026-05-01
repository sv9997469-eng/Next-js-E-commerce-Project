import Card from "../../components/Card";
import Link from "next/link";
import Img from "../../components/hero.png";
import Img2 from "../../components/hero2.png";
import Img3 from "../../components/hero3.png";
import Img4 from "../../components/hero4.png";
import Image from "next/image";
import { FaEye } from "react-icons/fa6";
import { FaShopLock } from "react-icons/fa6";

import categoryImg from "../../components/categoryImg.png";
import categoryImg2 from "../../components/categoryImg2.jpg";
import categoryImg3 from "../../components/categoryImg3.png";
import categoryImg4 from "../../components/categoryImg4.png";
import categoryImg5 from "../../components/categoryImg5.png";
import GroupImg1 from "../../components/GroupImg1.png";
import GroupImg2 from "../../components/GroupImg2.png";
import GroupImg3 from "../../components/GroupImg3.png";

import CategoryCard from "../../components/CategoryCard";
import { URL } from "url";
export default async function Home() {
  const res = await fetch("http://localhost:3000/api/products");
  const result = await res.json();

  const data = result.products.slice(4, 8);

  return (
    <>
      <section className="mt-15 overflow-hidden">
        <div className="relative  max-w-7xl  mx-auto min-h-screen bg-linear-to-r from-primary to-primary/30  flex lg:h-screen flex-col lg:flex-row rounded-lg">
          {/* *** */}
          {/* circle */}
          <div className="absolute -top-12 left-4 h-30 w-30 rounded-full bg-white/50"></div>
          {/* ********************** */}

          <div className="absolute bottom-0 left-0 w-full  z-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-full"
            >
              <path
                fill="white"
                fillOpacity="1"
                d="M0,320L34.3,298.7C68.6,277,137,235,206,192C274.3,149,343,107,411,80C480,53,549,43,617,58.7C685.7,75,754,117,823,160C891.4,203,960,245,1029,240C1097.1,235,1166,181,1234,186.7C1302.9,192,1371,256,1406,288L1440,320L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
              ></path>
            </svg>
          </div>

          {/* ******************************************* */}

          <div className="grid grid-cols-12  w-full h-full relative z-10">
            {/*  */}
            <div className="col-span-12 gap-8  md:col-span-6 z-10 flex flex-col md:gap-3 lg:gap-4  px-8 py-30">
              <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-white  lg:max-w-lg">
                Elevate Your <span className="font-medium">Everyday Style</span>
              </p>
              <p className="text-lg font-lighter text-white">
                Quality products delivered to your door.
              </p>
              <Link
                href={`/products?page=1&limit=10`}
                className="bg-white rounded-md py-2 cursor-pointer hover:bg-white/80     w-40 flex gap-4 items-center justify-center text-xl"
              >
                Shop Now <FaShopLock />
              </Link>
            </div>

            {/* {*********2nd col******** */}
            <div className="col-span-12 md:col-span-6 flex items-center justify-center relative min-h-[400px] md:min-h-full">
              {/* *********************** */}
              <div className="relative  h-full w-full flex items-start md:items-center justify-center">
                <Image
                  alt="hero_img"
                  src={Img}
                  width={400}
                  height={400}
                  className="z-20 w-[300px] md:w-[250px] md:absolute  md:top-1/4 md:right-1/6 lg:w-[300px] lg:right-1/4 lg:top-1/4"
                />

                {/* ********truck************************* */}

                <Image
                  alt="hero_img"
                  src={Img4}
                  className="hidden md:block md:absolute md:top-6 md:right-1/4 md:w-40    lg:top-10 lg:right-1/3 lg:w-50  opacity-90"
                />

                {/* ************telephone********************* */}

                <Image
                  alt="hero_img"
                  src={Img3}
                  className="hidden md:block md:w-40  md:absolute md:top-1/4 md:left-4 lg:w-60 lg:left-10  opacity-80 xl:left-20"
                />

                {/* {***************earth*************************} */}

                <Image
                  alt="hero_img"
                  src={Img2}
                  className="hidden md:block md:absolute md:w-40  md:top-1/4 md:right-0  lg:w-60 lg:right-15   z-10"
                />
              </div>
              {/* ******************************* */}
            </div>
          </div>
          {/* ************* */}

          {/* ************************** */}

          {/* circle */}

          <div className="absolute h-30 w-30 rounded-full bg-white/50 bottom-50 -right-12 opacity-80"></div>

          {/* **** */}
        </div>
      </section>

      {/* features */}
      <section className="py-8  px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between py-2">
            <p className="text-2xl text-primary font-medium">
              Grab the best deal
            </p>
            <Link
              href={`/products?page=1&limit=10`}
              className="text-primary text-sm font-medium hover:underline underline-offset-4 decoration-2 decoration-primary   cursor-pointer flex items-center gap-2 border-2 px-4 py-2 rounded-md"
            >
              <FaEye /> View more
            </Link>
          </div>
          <hr className="text-gray-200/60" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
            {data.map((val) => (
              <Card key={val.id} product={val} />
            ))}
          </div>
        </div>
      </section>

      {/* *******top categories */}

      <section className="py-6 px-2">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between items-center py-4">
            <p className="text-2xl text-primary font-medium">
              Shop From Top Categories
            </p>
            <Link
              href={`/products?page=1&limit=10`}
              className="text-primary text-sm font-medium hover:underline underline-offset-4 decoration-2 decoration-primary   cursor-pointer flex items-center gap-2 border-2 px-4 py-2 rounded-md"
            >
              <FaEye /> View more
            </Link>
          </div>
          <hr className="text-gray-200/60" />

          {/*  */}
          <div className="flex items-center justify-around py-2">
            {[
              { text: "Watches", img: categoryImg },
              { text: "Laptop", img: categoryImg },
              { text: "Jwellery", img: categoryImg },
              { text: "Fashion", img: categoryImg },
              { text: "Games", img: categoryImg },
            ].map((val, i) => (
              <CategoryCard key={i} value={val} />
            ))}
          </div>

          {/*  */}
          <div className="flex justify-between items-center  py-4 px-4">
            <p className="text-2xl text-primary font-medium">
              Shop From Top Categories
            </p>
            <Link
              href={`/products?page=1&limit=10`}
              className="text-primary text-sm font-medium hover:underline underline-offset-4 decoration-2 decoration-primary   cursor-pointer flex items-center gap-2 border-2 px-4 py-2 rounded-md"
            >
              <FaEye /> View more
            </Link>
          </div>
          <hr className="text-gray-200/60" />
        </div>
        {/* ******************** */}
        <div className="max-w-7xl mx-auto">
          <div className="grid   md:grid-cols-3 justify-around py-4 gap-4">
            <Image src={GroupImg1} width={400} height={500} alt="group_img" />
            <Image src={GroupImg2} width={400} height={500} alt="group_img" />
            <Image src={GroupImg3} width={400} height={500} alt="group_img" />
          </div>
        </div>
      </section>

      {/* ***Our */}

      <section className="">
        <div
          className="relative max-w-7xl mx-auto  h-125 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('/servicesBg.svg')" }}
        >
          {/* *** */}
          {/* text */}
          <div className="flex flex-col  px-4 py-10  gap-6 items-start md:items-center md:py-20 z-500">
            <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mt-10">
              {" "}
              Shop With Total Confidence
            </p>
            <p className="text-lg max-w-xl  font-lighter text-white md:text-center">
              From secure payments to lightning-fast delivery, we’ve built a
              shopping experience that puts your needs first.
            </p>
            <Link
              href={`/products?page=1&limit=10`}
              className="bg-white rounded-md py-2 cursor-pointer hover:bg-white/80     w-40 flex gap-4 items-center justify-center text-xl"
            >
              Shop Now <FaShopLock />
            </Link>
          </div>

          {/* *********circle***** */}

          <div className="absolute top-0 left-0 h-30 w-30 rounded-full bg-white/50 opacity-50"></div>

{/* circle */}
          <div className="absolute bg-white/50 opacity-50     top-1/4 left-1/2 w-30 h-30 md:top-1/3 md:left-0   md:w-64 md:h-64 rounded-full "></div>

          <Image
            src={"/serviceImg.png"}
            width={80}
            height={80}
            alt="shopping_img"
            className="hidden  md:block -rotate-30  md:absolute md:right-1/5  md:top-1/2 md:w-30 md:h-30 lg:w-40 lg:h-40 lg:right-1/6  object-cover "
          />

          {/* ************* */}
        







        </div>




      </section>

      {/* benefits*/}
<section className="py-4">
    <div className="relative max-w-7xl mx-auto  h-125 bg-cover bg-center">

   <div className="absolute w-80 h-80 rounded-full bg-primary/10 opacity-
   30">
   
   <div className="w-40 h-40 rounded-full bg-primary/10 opacity-30"></div>

  


   </div>



      <div className="grid grid-cols-12 justify-center   mt-20">

<div className="col-span-8 py-14 flex flex-col leading-3 relative">

{/* text */}
<p className="text-5xl text-primary font-bold">Why choosing us ?</p>

<p className="text-xl text-primary max-w-lg leading-8 mt-4">Most trusted E-commerce  Website <span>Trusted by</span> <span className="text-4xl font-bold flex">10000 + customers</span> </p>
{/* ************** */}

{/* benefits */}
<div className="w-full flex gap-4 justify-center mt-5">


<ul className="pl-30 flex flex-col gap-4">
<li className="text-primary font-semibold font-nz-guides text-2xl pl-4">Secure Payment</li>
<li className="text-primary font-semibold font-nz-guides text-2xl pl-8">Fast Deilvery</li>
<li className="text-primary font-semibold font-nz-guides text-2xl pl-12">Easy Return</li>
<li className="text-primary font-semibold font-nz-guides text-2xl pl-16">Refundable Products</li>
</ul>





</div>

 <div className="absolute left-1/2 w-100 h-100 rounded-full bg-primary/10 opacity-30 flex items-center justify-center">
 <div className="w-40 h-40 rounded-full bg-primary/10 opacity-90"></div>
 
 </div>
{/* ************************* */}

 

</div>
{/* ************************** */}

<div className="col-span-4 relative">

<div className="absolute bg-primary/20 h-80 w-80 rounded-full opacity-10"></div>
<div className="absolute bg-primary/20 h-40 w-40 rounded-full opacity-10"></div>


<Image src={"/shoppingstore.png"} width={900} height={900} alt="store_img" className="z-50"/>

</div>


</div>
    </div>
</section>
      {/* ************footer*********** */}
    </>
  );
}
