import React, { useCallback, useEffect } from "react";
import { Button, Alert, View } from "react-native";

import api from "../../services/api";

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  useEffect(() => {
    async function tryConection() {
      try {
        const response = await api.post("/sentido", {
          sentido: "teste",
        });

        if (response.status === 200) {
          Alert.alert("Conexão bem sucedida");
        }
      } catch (err) {
        Alert.alert(`Falhar ao conectar com a API`);
      }
    }

    tryConection();
  }, []);

  const handleForward = useCallback(async () => {
    await api.post("/sentido", {
      sentido: "f",
    });
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
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Frente" onPress={handleForward} />
      <Button title="Esquerda" onPress={handleLeft} />
      <Button title="Direita" onPress={handleRight} />
      <Button title="Parar" onPress={handleStop} />
    </View>
  );
};

export default Dashboard;
