// src/App.tsx
import React, { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    // Escuchar mensajes de Lua a través del NUI
    const handleMessage = (event: MessageEvent) => {
      console.log("front");
      console.log(event.data);
      const data = event.data;
      if (data.action === "openUI") {
        document.getElementById("main")?.style.setProperty("display", "flex");
        console.log("Abriendo UI desde Lua");
        // Aquí podrías actualizar el estado para mostrar la interfaz si usas un estado
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  // Función para cerrar la UI
  const closeUI = () => {
    fetch("https://gx_react/cerrarUI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}), // Puedes enviar datos si es necesario
    }).then(() => {
      console.log("Cerrando UI desde React");
      document.getElementById("main")?.style.setProperty("display", "none");
    });
  };

  return (
    <div id="main" style={{ display: "none" }}>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Interfaz de FiveM con React + TypeScript</h1>
        <button onClick={closeUI}>Cerrar UI</button>
      </div>
    </div>
  );
};

export default App;
