import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award } from "lucide-react";

interface ResultsScoreProps {
  score: number;
  correctCount: number;
  totalQuestions: number;
  message: string;
  timeExpired?: boolean;
}

const ResultsScore = ({ 
  score, 
  correctCount, 
  totalQuestions, 
  message, 
  timeExpired 
}: ResultsScoreProps) => {
  return (
    <div className="space-y-8">
      <Card className="bg-green-600/20 border-green-600/30 text-white">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <Award className="h-16 w-16 text-green-500" />
            <h2 className="text-2xl font-bold">
              {timeExpired ? "Время вышло!" : "Ваш результат"}
            </h2>
            
            <div className="w-full space-y-2">
              <div className="flex justify-between text-sm">
                <span>Общий результат</span>
                <span className="font-medium text-green-400">{score}%</span>
              </div>
              <Progress 
                value={score} 
                className="h-2 bg-white/20" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <Card className="bg-white/10 border-white/5">
                <CardContent className="p-4 text-center">
                  <div className="text-xl font-bold text-green-400">{correctCount}</div>
                  <div className="text-xs text-white/60">Правильных ответов</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/5">
                <CardContent className="p-4 text-center">
                  <div className="text-xl font-bold">{totalQuestions - correctCount}</div>
                  <div className="text-xs text-white/60">Неправильных ответов</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/5">
                <CardContent className="p-4 text-center">
                  <div className="text-xl font-bold">{totalQuestions}</div>
                  <div className="text-xs text-white/60">Всего вопросов</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-lg text-center max-w-md">
              {message}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsScore;
