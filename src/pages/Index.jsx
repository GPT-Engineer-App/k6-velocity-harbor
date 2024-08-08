import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Cat } from 'lucide-react';

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const catFacts = [
    "Cats sleep for about 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
    "The first cat in space was a French cat named Felicette in 1963.",
    "Cats can jump up to six times their length."
  ];

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-64 rounded-md mb-4"
        />
        <h2 className="text-2xl font-semibold mb-4 text-center">Did You Know?</h2>
        <p className="text-lg text-gray-700 mb-4 text-center">{catFacts[factIndex]}</p>
        <Button onClick={nextFact} className="w-full">
          <Cat className="mr-2 h-4 w-4" /> Next Fact
        </Button>
      </div>
    </div>
  );
};

export default Index;
