import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserForm from "@/components/UserForm";
import { User, ArrowRight, CheckCircle, Home, Clock, Book } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-burgundy text-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-burgundy/90 z-10"></div>
          <img 
            src="https://cdn.poehali.dev/files/35aa48a8-de8c-47b2-9520-f77571c9be74.jpg" 
            alt="Здание" 
            className="w-full h-[500px] object-cover"
          />
          <div className="container mx-auto px-4 relative z-20 py-20 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Стандарты обслуживания гостей
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Проверьте свои знания о правилах работы в общежитиях
              </p>
              
              <UserForm />
            </div>
          </div>
        </section>
        
        {/* About Quiz Section */}
        <section className="bg-gradient-to-b from-burgundy to-dark-burgundy py-16 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">О стандартах обслуживания</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-velvet/20 border-velvet/30 p-6 backdrop-blur">
                <div className="rounded-full bg-velvet/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Коммуникация</h3>
                <p className="text-white/80">
                  Правила общения с гостями, приветствие и обращение по имени, важность визуального контакта.
                </p>
              </Card>
              
              <Card className="bg-velvet/20 border-velvet/30 p-6 backdrop-blur">
                <div className="rounded-full bg-velvet/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Доступ в комнаты</h3>
                <p className="text-white/80">
                  Правила входа в комнату гостя, обеспечение доступа техническим службам, соблюдение приватности.
                </p>
              </Card>
              
              <Card className="bg-velvet/20 border-velvet/30 p-6 backdrop-blur">
                <div className="rounded-full bg-velvet/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Забытые вещи</h3>
                <p className="text-white/80">
                  Процедуры работы с забытыми вещами, сроки хранения, документирование и обеспечение сохранности.
                </p>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Why Take Quiz Section */}
        <section className="py-16 bg-dark-burgundy">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Почему стоит пройти тест?
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-start gap-4 bg-velvet/20 p-6 rounded-lg">
                <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Проверьте свои знания</h3>
                  <p className="text-white/80">
                    Тест поможет определить, насколько хорошо вы знаете стандарты обслуживания в общежитиях.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-velvet/20 p-6 rounded-lg">
                <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Освежите информацию</h3>
                  <p className="text-white/80">
                    В процессе прохождения теста вы вспомните ключевые принципы коммуникации с гостями и работы с обращениями.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-velvet/20 p-6 rounded-lg">
                <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Подготовьтесь к работе</h3>
                  <p className="text-white/80">
                    Тест будет полезен как для новых сотрудников, так и для тех, кто хочет освежить знания стандартов обслуживания.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
