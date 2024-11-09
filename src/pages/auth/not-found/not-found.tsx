import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-screen flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="container px-4 md:px-6 flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            404 - Page Not Found
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Oops! The page you're looking for seems to have wandered off. Let's
            get you back on track.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-4">
          <div className="flex justify-center">
            <FileQuestion className="h-24 w-24 text-primary animate-pulse" />
          </div>
          <Button asChild className="w-full">
            <NavLink to="/product">Return to Home</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
