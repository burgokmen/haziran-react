import { useEffect } from "react";
import Counter, { PI } from "./components/Counter";
import CounterDisplay from "./components/CounterDisplay";
import Greeting from "./components/Greeting";
import Main from "./layout/Main";

// console.log("PI ", PI);

// Root Component
function App() {
  const divId = "app-container";

  const user = {
    name: "ali",
    age: 19,
    email: "ali@veli.com",
  };

  const { name } = user;

  // console.log(name);

  const logUser = () => {
    // console.log(user);
  };

  useEffect(() => {
    // console.warn("TÜM UYGULAMA YÜKLENDİ!");
  }, []);

  return <Main userName={name} />;
}

export default App;
