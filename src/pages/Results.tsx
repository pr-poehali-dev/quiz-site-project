import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResultsScore from "@/components/ResultsScore";
import ResultsActions from "@/components/ResultsActions";
import { getQuizResults } from "@/components/QuizData";

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
            
            {/* Блок с действиями */}
            <ResultsActions />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
