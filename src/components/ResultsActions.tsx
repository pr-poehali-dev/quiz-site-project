import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Camera, Redo, Home } from "lucide-react";

const ResultsActions = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <Card className="bg-blue-600/20 border-blue-600/30 text-white">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Camera className="h-10 w-10 text-blue-400" />
            <h3 className="text-lg font-semibold">Сохраните ваш результат</h3>
            <p className="text-white/80">
              Пожалуйста, сделайте скриншот страницы с результатами и отправьте его на почту: 
              <br />
              <span className="font-bold text-white">gevorgyan-kg@ranepa.ru</span>
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="w-full sm:w-auto flex items-center gap-2 bg-white/5 border-white/10 hover:bg-white/10"
        >
          <Home className="h-4 w-4" />
          На главную
        </Button>
        
        <Button 
          onClick={() => navigate("/quiz")}
          className="w-full sm:w-auto flex items-center gap-2"
        >
          <Redo className="h-4 w-4" />
          Пройти заново
        </Button>
      </div>
    </div>
  );
};

export default ResultsActions;
