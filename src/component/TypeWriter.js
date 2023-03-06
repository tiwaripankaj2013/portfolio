import React, { useState, useEffect } from 'react';

function Typewriter(props) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(450);

  useEffect(() => {
    const fullText = props.text;
    const textLen = fullText.length;
    let timer;

    if (isDeleting) {
      setTypingSpeed(100);
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, typingSpeed);
    } else {
      setTypingSpeed(350);
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === fullText) {
      setTypingSpeed(4000);
      setIsDeleting(true);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  return (
    <span>{text}&nbsp;</span>
  );
}

export default Typewriter;
