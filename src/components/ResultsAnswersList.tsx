import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import { quizQuestions } from "./QuizData";

interface ResultsAnswersListProps {
  userAnswers: number[];
}

const ResultsAnswersList: React.FC<ResultsAnswersListProps> = ({ userAnswers }) => {
  return (
    <Card className="bg-velvet/20 border-velvet/30 text-white">
      <CardHeader>
        <CardTitle className="text-xl">Ваши ответы</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {quizQuestions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div 
                key={index} 
                className={`p-3 rounded-lg ${
                  isCorrect ? "bg-green-500/20 border border-green-500/30" : "bg-red-500/20 border border-red-500/30"
                }`}
              >
                <div className="flex items-start gap-2">
                  {isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-medium mb-1">
                      Вопрос {index + 1}: {question.text}
                    </div>
                    
                    <div className="text-sm">
                      {isCorrect ? (
                        <span className="text-green-300">Ответ верный</span>
                      ) : (
                        <span className="text-red-300">Ответ неверный</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsAnswersList;