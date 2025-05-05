
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface Answer {
  id: number;
  text: string;
}

interface Question {
  id: number;
  text: string;
  answers: Answer[];
  correctAnswer: number;
}

interface QuizQuestionProps {
  question: Question;
  totalQuestions: number;
  currentIndex: number;
  onAnswer: (answerId: number) => void;
}

const QuizQuestion = ({ question, totalQuestions, currentIndex, onAnswer }: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);

  // Reset selection when question changes
  useEffect(() => {
    setSelectedAnswer(null);
  }, [question.id]);

  // Auto-submit answer when selected
  useEffect(() => {
    if (selectedAnswer !== null) {
      // Небольшая задержка для визуальной обратной связи
      const timer = setTimeout(() => {
        onAnswer(selectedAnswer);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [selectedAnswer, onAnswer]);

  // Проверка наличия вопроса и ответов
  if (!question || !question.answers) {
    return (
      <Card className="bg-velvet/20 border-velvet/30 text-white overflow-hidden">
        <CardContent className="pt-6">
          <div className="mb-6">
            <span className="text-sm text-white/60">
              Вопрос {currentIndex + 1} из {totalQuestions}
            </span>
            <h2 className="text-xl font-bold mt-2">Загрузка вопроса...</h2>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-velvet/20 border-velvet/30 text-white overflow-hidden">
      <CardContent className="pt-6">
        <div className="mb-6">
          <span className="text-sm text-white/60">
            Вопрос {currentIndex + 1} из {totalQuestions}
          </span>
          <h2 className="text-xl font-bold mt-2">{question.text}</h2>
        </div>

        <div className="space-y-3">
          {question.answers.map((answer) => (
            <button
              key={answer.id}
              type="button"
              onClick={() => setSelectedAnswer(answer.id)}
              className={`w-full text-left p-4 rounded-lg transition-colors ${
                selectedAnswer === answer.id
                  ? "bg-velvet text-white"
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>{answer.text}</div>
                {selectedAnswer === answer.id && (
                  <CheckCircle className="h-5 w-5 ml-2 shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;
