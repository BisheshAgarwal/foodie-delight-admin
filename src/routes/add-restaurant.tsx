"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(1, "Restaurant name is required"),
  description: z.string().min(1, "Restaurant description is required"),
  location: z.string().min(1, "Restaurant location is required"),
});

const AddRestaurant = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      location: "",
    },
  });

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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the name of the restaurant"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a description for the restaurant"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the restaurant location"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full bg-green-500 hover:bg-green-600 text-white"
            type="submit"
          >
            Create restaurant
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddRestaurant;
