import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const textFieldColorImp = {
    color: "#ffff",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.wellcome}>Bem Vindo!</Text>
      <Text style={styles.fraseWell}>Logue para continuar</Text>

      {/* Input para o email */} 
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Box
          sx={{
            // Não consigo alterar a cor do Input e do texto inserido para #ffff
            maxWidth: "100%",
            display: "flex",
            alignItems: "flex-end",
            backgroundColor: "transparent",
            color: "#ffff",
          }}
        >
          <TextField
            InputLabelProps={{ className: styles.textFieldColorImp }}
            id="input-with-sx"
            label="Email"
            variant="standard"
          />
        </Box>
      </Box>

      {/* Input para senha */}
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Senha
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1F2D",
    justifyContent: "center",
    width: "80%",
  },
  wellcome: {
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
