import fullStar from "./fullstar.png";
import emptyStar from "./empty.png"
import Image from "next/image";
import halfStar from "./halfstar.png";
export function Rating({rating}:{rating:number}){
    const starRating=[];
    for(let i=1;i<=Math.floor(rating);i++){
    starRating.push(<Image alt="full_star" src={fullStar} width={20} height={20} key={i}/>)
    }

     if(rating%1>=0.5){
        starRating.push(<Image alt="half_star" src={halfStar} width={20} height={20} key={"halfstar"}/>)
       }

while(starRating.length<5){
        starRating.push(<Image alt="empty_star" src={emptyStar} width={20} height={20} key={"empty_star"+ starRating.length}/>)
    }
    

    return(<>
    
    {rating && <p className="flex items-center mt-2">{starRating}</p>}
  
    {rating}
    </>)
}