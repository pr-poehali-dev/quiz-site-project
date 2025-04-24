import { Progress } from "@/components/ui/progress";

interface ResultsScoreProps {
  score: number;
  correctCount?: number;
  totalQuestions?: number;
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
    <>
      {timeExpired && (
        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6 text-white">
          <p>Время вышло! Учтены только отвеченные вопросы.</p>
        </div>
      )}

      <div className="bg-velvet/20 border border-velvet/30 rounded-lg p-6 mb-8">
        <div className="space-y-4">
          <div>
            <p className="text-lg text-white/80 mb-2">Ваш результат:</p>
            <div className="flex items-center justify-center gap-4">
              <Progress value={score} className="h-3 w-48" />
              <span className="text-2xl font-bold">{score}%</span>
            </div>
          </div>

          {correctCount !== undefined && totalQuestions !== undefined && (
            <p className="text-white/80">
              Правильных ответов: {correctCount} из {totalQuestions}
            </p>
          )}

          <div className="pt-4 border-t border-white/10">
            <p className="text-lg">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsScore;
