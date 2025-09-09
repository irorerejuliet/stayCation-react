import { data } from "../constant/HotelData";
import ListItems from "./ListItems";

const KitchenApartment = () => {
  const KitchenApartment = data.slice(8, 12);
  return (
    <div className="container mx-auto pt-6">
      <h2 className="pb-5 font-medium text-[1.5rem] leading-[36px] text-light">
       Apartment With Kitchen
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {KitchenApartment.map((data) => (
          <ListItems key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default KitchenApartment;
