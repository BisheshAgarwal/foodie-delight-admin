import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import comingSoon from "../assets/coming-soon.svg";

export const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <img src={comingSoon} height={110} width={110} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">
        Dashboard page coming soon
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a restaurant for your application
      </p>
      <div className="mt-6">
        <Link to="/restaurants">
          <Button
            size="lg"
            className="bg-green-500 text-white hover:bg-green-600"
          >
            Go to restaurants
          </Button>
        </Link>
      </div>
    </div>
  );
};
