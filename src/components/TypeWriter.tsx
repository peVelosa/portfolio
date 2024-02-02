/**
 * This is a simple component to get a
 * Typewrite effect
 */

import { useState, useEffect, useRef, useCallback } from 'react';

type TypeWriterProps = {
  words: string[];
  loop?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  cursor?: boolean;
  cursorStyle?: string;
  delaySpeed?: number;
  initialDelay?: number;
};

const TypeWriter = ({
  words,
  loop = 1,
  typeSpeed = 120,
  deleteSpeed = 100,
  cursor = true,
  cursorStyle = '|',
  delaySpeed = 0,
  initialDelay = 0,
}: TypeWriterProps) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [deletingStatus, setDeletingStatus] = useState({
    isDeleting: false,
    loopCount: 0,
    hasStarted: false,
  });
  const index = useRef(0);

  const sleep = useCallback(() => {
    return new Promise((resolve) => setTimeout(resolve, delaySpeed));
  }, [delaySpeed]);

  const typeWord = useCallback(() => {
    setCurrentText((old) => words[index.current].slice(0, old.length + 1));
  }, [words]);

  const untypeWord = useCallback(async () => {
    if (currentText === words[index.current]) {
      await sleep();
    }
    setCurrentText((old) => old.slice(0, old.length - 1));
  }, [currentText, words, sleep]);

  useEffect(() => {
    const initialDelayTimer = setTimeout(() => {
      setDeletingStatus((old) => ({
        ...old,
        hasStarted: true,
      }));
    }, initialDelay);

    return () => {
      clearTimeout(initialDelayTimer);
    };
  }, []);

  useEffect(() => {
    const indexLimit = words.length - 1 === index.current;
    if (currentText.length === 0) {
      setDeletingStatus((old) => ({
        ...old,
        isDeleting: false,
      }));
      if (!deletingStatus.hasStarted) return;
      indexLimit ? (index.current = 0) : (index.current += 1);
    }
    if (currentText === words[index.current]) {
      if (currentText === words[words.length - 1]) {
        setDeletingStatus((old) => ({
          ...old,
          isDeleting: true,
          loopCount: old.loopCount + 1,
        }));
        return;
      }
      setDeletingStatus((old) => ({ ...old, isDeleting: true }));
    }
    // eslint-disable-next-line
  }, [currentText, words]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (deletingStatus.loopCount >= loop) return;
    if (!deletingStatus.hasStarted) return;
    if (deletingStatus.isDeleting) {
      timer = setTimeout(() => {
        untypeWord();
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        typeWord();
      }, typeSpeed);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [
    currentText,
    deletingStatus.isDeleting,
    deletingStatus.loopCount,
    deletingStatus.hasStarted,
    typeWord,
    untypeWord,
    loop,
    words,
    typeSpeed,
    deleteSpeed,
  ]);

  return (
    <>
      <span>{currentText}</span>
      {(cursor || cursorStyle) && <span id="cursor">{cursorStyle}</span>}
    </>
  );
};

export default TypeWriter;
