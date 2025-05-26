
function DetailSection({ title, details }) {
  return (
    <div className="bg-[#EEEEEE] rounded-[10px] border-black border-[1px] shadow-100 px-5 py-3 w-[300px]">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      
      <ul className="text-sm text-gray-700">
        {Object.entries(details).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CarsDet() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      <h1 className="text-4xl font-bold mb-2">
        {data.company} {data.model} {data.variant}
      </h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">About the Car:</h2>
        <p className="text-gray-700 mt-2">{data.abt}</p>
      </section>

      <div className=''>
        <DetailSection title="Engine: " details={data.engine} />
        <DetailSection title="Transmission: " details={data.transmission} />
        <DetailSection title="Dimensions & Weight" details={data.dimensionsAndWeight} />
        <DetailSection title="Other Features" details={data.otherFeatures} />
        <DetailSection title="Safety Features" details={data.safetyFeatures} />
        <DetailSection title="Interior Features" details={data.interiorFeatures} />
        <DetailSection title="Exterior Features" details={data.exteriorFeatures} />
      </div>
    </div>
  );
}
