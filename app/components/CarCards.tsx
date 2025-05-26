import type { carDetails } from '..';


const CarCards = ({company, model, year, img, color}: carDetails) => {

  return (
    <div className= 'car-cards' style={{ backgroundColor: color }}>
        <div className="w-[286px] h-[150px]">
            <img src={img} alt="car"/>
        </div>
        <div>
            <div className="flex justify-between px-[10px]">
                    <h3 className="!w-[150px]">{model}</h3>
                    <h3>{company}</h3>
            </div>
            <div className="pl-[10px] absolute top-60">
                <h2>{year}</h2>
            </div>
        </div>
    </div>
  )
}

export default CarCards