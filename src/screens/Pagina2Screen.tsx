import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { styles } from "../theme/appTheme";
import { useNavigation } from "@react-navigation/native";

const Pagina2Screen = () => {
  const navigator = useNavigation<any>();
  useEffect(() => {
    navigator.setOptions(
      {
        title: "Hola Mundo",
        headerBackTitle: ""
      })
  },[])
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button title={"Ir a Página 3"} onPress={() => navigator.navigate("Pagina3Screen") } />
    </View>
  );
};

export default Pagina2Screen;
