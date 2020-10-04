import React, { useCallback } from "react";
import "./App.css";
import api from "./services/api";

function App() {
  const handleForward = useCallback(async () => {
    await api.post("/sentido", {
      sentido: "f",
    });
    console.log("frente");
  }, []);

  const handleRight = useCallback(async () => {
    await api.post("/sentido", {
      sentido: "r",
    });
  }, []);

  const handleLeft = useCallback(async () => {
    await api.post("/sentido", {
      sentido: "l",
    });
  }, []);

  const handleStop = useCallback(async () => {
    await api.post("/sentido", {
      sentido: "s",
    });
  }, []);

  return (
    <>
      <div className="container">
        <button className="button" type="button" onClick={handleForward}>
          frente
        </button>

        <div className="horizontal">
          <button type="button" className="button" onClick={handleLeft}>
            esquerda
          </button>

          <button type="button" className="button" onClick={handleRight}>
            direita
          </button>
        </div>

        <button type="button" className="button" onClick={handleStop}>
          para
        </button>
      </div>
    </>
  );
}

export default App;
