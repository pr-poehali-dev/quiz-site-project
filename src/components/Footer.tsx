import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ranepa-burgundy text-white py-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="font-bold text-lg mb-2">Президентская академия</h3>
          <p className="text-sm text-white max-w-2xl mx-auto">
            Дирекция гостиничного жилого фонда Российской академии народного хозяйства и государственной службы при Президенте РФ
          </p>
        </div>

        <div className="border-t border-ranepa-velvet/50 mt-6 pt-6 text-center text-sm text-white">
          &copy; {new Date().getFullYear()} Президентская академия. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
