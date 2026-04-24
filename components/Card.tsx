import Image from "next/image";

import Link from "next/link";
export default function Card({ product }) {
  return (
    <>
      <div className="rounded-2xl shadow-md hover:shadow-xl transition-all duartion-300   flex flex-col  px-4  overflow-hidden">
        <div className="relative h-50">
          <Image
            src={product.image[0]}
            alt="product-img"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-1 py-2">
          <p className="text-lg min-h-12 line-clamp-2   font-semibold">
            {product.title}
          </p>

          <p className="text-xl font-bold text-primary">
            Rs.{Math.round(product.price * 10)}
          </p>

          {/* Button */}
          <Link
            href={`/products/${product.id}`}
            className="px-4 py-2 text-center rounded-lg border border-primary text-primary 
                 hover:bg-primary hover:text-white transition"
          >
            View Product
          </Link>
        </div>

        {/*  */}
      </div>
    </>
  );
}
