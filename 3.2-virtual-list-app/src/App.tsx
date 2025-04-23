import { FixedSizeList as List } from "react-window";
import Row from "./components/Row";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>10,000 Row List (Virtualized)</h2>
      <List height={600} itemCount={10000} itemSize={35} width={300}>
        {Row}
      </List>
    </div>
  );
}

export default App;
