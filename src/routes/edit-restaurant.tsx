import { RestaurantForm } from "@/components/restaurant-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

// eslint-disable-next-line react-refresh/only-export-components
export const formSchema = z.object({
  name: z.string().min(1, "Restaurant name is required"),
  description: z.string().min(1, "Restaurant description is required"),
  location: z.string().min(1, "Restaurant location is required"),
});

const EditRestaurant = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    location: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("restaurants");
    const restaurants = data ? JSON.parse(data) : [];
    const foundRestaurant = restaurants.find(
      (item: { id: string }) => item.id === id
    );
    setValues(foundRestaurant);
  }, [id]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = localStorage.getItem("restaurants");
    const restaurants = data ? JSON.parse(data) : [];
    const foundRestaurantIndex = restaurants.findIndex(
      (item: { id: string }) => item.id === id
    );
    restaurants[foundRestaurantIndex] = {
      id,
      ...values,
    };
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
    navigate("/restaurants");
  }

  return (
    <div className="mx-auto p-6 md:p-10 max-w-[600px]">
      <h2 className="text-xl mb-10 font-bold uppercase md:text-2xl">
        Edit restaurant
      </h2>
      <RestaurantForm onSubmit={onSubmit} values={values} />
    </div>
  );
};

export default EditRestaurant;
