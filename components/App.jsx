import {View, StyleSheet, Text} from 'react-native'
import Tecla from './Tecla'
import { useState } from 'react'
import Dropdown from './Dropdown'



//DRY = DONT REPEAT YOURSELF 
const App = () =>{

    const [currentValue, setCurrentValue] = useState('0');
    const [previousValue, setPreviousValue] = useState('');
    const [operator, setOperator] = useState(null);
    const [waitingForNewValue, setWaitingForNewValue] = useState(false);
    let output = "";

    let tipoImpuesto = '0';

    const handleOnChangeTipoImpuesto = (value)=>{
      tipoImpuesto = value.value;
    }

    const handleTeclaPress = (value) =>{
        if (['+', '-', '*', '/'].includes(value)) {
            if (operator && waitingForNewValue) {
              setOperator(value);
              return;
            }
      
            if (previousValue === '') {
              setPreviousValue(currentValue);
            } else if (operator) {
              const calculatedResult = calculate(previousValue, currentValue, operator);
              setPreviousValue(calculatedResult);
              setCurrentValue(calculatedResult);
            }
      
            setOperator(value);
            setWaitingForNewValue(true);
          } else if (value === '=') {
            if(tipoImpuesto != '0'){
              console.log(currentValue);
              setCurrentValue(calculateImpuesto(currentValue).toFixed(2));
            }
            if (operator && previousValue !== '' && currentValue !== '') {
              const calculatedResult = calculate(previousValue, currentValue, operator);
              setCurrentValue(calculatedResult);
              setPreviousValue('');
              setOperator(null);
              setWaitingForNewValue(false);
            }
            // Se agrego funcion aun no terminada
          } else if (value === '<') {
            output = output.toString().slice(0,-1);
          } else if (value === 'AC') {
            setCurrentValue('0');
            setPreviousValue('');
            setOperator(null);
            setWaitingForNewValue(false);
          } else {
            if (waitingForNewValue) {
              setCurrentValue(value);
              setWaitingForNewValue(false);
            } else {
              setCurrentValue(currentValue === '0' ? value : currentValue + value);
            }
          }
          
          
    }

    const calculateImpuesto = (value) => {
      let result = 0;

      switch(tipoImpuesto){
        case 'I16':
          result = value * 1.16;
          break;
        case 'I8':
          result = value * 1.08;
          break;
        case 'I16R1.25':
          result = value * 1.16 * 1.25;
          break;
        case 'I851.25':
          result = value * 1.08 * 1.25;
          break;
        case 'I16R10':
          result = value * 1.16 * .10;
          break;
        case 'I8R10':
          result = value * 1.08;
          break;
        default:
          result = value;
          break;
      }
      return result;
    };




    const calculate = (prev, curr, op) => {
        const prevNum = parseFloat(prev);
        const currNum = parseFloat(curr);
        if (op === '+') return (prevNum + currNum).toString();
        if (op === '-') return (prevNum - currNum).toString();
        if (op === '*') return (prevNum * currNum).toString();
        if (op === '/') return (prevNum / currNum).toString();
        return '';
      };

      
    
    return(<View style={styles.container}>
        {/* <Text>Calculadora</Text> */}
        <Text style={styles.display}>{currentValue}</Text>
        <Dropdown onChange={handleOnChangeTipoImpuesto}></Dropdown>
        <View style={styles.buttonsContainer}>
             {[ {value:'AC', color:"black"}, 
                {value:'<', color:"#d9a518"}, 
                {value:'/', color:"#d9a518"}, 
                {value:'*', color:"#d9a518"}
            ].map((item)=>{
                return <Tecla 
                    value={item.value} 
                    onTeclaPress={handleTeclaPress}
                    color = {item.color}
                />
            })}
            {[  {value:'7'}, 
                {value:'8'}, 
                {value:'9'}, 
                {value:'+', color:"#d9a518"}
            ].map((item)=>{
                return <Tecla 
                    value={item.value} 
                    onTeclaPress={handleTeclaPress}
                    color = {item.color}
                />
            })}
            {[  {value:'4'}, 
                {value:'5'}, 
                {value:'6'}, 
                {value:'-', color:"#d9a518"}
            ].map((item)=>{
                return <Tecla 
                    value={item.value} 
                    onTeclaPress={handleTeclaPress}
                    color = {item.color}
                />
            })}
            
            {[  {value:'1'}, 
                {value:'2'}, 
                {value:'3'}, 
                {value:'.', color:"#d9a518"}
            ].map((item)=>{
                return <Tecla 
                    value={item.value} 
                    onTeclaPress={handleTeclaPress}
                    color = {item.color}
                />
            })}
            {[  {value:'0'},  
                {value:'=', color:"#d9a518",}, 
            ].map((item)=>{
                return <Tecla 
                    value={item.value} 
                    onTeclaPress={handleTeclaPress}
                    color = {item.color}
                />
            })}

        </View>

    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#CCCAC6"
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: 'wrap'
    },
    display: {
        fontSize: 40,
        marginBottom: 20,
        color: "#333",
        textAlign:"right",
    },
})

export default App

