import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResultsScore from "@/components/ResultsScore";
import ResultsActions from "@/components/ResultsActions";
import ResultsAnswersList from "@/components/ResultsAnswersList";
import { getQuizResults } from "@/components/QuizData";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Получение данных из location state
  const state = location.state as { 
    answers?: number[], 
    userName?: string,
    timeExpired?: boolean
  } | null;
  
  // Редирект на главную, если нет данных
  React.useEffect(() => {
    if (!state || !state.answers || !state.userName) {
      navigate("/");
    }
  }, [state, navigate]);
  
  // Если данных нет, показываем заглушку
  if (!state || !state.answers || !state.userName) {
    return null;
  }

  // Получение результатов теста
  const results = getQuizResults(state.answers, state.userName);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-burgundy text-white">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-10">
            <h1 className="text-3xl font-bold text-center">
              Результаты теста
            </h1>
            
            {/* Блок с результатами */}
            <ResultsScore 
              score={results.score}
              correctCount={results.correctCount}
              totalQuestions={results.totalQuestions}
              message={results.message}
              timeExpired={state.timeExpired}
            />
            
            {/* Кнопка для отображения деталей */}
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                onClick={() => setShowDetails(!showDetails)}
                className="bg-velvet/20 hover:bg-velvet/30 border-velvet/30"
              >
                {showDetails ? (
                  <>
                    <ChevronUp className="h-4 w-4 mr-2" />
                    Скрыть детали ответов
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 mr-2" />
                    Показать детали ответов
                  </>
                )}
              </Button>
            </div>
            
            {/* Детали ответов */}
            {showDetails && <ResultsAnswersList userAnswers={state.answers} />}
            
            {/* Блок с действиями */}
            <ResultsActions />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};