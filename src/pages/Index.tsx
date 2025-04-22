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
        <section className="bg-gradient-to-b from-white to-ranepa-gray py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-6">
                <div className="inline-block bg-ranepa-blue/10 text-ranepa-blue px-4 py-1 rounded-full text-sm font-semibold">
                  Квиз для абитуриентов и родителей
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-ranepa-blue">
                  Узнайте больше об общежитиях РАНХиГС
                </h1>
                <p className="text-lg text-gray-700">
                  Пройдите увлекательный квиз и проверьте свои знания о проживании в общежитиях Российской академии народного хозяйства и государственной службы.
                </p>
                <div className="flex gap-4">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-ranepa-blue hover:bg-ranepa-blue/90"
                  >
                    <Link to="/quiz">
                      Начать квиз <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/placeholder.svg" 
                  alt="Общежития РАНХиГС" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-ranepa-blue">
              Почему стоит выбрать общежития РАНХиГС
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-ranepa-blue">
                <CardContent className="pt-6">
                  <div className="bg-ranepa-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-ranepa-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Комфортное проживание</h3>
                  <p className="text-gray-600">
                    Современные общежития с различными типами комнат, от блочного до гостиничного формата.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ranepa-red">
                <CardContent className="pt-6">
                  <div className="bg-ranepa-red/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-ranepa-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Удобное расположение</h3>
                  <p className="text-gray-600">
                    Близость к учебным корпусам, хорошая транспортная доступность и развитая инфраструктура.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ranepa-lightblue">
                <CardContent className="pt-6">
                  <div className="bg-ranepa-lightblue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-ranepa-lightblue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Студенческое сообщество</h3>
                  <p className="text-gray-600">
                    Возможность общаться и обмениваться опытом со студентами разных факультетов и курсов.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-ranepa-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы проверить свои знания?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Пройдите наш квиз и узнайте, насколько хорошо вы знакомы с общежитиями РАНХиГС и правилами проживания в них.
            </p>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-ranepa-blue"
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
