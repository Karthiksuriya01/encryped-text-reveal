import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const letters = "abcdefghijklmnopqrstuvwxyz-.,+*!?@&%/=";
const loopDelay = 1000;
const initDelay = 100;

const EncryptedButton = ({ text, revealSpeed = 50, loop = false }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [iteration, setIteration] = useState(0);
  const intervalRef = useRef(null);

  const encrypt = (iteration) => {
    return text
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return text[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
  };

  useEffect(() => {
    if (isHovering) {
      intervalRef.current = setTimeout(() => {
        setIteration((prev) => prev + 1);
        intervalRef.current = setInterval(() => {
          setIteration((prev) => {
            if (prev >= text.length) {
              if (loop) {
                setTimeout(() => setIteration(0), loopDelay);
                return prev;
              }
              clearInterval(intervalRef.current);
              return prev;
            }
            return prev + 1;
          });
        }, revealSpeed);
      }, initDelay);
    } else {
      clearTimeout(intervalRef.current);
      clearInterval(intervalRef.current);
      setIteration(0);
      setDisplayText(text); // Reset to original text when not hovering
    }

    return () => {
      clearTimeout(intervalRef.current);
      clearInterval(intervalRef.current);
    };
  }, [isHovering, text, revealSpeed, loop]);

  useEffect(() => {
    if (isHovering) {
      setDisplayText(encrypt(iteration));
    }
  }, [iteration, text, isHovering]);

  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ fontFamily: 'monospace', padding: '10px', fontSize: '16px' }}
    >
      {displayText}
    </button>
  );
};

EncryptedButton.propTypes = {
  text: PropTypes.string.isRequired,
  revealSpeed: PropTypes.number,
  loop: PropTypes.bool,
};

export default EncryptedButton;
