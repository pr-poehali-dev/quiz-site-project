import { Progress } from "@/components/ui/progress";

interface ResultsScoreProps {
  score: number;
  correctCount?: number;
  totalQuestions?: number;
  message: string;
  timeExpired?: boolean;
}

const ResultsScore = ({ score, correctCount, totalQuestions, message, timeExpired }: ResultsScoreProps) => {
  return (
    <div className="mb-8">
      {timeExpired && (
        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mb-6">
          <p className="text-yellow-300 font-medium">
            Время на прохождение теста истекло. Результаты основаны на уже данных ответах.
          </p>
        </div>
      )}
      
      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 mb-6">
        <div className="flex flex-col items-center mb-4">
          <span className="text-sm text-white/60 mb-2">Ваш результат</span>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-green-400">{score}%</span>
            {correctCount !== undefined && totalQuestions !== undefined && (
              <span className="text-white/60 ml-2">
                ({correctCount} из {totalQuestions} правильных)
              </span>
            )}
          </div>
        </div>
        
        <Progress value={score} className="h-2.5 bg-white/10" indicatorClassName="bg-green-500" />
        
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Заключение:</h3>
          <p className="text-white/90">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsScore;
