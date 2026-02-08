import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, XCircle, Award, RefreshCw, Settings } from 'lucide-react';
import { initialQuestions } from './data/questions';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard, quiz, results, admin
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [instantFeedback, setInstantFeedback] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Load questions from localStorage or use initial data
  useEffect(() => {
    const savedQuestions = localStorage.getItem('oracleQuizQuestions');
    if (savedQuestions) {
      setQuestions(JSON.parse(savedQuestions));
    } else {
      setQuestions(initialQuestions);
      localStorage.setItem('oracleQuizQuestions', JSON.stringify(initialQuestions));
    }
  }, []);

  const startQuiz = () => {
    setCurrentView('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizCompleted(false);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (instantFeedback && userAnswers[currentQuestionIndex] !== undefined) {
      return; // Already answered in instant feedback mode
    }

    setSelectedAnswer(answerIndex);

    if (instantFeedback) {
      setUserAnswers({ ...userAnswers, [currentQuestionIndex]: answerIndex });
    }
  };

  const handleNext = () => {
    if (!instantFeedback && selectedAnswer !== null) {
      setUserAnswers({ ...userAnswers, [currentQuestionIndex]: selectedAnswer });
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(userAnswers[currentQuestionIndex + 1] ?? null);
    } else {
      // Quiz complete
      if (!instantFeedback && selectedAnswer !== null) {
        const finalAnswers = { ...userAnswers, [currentQuestionIndex]: selectedAnswer };
        setUserAnswers(finalAnswers);
      }
      setQuizCompleted(true);
      setCurrentView('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(userAnswers[currentQuestionIndex - 1] ?? null);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: questions.length,
      percentage: ((correct / questions.length) * 100).toFixed(1)
    };
  };

  const addQuestion = (newQuestion) => {
    const questionWithId = {
      ...newQuestion,
      id: Math.max(...questions.map(q => q.id), 0) + 1
    };
    const updatedQuestions = [...questions, questionWithId];
    setQuestions(updatedQuestions);
    localStorage.setItem('oracleQuizQuestions', JSON.stringify(updatedQuestions));
  };

  // Dashboard Component
  const Dashboard = () => (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-oracle-red">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Oracle Fusion AI Agent Studio Prep
          </h1>
          <p className="text-gray-600 mb-8">Test your knowledge and prepare for certification</p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-1">Total Questions</p>
                <p className="text-3xl font-bold text-oracle-red">{questions.length}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-1">Passing Score</p>
                <p className="text-3xl font-bold text-oracle-red">68%</p>
              </div>
            </div>
          </div>

          <button
            onClick={startQuiz}
            className="w-full bg-oracle-red text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Start Quiz
          </button>

          <button
            onClick={() => setCurrentView('admin')}
            className="w-full mt-4 text-gray-500 text-sm hover:text-oracle-red transition-colors"
          >
            <Settings className="inline w-4 h-4 mr-1" />
            Admin Mode
          </button>
        </div>
      </div>
    </div>
  );

  // Quiz Component
  const Quiz = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isAnswered = userAnswers[currentQuestionIndex] !== undefined;
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Question {currentQuestionIndex + 1} of {questions.length}
              </h2>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={instantFeedback}
                  onChange={(e) => setInstantFeedback(e.target.checked)}
                  className="mr-2 w-4 h-4 accent-oracle-red"
                />
                <span className="text-sm text-gray-700">Show Answers Instantly</span>
              </label>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-oracle-red h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              {currentQuestion.question}
            </p>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showFeedback = instantFeedback && isAnswered;

                let optionClass = "border-2 p-4 rounded-lg cursor-pointer transition-all ";

                if (showFeedback) {
                  if (isSelected && isCorrect) {
                    optionClass += "border-green-500 bg-green-50";
                  } else if (isSelected && !isCorrect) {
                    optionClass += "border-red-500 bg-red-50";
                  } else if (isCorrect) {
                    optionClass += "border-green-500 bg-green-50";
                  } else {
                    optionClass += "border-gray-200 bg-white";
                  }
                } else if (isSelected) {
                  optionClass += "border-oracle-red bg-red-50";
                } else {
                  optionClass += "border-gray-200 hover:border-oracle-red bg-white";
                }

                return (
                  <div
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={optionClass}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800">{option}</span>
                      {showFeedback && (
                        <>
                          {isCorrect && <CheckCircle2 className="w-6 h-6 text-green-600" />}
                          {isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-600" />}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Source/Explanation */}
            {instantFeedback && isAnswered && (
              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-sm font-semibold text-blue-900 mb-1">Source:</p>
                <p className="text-sm text-blue-800">{currentQuestion.source}</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex items-center px-6 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!instantFeedback && selectedAnswer === null}
              className="flex items-center px-6 py-3 bg-oracle-red text-white rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Results Component
  const Results = () => {
    const score = calculateScore();
    const passed = parseFloat(score.percentage) >= 68;

    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Score Banner */}
          <div className={`rounded-lg shadow-lg p-8 mb-8 ${passed ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-orange-500 to-red-500'}`}>
            <div className="text-center text-white">
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-2">
                {passed ? 'Certified Ready!' : 'Keep Studying'}
              </h1>
              <p className="text-xl mb-4">
                {passed
                  ? 'Congratulations! You\'re ready for the certification exam.'
                  : 'You\'re getting there! Review the material and try again.'}
              </p>
              <div className="text-5xl font-bold mb-2">{score.percentage}%</div>
              <p className="text-lg">
                {score.correct} out of {score.total} correct
              </p>
            </div>
          </div>

          {/* Review List */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Your Answers</h2>
            <div className="space-y-6">
              {questions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;

                return (
                  <div key={question.id} className="border-b pb-6 last:border-b-0">
                    <div className="flex items-start mb-3">
                      <span className="font-semibold text-gray-700 mr-2">Q{index + 1}.</span>
                      <p className="text-gray-800 flex-1">{question.question}</p>
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 ml-2" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 ml-2" />
                      )}
                    </div>

                    <div className="ml-7 space-y-2">
                      <div className={`p-3 rounded ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                        <p className="text-sm font-semibold mb-1">
                          {isCorrect ? 'Your Answer (Correct):' : 'Your Answer (Incorrect):'}
                        </p>
                        <p className="text-sm">{question.options[userAnswer]}</p>
                      </div>

                      {!isCorrect && (
                        <div className="p-3 rounded bg-green-50 border border-green-200">
                          <p className="text-sm font-semibold mb-1">Correct Answer:</p>
                          <p className="text-sm">{question.options[question.correctAnswer]}</p>
                        </div>
                      )}

                      <div className="p-3 rounded bg-blue-50 border border-blue-200">
                        <p className="text-sm font-semibold mb-1">Source:</p>
                        <p className="text-sm">{question.source}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Retake Button */}
          <button
            onClick={() => setCurrentView('dashboard')}
            className="w-full flex items-center justify-center px-6 py-4 bg-oracle-red text-white rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Retake Quiz
          </button>
        </div>
      </div>
    );
  };

  // Admin Component
  const Admin = () => {
    const [formData, setFormData] = useState({
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctAnswer: 0,
      source: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      const newQuestion = {
        question: formData.question,
        options: [formData.optionA, formData.optionB, formData.optionC, formData.optionD],
        correctAnswer: parseInt(formData.correctAnswer),
        source: formData.source
      };
      addQuestion(newQuestion);
      setFormData({
        question: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctAnswer: 0,
        source: ''
      });
      alert('Question added successfully!');
    };

    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Admin Mode</h1>
              <button
                onClick={() => setCurrentView('dashboard')}
                className="text-gray-600 hover:text-oracle-red transition-colors"
              >
                ← Back to Dashboard
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Question Text
                </label>
                <textarea
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-oracle-red focus:outline-none"
                  rows="3"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Option A
                  </label>
                  <input
                    type="text"
                    value={formData.optionA}
                    onChange={(e) => setFormData({ ...formData, optionA: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-oracle-red focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Option B
                  </label>
                  <input
                    type="text"
                    value={formData.optionB}
                    onChange={(e) => setFormData({ ...formData, optionB: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-oracle-red focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Option C
                  </label>
                  <input
                    type="text"
                    value={formData.optionC}
                    onChange={(e) => setFormData({ ...formData, optionC: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-oracle-red focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Option D
                  </label>
                  <input
                    type="text"
                    value={formData.optionD}
                    onChange={(e) => setFormData({ ...formData, optionD: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-oracle-red focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Correct Answer (0=A, 1=B, 2=C, 3=D)
                </label>
                <select
                  value={formData.correctAnswer}
                  onChange={(e) => setFormData({ ...formData, correctAnswer: e.target.value })}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-oracle-red focus:outline-none"
                  required
                >
                  <option value={0}>A</option>
                  <option value={1}>B</option>
                  <option value={2}>C</option>
                  <option value={3}>D</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Source Citation
                </label>
                <input
                  type="text"
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-oracle-red focus:outline-none"
                  placeholder="e.g., Oracle AI Agent Studio - Documentation"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-oracle-red text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Add Question
              </button>
            </form>

            <div className="mt-8 pt-8 border-t">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Current Question Bank</h2>
              <p className="text-gray-600">
                Total Questions: <span className="font-bold text-oracle-red">{questions.length}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {currentView === 'dashboard' && <Dashboard />}
      {currentView === 'quiz' && <Quiz />}
      {currentView === 'results' && <Results />}
      {currentView === 'admin' && <Admin />}
    </>
  );
}

export default App;
