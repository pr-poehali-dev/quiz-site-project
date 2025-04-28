import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [alreadyTaken, setAlreadyTaken] = useState(false);
  const navigate = useNavigate();

  // Проверка, проходил ли пользователь тест сегодня
  const checkUserAttemptToday = (name: string) => {
    const today = new Date().toISOString().split('T')[0]; // Текущая дата в формате YYYY-MM-DD
    const userAttempts = localStorage.getItem("quizAttempts");
    
    if (userAttempts) {
      const attempts = JSON.parse(userAttempts);
      // Проверяем, есть ли запись о прохождении теста на сегодня
      return attempts.some((attempt: {name: string, date: string}) => 
        attempt.name.toLowerCase() === name.toLowerCase() && attempt.date === today
      );
    }
    
    return false;
  };

  // Сохранение попытки пользователя
  const saveUserAttempt = (name: string) => {
    const today = new Date().toISOString().split('T')[0];
    const userAttempts = localStorage.getItem("quizAttempts");
    
    const newAttempt = {
      name: name,
      date: today
    };
    
    if (userAttempts) {
      const attempts = JSON.parse(userAttempts);
      localStorage.setItem("quizAttempts", JSON.stringify([...attempts, newAttempt]));
    } else {
      localStorage.setItem("quizAttempts", JSON.stringify([newAttempt]));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userName.trim()) {
      setError("Пожалуйста, введите ваше ФИО");
      return;
    }
    
    // Проверяем, проходил ли пользователь тест сегодня
    if (checkUserAttemptToday(userName.trim())) {
      setAlreadyTaken(true);
      return;
    }
    
    // Сохраняем попытку пользователя
    saveUserAttempt(userName.trim());
    
    // Сохраняем имя пользователя в sessionStorage
    sessionStorage.setItem("quizUserName", userName);
    
    // Переходим к тесту
    navigate("/quiz");
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-velvet/20 border-velvet/30 text-white">
      <CardHeader>
        <CardTitle className="text-2xl">Начните тестирование</CardTitle>
        <CardDescription className="text-white/80">
          Пожалуйста, введите ваше ФИО перед началом квиза
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="space-y-4">
            {alreadyTaken && (
              <Alert className="bg-red-500/20 border-red-500/30 text-white">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Вы уже проходили тест сегодня. Вы сможете пройти тест снова завтра.
                </AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Input
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                type="text"
                placeholder="Ваше ФИО"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  setError("");
                  setAlreadyTaken(false);
                }}
              />
              {error && <p className="text-red-300 text-sm">{error}</p>}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit"
            className="w-full bg-velvet hover:bg-velvet/90 text-white"
            disabled={alreadyTaken}
          >
            Начать тест <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default UserForm;
