import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Clock } from "lucide-react";

interface ResultsScoreProps {
  score: number;
  correctCount: number;
  totalQuestions: number;
  message: string;
  timeExpired?: boolean;
}

const ResultsScore: React.FC<ResultsScoreProps> = ({
  score,
  correctCount,
  totalQuestions,
  message,
  timeExpired = false
}) => {
  // Determine bg color based on score
  const getScoreColor = (score: number) => {
    if (score >= 85) return "bg-green-500/20 border-green-500/30";
    if (score >= 70) return "bg-yellow-500/20 border-yellow-500/30";
    return "bg-red-500/20 border-red-500/30";
  };

  // Get progress color based on score
  const getProgressColor = (score: number) => {
    if (score >= 85) return "bg-green-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  // Get icon color based on score
  const getIconColor = (score: number) => {
    if (score >= 85) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <Card className={`${getScoreColor(score)} text-white`}>
      <CardContent className="pt-6">
        <div className="text-center mb-4">
          {timeExpired ? (
            <Clock className={`h-12 w-12 mx-auto mb-2 ${getIconColor(score)}`} />
          ) : (
            <Trophy className={`h-12 w-12 mx-auto mb-2 ${getIconColor(score)}`} />
          )}
          
          <h2 className="text-xl font-bold">
            {timeExpired ? "Время вышло!" : "Результат"}
          </h2>
          
          <p className="text-white/80 mb-4">
            {timeExpired 
              ? "К сожалению, время на прохождение теста закончилось." 
              : "Благодарим за прохождение теста по стандартам обслуживания!"}
          </p>
          
          <div className="text-4xl font-bold mb-2">
            {score}%
          </div>
          
          <p className="text-white/80">
            {correctCount} из {totalQuestions} вопросов
          </p>
        </div>
        
        <Progress 
          value={score} 
          className="h-3 bg-white/20" 
        />
        
        <div className="mt-6 p-4 bg-white/10 rounded-lg text-center">
          <p className="italic">{message}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsScore;
