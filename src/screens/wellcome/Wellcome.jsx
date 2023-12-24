import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

const Wellcome = () => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.wellcomeTxt}>Bem Vindo!</Text>
      <Text style={styles.fraseWell}>Logue para continuar</Text>
<br />
<br />
<br />
<br />
      <TextInput
        mode="outlined"
        label="Email"
        // placeholder=""
        // right={<TextInput.Affix text="/100" />}
      />
      <TextInput
        mode="outlined"
        label="Senha"
        // placeholder=""
        // right={<TextInput.Affix text="/100" />}
      />
      <br />
      <br />
      <br />
      <br />
      <Button
        // icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Entrar
      </Button>
      <br />
      <Button
        // icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
      Cadastrar
      </Button>
    </View>
  );
};

export default Wellcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1F2D",
    justifyContent: "center",
    width: "80%",
  },
  wellcomeTxt: {
    color: "#AFFFFF",
    textAlign: "left",
    fontSize: 40,
    fontWeight: "bold",
  },
  fraseWell: {
    color: "#ffff",
    fontWeight: "normal",
    fontSize: 15,
  },
  textFieldColorImp: {
    color: "#ffff",
  },
});
