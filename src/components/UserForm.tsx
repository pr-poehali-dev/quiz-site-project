import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userName.trim()) {
      setError("Пожалуйста, введите ваше ФИО");
      return;
    }
    
    // Store user name in sessionStorage
    sessionStorage.setItem("quizUserName", userName);
    
    // Navigate to quiz
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
            <div className="space-y-2">
              <Input
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                type="text"
                placeholder="Ваше ФИО"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  setError("");
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
          >
            Начать тест <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default UserForm;
