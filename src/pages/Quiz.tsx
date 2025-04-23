import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizQuestion from "@/components/QuizQuestion";
import { quizQuestions } from "@/components/QuizData";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const QUIZ_TIME_LIMIT = 5 * 60; // 5 minutes in seconds

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [userName, setUserName] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(QUIZ_TIME_LIMIT);
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

  // Timer countdown
  useEffect(() => {
    if (timeRemaining <= 0) {
      // Time's up, navigate to results with current answers
      navigate("/results", { 
        state: { 
          answers: userAnswers, 
          userName: userName,
          timeExpired: true
        } 
      });
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, userAnswers, userName, navigate]);

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

  const formatTime = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-burgundy text-white">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-white">
                Квиз "Стандарты обслуживания"
              </h1>
              <Card className="bg-velvet/30 border-velvet p-2 px-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-white" />
                <span className="font-mono text-lg font-bold">{formatTime(timeRemaining)}</span>
              </Card>
            </div>
            
            <p className="text-white/80 mb-8">
              {userName ? `${userName}, удачи в прохождении теста!` : 'Проверьте свои знания'}
            </p>
            
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span>Прогресс</span>
                <span>{currentQuestionIndex + 1} из {quizQuestions.length}</span>
              </div>
              <Progress 
                value={(currentQuestionIndex / quizQuestions.length) * 100} 
                className="h-2 bg-white/20"
              />
            </div>
            
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
