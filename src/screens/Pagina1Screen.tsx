import React, { useEffect } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "../theme/appTheme";
import { DrawerScreenProps } from "@react-navigation/drawer";

interface Props extends DrawerScreenProps<any, any> {
}

const Pagina1Screen = (props: Props) => {

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (<Button title={"Menú"} onPress={() => props.navigation.toggleDrawer()} />),
    });

  }, []);


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button title={"Ir a página 2"} onPress={() => props.navigation.navigate("Pagina2Screen")} />
      <Text style={{ marginVertical: 20, fontSize: 20, marginLeft: 5 }}>Navegar con argumento</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={
            {
              ...styles.botonGrande,
              backgroundColor: "#5856D6",
            }}
          onPress={() => props.navigation.navigate("PersonaScreen", {
            id: 1,
            nombre: "Pedro",
            imagen:"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/08/fotos-perfil-whatsapp_21.jpg?itok=laOs_ZZT"
          })}>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={
          {
            ...styles.botonGrande,
            backgroundColor: "#FF9427",
          }}
                          onPress={() => props.navigation.navigate("PersonaScreen", {
                            id: 2,
                            nombre: "Maria",
                            imagen:'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg'
                          })}>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Pagina1Screen;
