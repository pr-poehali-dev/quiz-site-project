import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizQuestion from "@/components/QuizQuestion";
import { quizQuestions } from "@/components/QuizData";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has entered their name
    const storedUserName = sessionStorage.getItem("quizUserName");
    if (!storedUserName) {
      navigate("/");
      return;
    }
    setUserName(storedUserName);
  }, [navigate]);

  const handleAnswer = (answerId: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerId;
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed - navigate to results
      navigate("/results", { 
        state: { 
          answers: newAnswers, 
          userName: userName
        } 
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-burgundy text-white">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2 text-center">
              Квиз "Стандарты обслуживания"
            </h1>
            <p className="text-white/80 text-center mb-8">
              {userName ? `${userName}, удачи в прохождении теста!` : 'Проверьте свои знания'}
            </p>
            
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
