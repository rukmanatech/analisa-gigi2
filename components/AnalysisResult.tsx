import React from 'react';

interface AnalysisResultProps {
  result: string;
}

export function AnalysisResult({ result }: AnalysisResultProps) {
  const sections = result.split('\n\n');

  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Hasil Analisis:</h2>
      <div className="space-y-3">
        {sections.map((section, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-md">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{section}</p>
          </div>
        ))}
      </div>
    </div>
  );
}