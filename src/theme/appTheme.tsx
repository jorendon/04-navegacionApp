import { StyleSheet } from "react-native";

export const  styles = StyleSheet.create({
  globalMargin:{
    marginHorizontal:20
  },
  title:{
    fontSize:30,
    marginBottom:10
  },
  botonGrande:{
    width:100,
    height:100,
    backgroundColor:'red',
    borderRadius:20,
    alignItems:'center',
    justifyContent: 'center',
    marginRight:10
  },
  botonGrandeTexto:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'

  },
  avatarContainer:{
    alignItems:'center',
    marginTop:20,
    backgroundColor:'black'
  },
  avatar:{
    marginTop:10,
    width:210,
    height:100,

  },

  menuContainer:{
    marginVertical:30,
    marginHorizontal:50,
  },
  menuBoton:{
    marginVertical:10
  },
  menuTexto:{
    fontSize:20
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    alignSelf:"center"
  },

});
