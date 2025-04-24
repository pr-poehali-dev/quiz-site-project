import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";

interface EmailResultsProps {
  userName?: string;
  score: number;
  correctCount?: number;
  totalQuestions?: number;
  message: string;
}

const EmailResults = ({ 
  userName, 
  score, 
  correctCount, 
  totalQuestions, 
  message 
}: EmailResultsProps) => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [sending, setSending] = useState(false);

  const handleSendResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setEmailError("Пожалуйста, введите email");
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Пожалуйста, введите корректный email");
      return;
    }
    
    // Показываем индикатор загрузки
    setSending(true);
    
    // Симулируем отправку на сервер
    setTimeout(() => {
      // Имитация данных, которые были бы отправлены на сервер
      const emailData = {
        to: email,
        subject: "Тест",
        body: `
          Результаты теста по стандартам обслуживания
          
          Имя: ${userName || "Участник"}
          Правильных ответов: ${correctCount || 0} из ${totalQuestions || 12}
          Процент выполнения: ${score || 0}%
          
          Заключение: ${message || ""}
          
          С уважением,
          Дирекция гостиничного жилого фонда
        `
      };
      
      console.log("Отправка данных:", emailData);
      
      setSending(false);
      setEmailSent(true);
      setEmailError("");
    }, 1500);
  };

  return (
    <Card className="bg-velvet/20 border-velvet/30 p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">Отправить результаты на почту</h3>
      <form onSubmit={handleSendResults} className="space-y-4">
        <div className="space-y-2 text-left">
          <Label htmlFor="email">Email адрес</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            className="bg-white/10 border-white/20 text-white"
          />
          {emailError && <p className="text-red-300 text-sm">{emailError}</p>}
          {emailSent && (
            <div className="bg-green-500/20 border border-green-500/30 rounded p-2 mt-2">
              <p className="text-green-300 text-sm">Результаты отправлены на почту {email}!</p>
              <p className="text-green-300 text-xs mt-1">
                Тема письма: "Тест"<br />
                Содержание: Правильных ответов {correctCount} из {totalQuestions}
              </p>
            </div>
          )}
        </div>
        <Button 
          type="submit" 
          className="w-full bg-velvet hover:bg-velvet/90"
          disabled={emailSent || sending}
        >
          {sending ? (
            <>
              <span className="animate-pulse mr-2">●</span> Отправка...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> Отправить результаты
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default EmailResults;
