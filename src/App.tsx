import { useState } from "react";
import questionsData from "./data/questions.json";
import CardModal from "./components/CardModal";
import "./index.css";

interface Question {
  question: string;
  category: string;
}

function App() {
  const [remainingQuestions, setRemainingQuestions] = useState<Question[]>([
    ...questionsData,
  ]);
  const [usedQuestions, setUsedQuestions] = useState<Question[]>([]);
  const [currentCard, setCurrentCard] = useState<Question | null>(null);
  const [showModal, setShowModal] = useState(false);

  const drawCard = () => {
    if (remainingQuestions.length === 0) {
      alert("You've drawn all the questions! 🎉 Restarting the deck.");
      setRemainingQuestions([...questionsData]);
      setUsedQuestions([]);
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const question = remainingQuestions[randomIndex];

    setCurrentCard(question);
    setShowModal(true);

    // Remove the used question
    const newRemaining = [...remainingQuestions];
    newRemaining.splice(randomIndex, 1);
    setRemainingQuestions(newRemaining);

    // Add to used
    setUsedQuestions([...usedQuestions, question]);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <button
        onClick={drawCard}
        className="px-6 py-4 bg-white text-black rounded-full text-xl shadow-lg hover:scale-105 transition-all"
      >
        Draw a Card 💌
      </button>

      {showModal && currentCard && (
        <CardModal
          question={currentCard.question}
          category={currentCard.category}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
