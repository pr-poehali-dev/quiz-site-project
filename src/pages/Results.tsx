import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getQuizResults } from "@/components/QuizData";
import ResultsScore from "@/components/ResultsScore";
import ResultsActions from "@/components/ResultsActions";

interface ResultsState {
  answers: number[];
  userName: string;
  timeExpired?: boolean;
}

interface QuizResult {
  score: number;
  message: string;
  correctCount?: number;
  totalQuestions?: number;
  userName?: string;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState<QuizResult | null>(null);

  useEffect(() => {
    // Проверяем, пришли ли данные из предыдущего экрана
    if (!location.state) {
      navigate('/');
      return;
    }

    const { answers, userName, timeExpired } = location.state as ResultsState;
    
    // Валидация ответов
    if (!answers || !Array.isArray(answers)) {
      navigate('/');
      return;
    }

    // Получаем результаты
    const quizResults = getQuizResults(answers, userName || "");
    setResults(quizResults);
  }, [location.state, navigate]);

  // Если результаты еще не обработаны, ничего не показываем
  if (!results) {
    return null;
  }

  const timeExpired = (location.state as ResultsState)?.timeExpired;

  return (
    <div className="flex flex-col min-h-screen bg-burgundy text-white">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Иконка и заголовок */}
            <div className="rounded-full bg-velvet/30 p-3 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <CircleCheck className="h-8 w-8 text-white" />
            </div>

            <h1 className="text-3xl font-bold text-white mb-4">
              Ваши результаты
            </h1>

            {/* Компонент с результатами */}
            <ResultsScore 
              score={results.score}
              correctCount={results.correctCount}
              totalQuestions={results.totalQuestions}
              message={results.message}
              timeExpired={timeExpired}
            />

            {/* Компонент с кнопками навигации и инструкцией */}
            <ResultsActions />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
