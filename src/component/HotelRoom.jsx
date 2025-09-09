import { data } from "../constant/HotelData";
import ListItems from "./ListItems";



const HotelRoom = () => {
  const HotelRoom = data.slice(4, 8);
  return (
    <div className="container mx-auto pt-6">
      <h2 className="pb-5 font-medium text-[1.5rem] leading-[36px] text-light">Hotel With Living Room</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {HotelRoom.map((data) => (
          <ListItems key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default HotelRoom;
