import React, { useState } from "react";
import { View, Switch, StyleSheet, StatusBar, Dimensions } from "react-native";

const ToggleTheme = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const switchTop = windowHeight * 0.05; // Ajuste a porcentagem conforme necessário
  const switchRight = windowWidth * -0.4; // Ajuste a porcentagem conforme necessário

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={[styles.switchContainer, { top: switchTop, right: switchRight }]}>
        <Switch
          trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
          thumbColor={isEnabled ? "#FF3D3D" : "#FFD700"}
          ios_backgroundColor="#c2c2c2"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  switchContainer: {
    position: "absolute",
  },
});

export default ToggleTheme;
