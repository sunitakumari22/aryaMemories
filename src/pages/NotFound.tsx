
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 md:py-24 bg-memoir-50 flex items-center">
        <div className="container">
          <div className="max-w-md mx-auto text-center">
            <h1 className="font-serif text-7xl font-medium text-memoir-900 mb-4">404</h1>
            <p className="text-xl text-memoir-700 mb-6">
              We couldn't find the page you're looking for
            </p>
            <p className="text-memoir-600 mb-8">
              The page might have been moved, deleted, or perhaps never existed.
            </p>
            <Button asChild size="lg">
              <Link to="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
