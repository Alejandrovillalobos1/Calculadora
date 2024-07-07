import React from "react"
import { View, Text, Button, StyleSheet, TextInput,} from "react-native"

const WelcomeScreen = (props)=>{
    return(<View>
        <Text style={styles.titulo} >Calculadora de impuestos</Text>

        
        <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        />

        <Button 
            title="Entrar" 
            onPress={()=>console.log(props.navigation.navigate("App"))} 
        />
    </View>)

}


const styles = StyleSheet.create({
    titulo: {
        margin:20,
        justifyContent: "center",
        textAlign: 'center',
        fontSize: 20,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})

export default WelcomeScreen