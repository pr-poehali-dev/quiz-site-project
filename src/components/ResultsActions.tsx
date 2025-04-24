import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, RotateCcw, Camera } from "lucide-react";

const ResultsActions = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-4">
        <div className="flex items-start space-x-3">
          <Camera className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-white text-left mb-1">Важное примечание:</h3>
            <p className="text-sm text-white/80 text-left">
              Сделайте скриншот своих результатов и отправьте его на электронную почту:
            </p>
            <p className="text-sm font-bold text-white text-left mt-2">
              gevorgyan-kg@ranepa.ru
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="flex-1 border-white/20 text-white hover:bg-white/10"
        >
          <Home className="mr-2 h-4 w-4" /> На главную
        </Button>
        <Button
          onClick={() => navigate("/quiz")}
          variant="outline"
          className="flex-1 border-white/20 text-white hover:bg-white/10"
        >
          <RotateCcw className="mr-2 h-4 w-4" /> Пройти заново
        </Button>
      </div>
    </div>
  );
};

export default ResultsActions;
