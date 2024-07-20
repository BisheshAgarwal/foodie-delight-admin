import empttyRestaurant from "../assets/empty-dashboard.svg";
import { CreateRestaurant } from "./create-restaurant";

export const EmptyRestaurants = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <img src={empttyRestaurant} height={110} width={110} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">
        Create your first restaurant!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a restaurant for your application
      </p>
      <div className="mt-6">
        <CreateRestaurant />
      </div>
    </div>
  );
};
