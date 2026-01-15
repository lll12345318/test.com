import React, { useState, useMemo } from 'react';
import { exams, questions as allQuestions } from './data';
import { Exam } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import ExamScreen from './components/ExamScreen';
import ResultsScreen from './components/ResultsScreen';
import { BrainCircuitIcon } from './components/icons';

const App: React.FC = () => {
  const [appState, setAppState] = useState<'welcome' | 'exam' | 'results'>('welcome');
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

  const handleStartExam = (exam: Exam) => {
    setSelectedExam(exam);
    setAppState('exam');
    setUserAnswers({});
  };

  const handleFinishExam = (answers: Record<string, string>) => {
    setUserAnswers(answers);
    setAppState('results');
  };

  const handleRestart = () => {
    setSelectedExam(null);
    setAppState('welcome');
    setUserAnswers({});
  };
  
  const examQuestions = useMemo(() => {
    return allQuestions.filter(q => q.examId === selectedExam?.id);
  }, [selectedExam]);

  const renderContent = () => {
    switch (appState) {
      case 'exam':
        if (selectedExam) {
          return (
            <ExamScreen
              exam={selectedExam}
              questions={examQuestions}
              onFinishExam={handleFinishExam}
            />
          );
        }
        return null;
      case 'results':
        if (selectedExam) {
          return (
            <ResultsScreen
              exam={selectedExam}
              questions={examQuestions}
              answers={userAnswers}
              onRestart={handleRestart}
            />
          );
        }
        return null;
      case 'welcome':
      default:
        return <WelcomeScreen exams={exams} onStartExam={handleStartExam} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      <header className="bg-primary-dark shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BrainCircuitIcon className="w-8 h-8 text-secondary" />
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              AI-Powered Exam Tutor
            </h1>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>
      <footer className="bg-gray-200 text-center p-4 text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} AI Exam Tutor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;