
import React, { useState } from 'react';
import { CVForm } from './components/CVForm';
import { CVPreview } from './components/CVPreview';
import { CVData, UserInput } from './types';
import { generateCvContent } from './services/geminiService';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [generatedCv, setGeneratedCv] = useState<CVData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (userInput: UserInput) => {
    setIsLoading(true);
    setError(null);
    setGeneratedCv(null);
    try {
      const cvData = await generateCvContent(userInput);
      setGeneratedCv(cvData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:pr-4">
            <CVForm onGenerate={handleGenerate} isLoading={isLoading} />
          </div>
          <div className="lg:pl-4">
            <CVPreview cvData={generatedCv} isLoading={isLoading} error={error} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
