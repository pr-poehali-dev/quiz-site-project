import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-ranepa-burgundy text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="РАНХиГС" className="h-10 invert" />
          <div className="flex flex-col">
            <span className="font-bold">РАНХиГС</span>
            <span className="text-xs text-ranepa-pearl/80">Дирекция гостиничного жилого фонда</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-ranepa-pearl hover:text-ranepa-gold transition-colors">
            Главная
          </Link>
          <Link to="/quiz" className="text-sm font-medium text-ranepa-pearl hover:text-ranepa-gold transition-colors">
            Начать квиз
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
