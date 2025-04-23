export interface QuestionType {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizQuestionProps {
  question: QuestionType;
  totalQuestions: number;
  currentIndex: number;
  onAnswer: (answerId: number) => void;
}

const QuizQuestion = ({ question, totalQuestions, currentIndex, onAnswer }: QuizQuestionProps) => {
  return (
    <div className="quiz-card bg-velvet/20 border-velvet/30 text-white">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full bg-velvet/40 text-white text-sm mb-4">
          Вопрос {currentIndex + 1} из {totalQuestions}
        </span>
        <h2 className="text-xl font-medium text-white">{question.text}</h2>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="w-full text-left p-4 rounded-lg transition-colors border border-white/20 hover:bg-velvet/30 focus:outline-none focus:ring-2 focus:ring-velvet"
            onClick={() => onAnswer(index)}
          >
            <span className="inline-flex items-center">
              <span className="flex items-center justify-center w-6 h-6 rounded-full mr-3 bg-white/20 text-white text-sm">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
