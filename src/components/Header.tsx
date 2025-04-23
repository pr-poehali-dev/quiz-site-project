import { Link } from "react-router-dom";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-burgundy text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Дирекция гостиничного жилого фонда</span>
            <span className="text-xs text-white/80">Стандарты обслуживания гостей</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-white hover:text-velvet transition-colors">
            Главная
          </Link>
          <Link to="/quiz" className="text-sm font-medium text-white hover:text-velvet transition-colors">
            Начать квиз
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
