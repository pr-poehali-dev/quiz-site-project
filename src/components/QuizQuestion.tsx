import { useState } from "react";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export type QuestionType = {
  id: number;
  text: string;
  options: string[];
  correctAnswer?: number;
};

type QuizQuestionProps = {
  question: QuestionType;
  totalQuestions: number;
  currentIndex: number;
  onAnswer: (answerId: number) => void;
};

const QuizQuestion = ({
  question,
  totalQuestions,
  currentIndex,
  onAnswer,
}: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleSubmit = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption);
      setSelectedOption(null);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Вопрос {currentIndex + 1} из {totalQuestions}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      <Card className="quiz-card">
        <h3 className="text-xl font-bold mb-6">{question.text}</h3>
        
        <RadioGroup 
          value={selectedOption?.toString()} 
          onValueChange={(value) => setSelectedOption(parseInt(value))}
          className="space-y-4 mb-6"
        >
          {question.options.map((option, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label 
                htmlFor={`option-${index}`} 
                className="flex-1 cursor-pointer font-normal"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
        
        <Button 
          onClick={handleSubmit} 
          disabled={selectedOption === null}
          className="w-full bg-ranepa-blue hover:bg-ranepa-blue/90"
        >
          Следующий вопрос
        </Button>
      </Card>
    </div>
  );
};

export default QuizQuestion;
