import { StyleSheet, TouchableOpacity, Text } from "react-native"

const Tecla = (props) =>{

    const styles = StyleSheet.create({
        tecla: {
            width: 80,
            height: 80,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: props.color !== undefined ? props.color : "#769cad", //Ternary expression
            margin: 5,
            borderRadius: 10,
        },
        teclaText: {
            fontSize: 30,
            color: "white",
            textAlign: "center"
        }
    })

    return(  
        <TouchableOpacity style={styles.tecla} onPress={()=>props.onTeclaPress(props.value)}>
            <Text style={styles.teclaText}>{props.value}</Text>
        </TouchableOpacity>
    )
}

export default Tecla