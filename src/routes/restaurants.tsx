import { DataTable } from "@/components/data-table";
import { EmptyRestaurants } from "@/components/empty-restaurants";
import { CreateRestaurantButton } from "@/components/create-restaurant-button";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export type Restaurant = {
  id: string;
  name: number;
  description: string;
  location: string;
};

const Restaurants = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const deleteRestaurantHandler = (id: string) => {
    let updatedRestaurants = JSON.parse(localStorage.getItem("restaurants")!);
    updatedRestaurants = updatedRestaurants.filter(
      (item: { id: string }) => item.id !== id
    );
    localStorage.setItem("restaurants", JSON.stringify(updatedRestaurants));
    setRestaurantList(updatedRestaurants);
  };

  const columns: ColumnDef<Restaurant>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "description",
        header: "Description",
      },
      {
        accessorKey: "location",
        header: "Location",
      },
      {
        id: "actions",
        cell: ({ row }) => {
          const { id } = row.original;
          return (
            <div className="flex gap-5 justify-end">
              <Link to={`/restaurants/${id}/edit`}>
                <Button variant="ghost">
                  <Pencil size={20} />
                </Button>
              </Link>
              <Button
                variant={"destructive"}
                onClick={() => deleteRestaurantHandler(id)}
              >
                <Trash size={20} />
              </Button>
            </div>
          );
        },
      },
    ],
    []
  );

  const fetchRestaurants = useCallback(() => {
    const restaurants = localStorage.getItem("restaurants");
    const data = restaurants ? JSON.parse(restaurants) : [];
    return data;
  }, []);

  useEffect(() => {
    const data = fetchRestaurants();
    setRestaurantList(data);
  }, [fetchRestaurants]);

  if (!restaurantList.length) {
    return <EmptyRestaurants />;
  }

  return (
    <div className="mx-auto p-6 md:p-12">
      <div className="flex items-center justify-between mb-5">
        <h2>Restaurants List</h2>
        <CreateRestaurantButton />
      </div>
      <DataTable columns={columns} data={restaurantList} />
    </div>
  );
};

export default Restaurants;
