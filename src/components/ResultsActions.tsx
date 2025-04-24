import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, RotateCcw } from "lucide-react";

const ResultsActions = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        asChild
        variant="outline" 
        className="border-white/30 text-white hover:bg-velvet/30 hover:text-white"
      >
        <Link to="/" className="inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> На главную
        </Link>
      </Button>
      <Button 
        asChild
        className="bg-velvet hover:bg-velvet/90 text-white"
      >
        <Link to="/quiz" className="inline-flex items-center gap-2">
          <RotateCcw className="h-4 w-4" /> Пройти еще раз
        </Link>
      </Button>
    </div>
  );
};

export default ResultsActions;
