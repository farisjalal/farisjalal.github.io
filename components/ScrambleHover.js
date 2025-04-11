"use client"; // Add this directive for client-side hooks

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils"; // Adjust path relative to components directory

// Removed TypeScript interfaces and type annotations

const ScrambleHover = ({
  text,
  scrambleSpeed = 50,
  maxIterations = 10,
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className,
  scrambledClassName,
  sequential = false,
  revealDirection = "start",
  ...props
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set()); // Removed type <number>

  useEffect(() => {
    let interval; // Removed type NodeJS.Timeout
    let currentIteration = 0;

    const getNextIndex = () => {
      const textLength = text.length;
      switch (revealDirection) {
        case "start":
          return revealedIndices.size;
        case "end":
          return textLength - 1 - revealedIndices.size;
        case "center":
          const middle = Math.floor(textLength / 2);
          const offset = Math.floor(revealedIndices.size / 2);
          const nextIndex =
            revealedIndices.size % 2 === 0
              ? middle + offset
              : middle - offset - 1;

          if (
            nextIndex >= 0 &&
            nextIndex < textLength &&
            !revealedIndices.has(nextIndex)
          ) {
            return nextIndex;
          }

          // Fallback if center logic fails (e.g., already revealed)
          for (let i = 0; i < textLength; i++) {
            if (!revealedIndices.has(i)) return i;
          }
          return 0; // Should not happen if text.length > 0
        default:
          return revealedIndices.size;
      }
    };

    const shuffleText = (currentText) => {
      // Renamed param to avoid conflict
      if (useOriginalCharsOnly) {
        const positions = currentText.split("").map((char, i) => ({
          char,
          isSpace: char === " ",
          index: i,
          isRevealed: revealedIndices.has(i),
        }));

        const nonSpaceChars = positions
          .filter((p) => !p.isSpace && !p.isRevealed)
          .map((p) => p.char);

        // Shuffle remaining non-revealed, non-space characters
        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [nonSpaceChars[i], nonSpaceChars[j]] = [
            nonSpaceChars[j],
            nonSpaceChars[i],
          ];
        }

        let charIndex = 0;
        return positions
          .map((p) => {
            if (p.isSpace) return " ";
            if (p.isRevealed) return text[p.index]; // Use original text for revealed chars
            // Ensure charIndex doesn't go out of bounds
            return nonSpaceChars[charIndex++] || "";
          })
          .join("");
      } else {
        return currentText
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (revealedIndices.has(i)) return text[i]; // Use original text for revealed chars
            return availableChars[
              Math.floor(Math.random() * availableChars.length)
            ];
          })
          .join("");
      }
    };

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(""))).filter((char) => char !== " ")
      : characters.split("");

    if (isHovering) {
      setIsScrambling(true);
      // Reset revealed indices on new hover if sequential
      if (sequential) {
        setRevealedIndices(new Set());
      }
      currentIteration = 0; // Reset iteration count

      interval = setInterval(() => {
        if (sequential) {
          if (revealedIndices.size < text.length) {
            const nextIndex = getNextIndex();
            // Create a new Set to trigger state update
            setRevealedIndices((prev) => new Set(prev).add(nextIndex));
            // Pass the original text to shuffleText for sequential reveal
            setDisplayText(shuffleText(text));
          } else {
            clearInterval(interval);
            setIsScrambling(false);
            setDisplayText(text); // Ensure final text is correct
          }
        } else {
          // Pass the original text to shuffleText for non-sequential scramble
          setDisplayText(shuffleText(text));
          currentIteration++;
          if (currentIteration >= maxIterations) {
            clearInterval(interval);
            setIsScrambling(false);
            setDisplayText(text);
          }
        }
      }, scrambleSpeed);
    } else {
      // When not hovering, reset everything
      if (interval) clearInterval(interval);
      setIsScrambling(false);
      setDisplayText(text);
      setRevealedIndices(new Set());
    }

    // Cleanup interval on component unmount or when dependencies change
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [
    isHovering,
    text,
    characters,
    scrambleSpeed,
    useOriginalCharsOnly,
    sequential,
    revealDirection,
    maxIterations,
    // revealedIndices // Removing revealedIndices from deps to avoid potential loops with sequential reveal
  ]);

  return (
    <motion.span
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      className={cn("inline-block whitespace-pre-wrap", className)}
      {...props}
    >
      <span className='sr-only'>{text}</span>{" "}
      {/* Use original text for screen readers */}
      <span aria-hidden='true'>
        {displayText.split("").map((char, index) => (
          <span
            key={index}
            className={cn(
              // Apply scrambled class only when scrambling and not revealed
              isScrambling && isHovering && !revealedIndices.has(index)
                ? scrambledClassName
                : className // Use base className otherwise
            )}
          >
            {char}
          </span>
        ))}
      </span>
    </motion.span>
  );
};

export { ScrambleHover }; // Use named export
