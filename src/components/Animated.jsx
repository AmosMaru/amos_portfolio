import { useEffect, useState } from "react";

const AnimatedCodeEditor = () => {
  const [text, setText] = useState("");
  const codeString = `function HelloWorld() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Cleanup");
    };
  }, []);

  return (
    <div className="container">
      <h1>Hello, World!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}`;

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= codeString.length) {
        setText(codeString.slice(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0;
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg p-5 font-mono text-xs h-72 overflow-hidden relative">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="text-gray-300">
        <code className="whitespace-pre-wrap">
          {text}
          <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse">
            |
          </span>
        </code>
      </pre>
    </div>
  );
};

export default AnimatedCodeEditor;
