import { data } from "../constant/HotelData";
import ListItems from "./ListItems";

const HouseBacyard = () => {
  const HouseBackyard = data.slice(0, 4)
  return (
    <div className="container mx-auto pt-6">
      <h2 className="pb-5 font-medium text-[1.5rem] leading-[36px] text-light">
        House with Backyard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {HouseBackyard.map((data) => (
          <ListItems key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default HouseBacyard
