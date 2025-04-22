import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 flex items-center justify-center bg-ranepa-gray">
        <div className="text-center px-4 py-16">
          <h1 className="text-9xl font-bold text-ranepa-blue mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-6">Страница не найдена</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Извините, страница, которую вы ищете, не существует или была перемещена.
          </p>
          <Button asChild className="bg-ranepa-blue hover:bg-ranepa-blue/90">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
