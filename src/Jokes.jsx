import { useEffect, useState } from "react";

export default function Jokes() {
  let [joke, setJoke] = useState({});
  const url = "https://official-joke-api.appspot.com/jokes/random";
  const getNewJoke = async () => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    console.log(jsonResponse);
  };
  useEffect(() => {
    async function getFirstJoke() {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
      console.log(jsonResponse);
    }
    getFirstJoke();
  },[]);
  return (
    <div>
      <h1>Joke!</h1>
      <h3>{joke.setup}</h3>
      <h3>{joke.punchline}</h3>
      <button onClick={getNewJoke}>get joke</button>
    </div>
  );
}
