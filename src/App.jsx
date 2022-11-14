import { useState, useEffect } from "react";
// import "./App.css";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const api = "http://localhost:8000/db";

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setData(data); // ⬅️ Guardar datos
        // setIsLoading(false); // ⬅️ Desactivar modo "cargando"
        console.log(data);
      });
  }, []);

  // if (isLoading) {
  //   // ⬅️ si está cargando, mostramos un texto que lo indique
  //   return (
  //     <div className="App">
  //       <h1>Cargando...</h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>Hello World</h1>
      {/* {console.log(dataUrl)} */}
    </div>
  );
}

export default App;
