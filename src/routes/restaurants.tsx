import { columns } from "@/components/dashboard/columns";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { EmptyRestaurants } from "@/components/empty-restaurants";

const data = [
  {
    name: "Test 1",
    description: "test 1 description",
    location: "Kolkata",
  },
  {
    name: "Test 2",
    description: "test 2 description",
    location: "Delhi",
  },
];

const Restaurants = () => {
  if (!data.length) {
    return <EmptyRestaurants />;
  }

  return (
    <>
      <div className="mx-auto p-6 md:p-12">
        <div className="flex items-center justify-between mb-5">
          <h2>Restaurants List</h2>
          <Button className="bg-green-500 text-white hover:bg-green-600">
            <Plus className="mr-1" />
            Create restaurant
          </Button>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Restaurants;
