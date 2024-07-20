import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export function CreateRestaurantButton() {
  return (
    <Link to="/restaurants/add">
      <Button className="bg-green-500 text-white hover:bg-green-600">
        <Plus className="mr-1" />
        Create restaurant
      </Button>
    </Link>
  );
}
