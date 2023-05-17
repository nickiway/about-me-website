import { useEffect, useState } from "react";
import { TextTypingSettings, TextTypingData as data } from "../../constanst";

import WOW from "wowjs";
import "../../assets/components/_text-typing.scss";

export default function TextSlider() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  // getting settings
  const { timer, delay, frames } = TextTypingSettings;

  // states
  const [text, setText] = useState(""),
    [dataIndex, setDataIndex] = useState(0),
    [charIndex, setCharIndex] = useState(0),
    [reverse, setReverse] = useState(false),
    [cursorActive, setCursorActive] = useState(false);

  // calculating typing and clearing speed
  const typingSpeed = (timer - delay) / (frames * 2),
    clearingSpeed = typingSpeed / 2;

  // reset states function
  const resetStates = (...stateSetters) => {
    stateSetters.forEach((setter) => setter(0));
  };

  // write text function
  const writeText = (text, char = data[dataIndex][charIndex]) => {
    return text + char;
  };

  // write text reverse function
  const writeTextReverse = (text) => {
    return text.slice(0, -1);
  };

  // cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorActive((cursor) => !cursor);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // text typing
  useEffect(() => {
    const isReverse = charIndex === data[dataIndex].length;
    if (isReverse) {
      setReverse(true);
    }

    const timeout = setTimeout(
      () => {
        setText(reverse ? writeTextReverse : writeText);
        setCharIndex((charIndex) => charIndex + 1);
      },
      reverse ? clearingSpeed + (isReverse ? delay : 0) : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, dataIndex, reverse]);

  // mounting and unmounting (setting interval)
  useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((index) => (index + 1) % data.length);
      resetStates(setCursorActive, setCharIndex, setReverse);
      setText("");
    }, timer);

    return () => clearInterval(interval);
  }, []);

  const cursorClass = "text-typing__cursor" + (cursorActive ? " active" : null);
  return (
    <div className="text-typing wow bounceInUp">
      <div className="text-typing__wrapper">
        <p className="text-typing__greetings">Hi there! ✋</p>
        <div className="text-typing__text">
          {text}
          <span className={cursorClass}>|</span>
        </div>
        <p className="text-typing__paragraph">
          My GitHub nickname:{" "}
          <span className="text-typing__name">
            <a
              href="https://github.com/Nickiway"
              target="_blank"
              rel="noreferrer"
            >
              Nickiway
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
