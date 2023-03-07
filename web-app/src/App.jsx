import { useState } from "react";
import axios from "axios";

import AppShell from "./components/AppShell";
import Message from "./components/Message";

const system = {
  role: "system",
  content: "act like a first aid chat bot",
};
const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + import.meta.env.VITE_OPENAI_API_KEY,
};

function App() {
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([
    {
      role: "assistant",
      content: "Hello! I am your assistant, ask me anything.",
    },
  ]);
  const handleChange = (event) => setValue(event.target.value);
  const chatAPI = async () => {
    const url = "https://api.openai.com/v1/chat/completions";

    axios
      .post(
        url,
        {
          model: "gpt-3.5-turbo",
          messages: [system, ...history],
        },
        {
          headers: headers,
        }
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setHistory((prev) => [...prev, data.choices[0].message]);
      });
  };
  const handleSubmit = async () => {
    setHistory((prev) => [...prev, { role: "user", content: value }]);
    setValue("");
    chatAPI();
  };

  return (
    <div>
      <AppShell
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      >
        {history.map((m, i) => (
          <Message key={i} role={m.role} content={m.content} />
        ))}
      </AppShell>
    </div>
  );
}

export default App;
