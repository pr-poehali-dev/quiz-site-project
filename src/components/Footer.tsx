import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ranepa-blue text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">РАНХиГС</h3>
            <p className="text-sm text-gray-200">
              Дирекция гостиничного жилого фонда Российской академии народного хозяйства и государственной службы при Президенте РФ
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>119571, г. Москва, проспект Вернадского, 82</li>
              <li>Телефон: +7 (495) 937-02-99</li>
              <li>Email: info@ranepa.ru</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Полезные ссылки</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="https://www.ranepa.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-ranepa-gold transition-colors">Официальный сайт</a></li>
              <li><a href="https://www.ranepa.ru/abiturient/" target="_blank" rel="noopener noreferrer" className="hover:text-ranepa-gold transition-colors">Абитуриентам</a></li>
              <li><Link to="/" className="hover:text-ranepa-gold transition-colors">Вернуться на главную</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} РАНХиГС. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
