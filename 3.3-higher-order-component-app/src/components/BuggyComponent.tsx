import { useState } from "react";

function BuggyComponent() {
  const [crash, setCrash] = useState(false);
  if (crash) {
    throw new Error("Simulated crash!");
  }

  return (
    <div>
      <p>This component is working fine... for now.</p>
      <button onClick={() => setCrash(true)}>Crash it</button>
    </div>
  );
}

export default BuggyComponent;
