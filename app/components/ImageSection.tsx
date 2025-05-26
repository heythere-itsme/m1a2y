import { CircleArrowLeft, ChevronDown, GalleryHorizontal } from "lucide-react"
import ImageCarousel from "./ImageCrousel"
import { carData } from "~/data";
import { cn } from "~/lib/utils";
import { Link } from "react-router";
const carImages = [
  '/WD_Project/McL750S_Track_Rear3_4_Final_crop-16x9.webp',
  '/WD_Project/McLaren_750S_001-scaled-e1682609642863.jpg',
  '/WD_Project/New-2024-McLaren-750S-Spider-Performance.jpg',
  '/WD_Project/1-2025-tesla-cybertruck-front-view.webp',
  'WD_Project/GTC Azure Media 1.1.jpg'
];

const ImageSection = () => {
  return (
    <div>
    <div className="flex justify-evenly py-5 ">
      <Link to={'/'}>
        <div className="flex gap-3">
          
            <CircleArrowLeft size={40} strokeWidth={1} className="self-center"/>
          
            <h3 className="text-prim font-agdasima">750S</h3>
            
        </div>
        </Link>
        <div className="w-[700px]"></div>
        <div className="flex h-fit self-center gap-4">
            <div className="flex gap-3 border-black border-[1px] w-fit rounded-[10px] px-3 bg-primary-100">
                <h2 className="font-agdasima text-small">{carData.variant}</h2>
                <ChevronDown strokeWidth={1} className="self-center"/>
            </div>
            <div className="flex border-black border-[1px] rounded-[10px] justify-between px-3 w-fit gap-5 bg-primary-100">
                <GalleryHorizontal className="self-center" size={20}/>
                <h2 className={cn(
    "font-agdasima text-small self-center border-black border-l-[1px] pl-4",
    !carData.toggle3d ? "opacity-70" : "opacity-100"
  )}>3d</h2>
            </div>
        </div>
    </div>
    <div>
           <ImageCarousel images={carData.pics}/> 
    </div>
    </div>
    
  )
}

export default ImageSection