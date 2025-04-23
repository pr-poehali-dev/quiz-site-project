import { useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
  }, [question]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAnswer !== null) {
      onAnswer(selectedAnswer);
    }
  };

  return (
    <Card className="bg-velvet/20 border-velvet/30 text-white overflow-hidden">
      <CardContent className="pt-6">
        <div className="mb-6">
          <span className="text-sm text-white/60">
            Вопрос {currentIndex + 1} из {totalQuestions}
          </span>
          <h2 className="text-xl font-bold mt-2">{question.text}</h2>
        </div>

        <form onSubmit={handleSubmit}>
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
              type="submit"
              className="w-full bg-velvet hover:bg-velvet/90 text-white"
              disabled={selectedAnswer === null}
            >
              Ответить
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;
