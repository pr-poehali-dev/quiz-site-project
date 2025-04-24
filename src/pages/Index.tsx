import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Clock, Trophy, Book } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserForm from "@/components/UserForm";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleStartQuiz = (userName: string) => {
    // Сохраняем имя пользователя в sessionStorage
    sessionStorage.setItem("quizUserName", userName);
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col min-h-screen bg-burgundy text-white">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-6">
                Тест "Стандарты обслуживания"
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Проверьте знания стандартов обслуживания гостей для сотрудников линейного персонала
              </p>

              {!showForm ? (
                <Button
                  onClick={() => setShowForm(true)}
                  className="bg-velvet hover:bg-velvet/90 text-white px-8 py-6 text-lg"
                >
                  Начать тестирование <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              ) : (
                <Card className="bg-velvet/20 border-velvet/30">
                  <CardContent className="pt-6">
                    <UserForm onSubmit={handleStartQuiz} />
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-velvet/20 border-velvet/30 text-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-velvet/30 rounded-full p-3 mb-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">5 минут</h3>
                    <p className="text-white/80">
                      Время на прохождение теста ограничено
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-velvet/20 border-velvet/30 text-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-velvet/30 rounded-full p-3 mb-4">
                      <Book className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">12 вопросов</h3>
                    <p className="text-white/80">
                      Вопросы по всем ключевым аспектам стандартов обслуживания
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-velvet/20 border-velvet/30 text-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-velvet/30 rounded-full p-3 mb-4">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Результаты</h3>
                    <p className="text-white/80">
                      Мгновенная оценка знаний с возможностью отправки на почту
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-velvet/20 border-velvet/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">
                О тесте
              </h2>
              <div className="space-y-4 text-white/90">
                <p>
                  Данный тест предназначен для проверки знаний сотрудников линейного персонала по стандартам обслуживания гостей.
                </p>
                <p>
                  Тестирование позволяет оценить уровень владения правилами и процедурами, принятыми в Дирекции гостиничного жилого фонда.
                </p>
                <p>
                  Вопросы охватывают следующие темы:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Правила общения с гостями</li>
                  <li>Стандарты уборки помещений</li>
                  <li>Процедуры входа в номер</li>
                  <li>Обращение с забытыми вещами</li>
                  <li>Правила приемки и выдачи белья</li>
                  <li>Телефонные обращения</li>
                  <li>Контроль соблюдения стандартов</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
