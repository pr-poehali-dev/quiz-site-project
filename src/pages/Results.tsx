import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getQuizResults } from "@/components/QuizData";
import { Trophy, Check, X, RefreshCw, Share2 } from "lucide-react";

const Results = () => {
  const location = useLocation();
  const userAnswers = location.state?.answers || [];
  const results = getQuizResults(userAnswers);

  const scoreColor = results.score >= 80 
    ? "text-green-600" 
    : results.score >= 60 
      ? "text-yellow-600" 
      : "text-ranepa-red";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-ranepa-gray py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden">
              <div className="bg-ranepa-blue p-6 text-white text-center">
                <Trophy className="h-16 w-16 mx-auto mb-4" />
                <h1 className="text-3xl font-bold">Результаты квиза</h1>
                <p className="text-lg opacity-90">Жилой фонд РАНХиГС</p>
              </div>
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-gray-100 mb-4">
                    <span className={`text-4xl font-bold ${scoreColor}`}>{results.score}%</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Ваш результат</h2>
                  <p className="text-gray-600">
                    Правильных ответов: {results.correctCount} из {results.totalQuestions}
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-3">Комментарий:</h3>
                  <p className="text-gray-700">{results.message}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    className="flex-1 gap-2 bg-ranepa-blue hover:bg-ranepa-blue/90"
                  >
                    <Link to="/quiz">
                      <RefreshCw className="h-4 w-4" />
                      Пройти еще раз
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    className="flex-1 gap-2"
                  >
                    <Link to="/">
                      Вернуться на главную
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-8 pt-6 border-t text-center">
                  <p className="text-gray-600 mb-4">Поделитесь своим результатом:</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      <Share2 className="h-4 w-4 mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center mt-6 text-sm text-gray-500">
              <p>Для получения более подробной информации о проживании в общежитиях РАНХиГС, пожалуйста, обратитесь в Дирекцию гостиничного жилого фонда.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
