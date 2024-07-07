import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';

  const data = [
    { label: 'Select item', value: '0' },
    { label: 'IVA 16%', value: 'I16' },
    { label: 'IVA 8%', value: 'I8' },
    { label: 'IVA 16% Retención 1.25% ISR', value: 'I16R1.25' },
    { label: 'IVA 8% Retención 1.25% ISR', value: 'I851.25' },
    { label: 'IVA 16% Retención 10% ISR', value: 'I16R10' },
    { label: 'IVA 8% Retención 10% ISR', value: 'I8R10' },
  ];

  const DropdownComponent = (props) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Tipo de impuesto
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          //onChange={()=>props.onChange(props.value)}
          onChange={(item)=>props.onChange(item)}
          /*onChange={item => {
            setValue(item.value);
            console.log(item.value);
            setIsFocus(false);
          }}*/
        />
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      margin:1,
      flex:'auto',
      alignContent:'space-around',
    },
    dropdown: {
      height: 70,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      width:350,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });