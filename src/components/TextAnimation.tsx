
import { useState, useEffect } from "react";

const TextAnimation = () => {
  const words = ["Marketing", "Operations", "Logistics", "Forward-Thinking Companies"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150; // faster when deleting
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      // If deleting, remove a character
      if (isDeleting) {
        setCurrentText(prev => prev.substring(0, prev.length - 1));
      } else {
        // If typing, add a character
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }
      
      // When word is fully typed
      if (!isDeleting && currentText === currentWord) {
        // Wait 1.5 seconds before starting to delete
        setTimeout(() => setIsDeleting(true), 1500);
      } 
      // When word is fully deleted
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        // Move to next word (or back to first word)
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);
  
  return (
    <span className="text-terralex-teal">
      {currentText}<span className="animate-pulse">|</span>
    </span>
  );
};

export default TextAnimation;
