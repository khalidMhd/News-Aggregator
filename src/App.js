import logo from "./logo.svg";
import "./App.css";
import NewsScreen from "./modules/News";

function App() {
  console.log("dd",process.env.REACT_APP_NYT_API_KEY);

  return <NewsScreen />;
}

export default App;
