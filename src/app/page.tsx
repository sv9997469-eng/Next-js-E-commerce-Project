import img from "../../components/hero.jpg";
import Image from "next/image";
import Card from "../../components/Card";
import cardImg from "../../components/CardImg1.jpg";
import stickerImg from "../../components/handbag.png";
import sneakerImg from "../../components/sneaker.png";
// import shoes from "../../components/sneaker.png";


export default function Home() {
  return (
    <>
<main className="py-8">
<div className="max-w-7xl mx-auto py-8">

<div className="grid lg:grid-cols-2 items-center  p-4 rounded-xl">

<div className="flex flex-col  gap-8 py-8">

<h1 className="text-text text-2xl font-medium">Purchase with  pleasure</h1>
<h1 className="text-secondary font-bold text-6xl">Shopping is easy from your app</h1>

<p className="text-text text-base tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab sapiente voluptas inventore doloribus a illo sed reprehenderit corporis amet itaque.</p>

<button className="px-4 py-2 bg-primary text-white font-medium w-30">Shop now</button>

</div>
{/*  */}
<div className="flex justify-center py-4 relative">

  <div className="">
  <Image src={img} width={500} priority height={600} alt="hero-img" />
  </div>

{/*  */}
<div className="absolute top-10 left-0 -rotate-12">
  <Image src={stickerImg} width={60} height={60} alt="sticker-img" />
  
</div>
<div className="absolute top-50 left-0 -rotate-12">
  
  <Image src={sneakerImg} width={40} height={40} className="object-cover" alt="sticker-img"/>
</div>

</div>


</div>
</div>
</main>
 
 {/* features */}
<section>
<div className="mx-auto max-w-7xl">
  
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {Array.from({length:4},(_,i)=>({img:cardImg})).map((val,i)=><Card key={i} img ={val.img}
  />)}
</div>


</div>
</section>



    </>
  );
}
