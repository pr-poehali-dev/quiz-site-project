import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-burgundy text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} Дирекция гостиничного жилого фонда
          </p>
          <div className="flex items-center justify-center mt-2 text-sm text-white/60">
            <span>Сделано с</span>
            <Heart className="h-4 w-4 mx-1 text-velvet" />
            <span>для сотрудников</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
