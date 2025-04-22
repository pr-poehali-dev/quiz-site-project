import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Home, BookOpen, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-ranepa-burgundy to-ranepa-darkred py-16 md:py-24 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-6">
                <div className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Квиз для абитуриентов и родителей
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                  Узнайте больше об общежитиях Президентской академии
                </h1>
                <p className="text-lg text-white">
                  Пройдите увлекательный квиз и проверьте свои знания о проживании в общежитиях Российской академии народного хозяйства и государственной службы.
                </p>
                <div className="flex gap-4">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-ranepa-gold text-ranepa-velvet hover:bg-ranepa-cream"
                  >
                    <Link to="/quiz">
                      Начать квиз <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://cdn.poehali.dev/files/35aa48a8-de8c-47b2-9520-f77571c9be74.jpg" 
                  alt="Общежития Президентской академии" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-ranepa-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-ranepa-burgundy">
              Почему стоит выбрать общежития Президентской академии
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-ranepa-burgundy shadow-lg">
                <CardContent className="pt-6">
                  <div className="bg-ranepa-burgundy/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-ranepa-burgundy" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-ranepa-burgundy">Комфортное проживание</h3>
                  <p className="text-gray-700">
                    Современные общежития с различными типами комнат, от блочного до гостиничного формата.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ranepa-red shadow-lg">
                <CardContent className="pt-6">
                  <div className="bg-ranepa-red/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-ranepa-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-ranepa-red">Удобное расположение</h3>
                  <p className="text-gray-700">
                    Близость к учебным корпусам, хорошая транспортная доступность и развитая инфраструктура.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ranepa-velvet shadow-lg">
                <CardContent className="pt-6">
                  <div className="bg-ranepa-velvet/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-ranepa-velvet" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-ranepa-velvet">Студенческое сообщество</h3>
                  <p className="text-gray-700">
                    Возможность общаться и обмениваться опытом со студентами разных факультетов и курсов.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-ranepa-velvet text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Готовы проверить свои знания?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
              Пройдите наш квиз и узнайте, насколько хорошо вы знакомы с общежитиями Президентской академии и правилами проживания в них.
            </p>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-ranepa-velvet"
            >
              <Link to="/quiz">
                Начать квиз <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
