import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizQuestion from "@/components/QuizQuestion";
import { quizQuestions } from "@/components/QuizData";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleAnswer = (answerId: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerId;
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed - navigate to results
      navigate("/results", { state: { answers: [...newAnswers, answerId] } });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-ranepa-gray py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-ranepa-blue mb-8 text-center">
              Квиз "Жилой фонд РАНХиГС"
            </h1>
            
            {currentQuestionIndex < quizQuestions.length && (
              <QuizQuestion
                question={quizQuestions[currentQuestionIndex]}
                totalQuestions={quizQuestions.length}
                currentIndex={currentQuestionIndex}
                onAnswer={handleAnswer}
              />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
