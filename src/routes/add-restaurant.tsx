"use client";

import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { RestaurantForm } from "@/components/restaurant-form";

// eslint-disable-next-line react-refresh/only-export-components
export const formSchema = z.object({
  name: z.string().min(1, "Restaurant name is required"),
  description: z.string().min(1, "Restaurant description is required"),
  location: z.string().min(1, "Restaurant location is required"),
});

const values = {
  name: "",
  description: "",
  location: "",
};

const AddRestaurant = () => {
  const navigate = useNavigate();

  function onSubmit(values: z.infer<typeof formSchema>) {
    const restaurants = localStorage.getItem("restaurants");
    const updatedData = restaurants ? JSON.parse(restaurants) : [];
    const data = { id: uuidv4(), ...values };
    updatedData.push(data);
    localStorage.setItem("restaurants", JSON.stringify(updatedData));
    navigate("/restaurants");
  }

  return (
    <div className="mx-auto p-6 md:p-10 max-w-[600px]">
      <h2 className="text-xl mb-10 font-bold uppercase md:text-2xl">
        Add a new restaurant
      </h2>
      <RestaurantForm onSubmit={onSubmit} values={values} />
    </div>
  );
};

export default AddRestaurant;
