import { useState } from "react";
import { useFetchWithCache } from "./hooks/useFetchWithCache";

const BASE_URL = "https://jsonplaceholder.typicode.com";

function App() {
  const [url, setUrl] = useState<string | null>(`${BASE_URL}/posts/1`);
  const { data, loading, error } = useFetchWithCache(url);

  return (
    <div style={{ padding: 20 }}>
      <h2>Fetch with Cache</h2>
      <button
        onClick={() => setUrl(`${BASE_URL}/posts/1`)}
        style={{ marginRight: 20 }}
      >
        Load Post 1
      </button>
      <button
        onClick={() => setUrl(`${BASE_URL}/posts/2`)}
        style={{ marginRight: 20 }}
      >
        Load Post 2
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{JSON.stringify(error)}</p>}
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
