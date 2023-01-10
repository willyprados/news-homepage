import { useState, useEffect } from "react";
// import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const api = "http://localhost:8000/db";

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setData(data); // ⬅️ Guardar datos
        setIsLoading(false); // ⬅️ Desactivar modo "cargando"
      });
  }, [""]);

  if (isLoading) {
    // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="loanding-app">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Hello World</h1>
      {console.log(data)}
      {/* {console.log(data.header[0])} consumo de api*/}
    </div>
  );
}

export default App;
