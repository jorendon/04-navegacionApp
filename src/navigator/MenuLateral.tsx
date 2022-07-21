import React from "react";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { SettingsScreen } from "../screens/SettingsScreen";
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { styles } from "../theme/appTheme";

export const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? "permanent" : "front",
        headerShown: false,
      }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};


const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/*Parte del avatar*/}
      <View style={styles.avatarContainer}>
        <Image source={{uri:'https://jrendon.dev/logo.png'}}
               style={styles.avatar}/>
      </View>

      {/*Opciones de menú*/}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuBoton} onPress={() =>navigation.navigate('StackNavigator')}>
          <Text style={styles.menuTexto}>
            Navegación
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBoton} onPress={() =>navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuTexto}>
            Ajustes
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
