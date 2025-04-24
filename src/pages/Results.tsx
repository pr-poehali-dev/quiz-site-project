import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CircleCheck, ArrowLeft, RotateCcw, Send } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getQuizResults } from "@/components/QuizData";

interface ResultsState {
  answers: number[];
  userName: string;
  timeExpired?: boolean;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [results, setResults] = useState<{
    score: number;
    message: string;
    correctCount?: number;
    totalQuestions?: number;
    userName?: string;
  } | null>(null);

  useEffect(() => {
    if (!location.state) {
      navigate('/');
      return;
    }

    const { answers, userName, timeExpired } = location.state as ResultsState;
    if (!answers || !Array.isArray(answers)) {
      navigate('/');
      return;
    }

    const quizResults = getQuizResults(answers, userName || "");
    setResults(quizResults);
  }, [location.state, navigate]);

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
    
    // В реальном приложении здесь был бы API-запрос
    // Мы симулируем успешную отправку
    setTimeout(() => {
      setEmailSent(true);
      setEmailError("");
    }, 1000);
  };

  if (!results) {
    return null;
  }

  const timeExpired = (location.state as ResultsState)?.timeExpired;

  return (
    <div className="flex flex-col min-h-screen bg-burgundy text-white">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="rounded-full bg-velvet/30 p-3 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <CircleCheck className="h-8 w-8 text-white" />
            </div>

            <h1 className="text-3xl font-bold text-white mb-4">
              Ваши результаты
            </h1>

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
                    <Progress value={results.score} className="h-3 w-48" />
                    <span className="text-2xl font-bold">{results.score}%</span>
                  </div>
                </div>

                {results.correctCount !== undefined && results.totalQuestions !== undefined && (
                  <p className="text-white/80">
                    Правильных ответов: {results.correctCount} из {results.totalQuestions}
                  </p>
                )}

                <div className="pt-4 border-t border-white/10">
                  <p className="text-lg">{results.message}</p>
                </div>
              </div>
            </div>

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
                  {emailSent && <p className="text-green-300 text-sm">Результаты отправлены на почту {email}!</p>}
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-velvet hover:bg-velvet/90"
                  disabled={emailSent}
                >
                  <Send className="mr-2 h-4 w-4" /> Отправить результаты
                </Button>
              </form>
            </Card>

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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
