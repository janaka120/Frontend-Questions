import { withErrorBoundary } from "./hoc/withErrorBoundary";
import BuggyComponent from "./components/BuggyComponent";

const SafeComponent = withErrorBoundary(BuggyComponent);

function App() {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <h2>React Error Boundary HoC App</h2>
      <SafeComponent />
    </div>
  );
}

export default App;
