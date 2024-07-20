import { columns } from "@/components/dashboard/columns";
import { DataTable } from "@/components/data-table";
import { EmptyRestaurants } from "@/components/empty-restaurants";
import { CreateRestaurant } from "@/components/create-restaurant";

const Restaurants = () => {
  const restaurants = localStorage.getItem("restaurants");

  const data = restaurants ? JSON.parse(restaurants) : [];

  if (!data.length) {
    return <EmptyRestaurants />;
  }

  return (
    <div className="mx-auto p-6 md:p-12">
      <div className="flex items-center justify-between mb-5">
        <h2>Restaurants List</h2>
        <CreateRestaurant />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Restaurants;
