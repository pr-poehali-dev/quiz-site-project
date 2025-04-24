import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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

        <div>
          <RadioGroup
            value={selectedAnswer?.toString()}
            onValueChange={(value) => setSelectedAnswer(parseInt(value))}
            className="space-y-3"
          >
            {question.answers.map((answer) => (
              <div
                key={answer.id}
                className={`flex items-center space-x-2 rounded-lg p-3 transition-colors ${
                  selectedAnswer === answer.id
                    ? "bg-velvet text-white"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <RadioGroupItem
                  value={answer.id.toString()}
                  id={`answer-${answer.id}`}
                  className="border-white text-white"
                />
                <Label
                  htmlFor={`answer-${answer.id}`}
                  className="flex-1 cursor-pointer py-1 text-white"
                >
                  {answer.text}
                </Label>
                {selectedAnswer === answer.id && (
                  <CheckCircle className="h-5 w-5 text-white" />
                )}
              </div>
            ))}
          </RadioGroup>

          <div className="mt-6">
            <Button
              type="button"
              className="w-full bg-velvet hover:bg-velvet/90 text-white"
              disabled={selectedAnswer === null}
              onClick={() => selectedAnswer !== null && onAnswer(selectedAnswer)}
            >
              Ответить
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;
