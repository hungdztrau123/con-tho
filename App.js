import React from "react";
import {Text, View, StyleSheet, TextInput,Button } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Email");
  const [number, onChangeNumber] = React.useState("Password");

  return (
    <View style={styles.main}>
      <View style={styles.content}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />
     
<View style={styles.button22}>
      <View style={styles.button}>
     <Button style={styles.btn} 
        title="Login"
        color="#00b6ed"
       
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      </View>
      </View>
      
      <View style={styles.text}>
        <Text style={styles.text1}> Forgot your password?</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.text1}> Register</Text>
      </View>
     


      </View>
      </View>

      
    
  );
};

const styles = StyleSheet.create({
  main : 
  { 
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
 
  },

  content : 
  {
    
  },

  input: {
    color: '#ccc',
    height: 40,
    margin: 10,
    width: 230,
    paddingTop: 10,
    paddingBottom: 10,
     paddingLeft: 50,
    backgroundColor: 'white',
    borderRadius: 25,
  },

  button22: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b6ed',
    width: 230,
    height: 40,
   margin: 10,
  borderRadius: 25,
  },
  button:
  {
    
  
   width: 210,
   height: 32,

  },

  btn: 
  {
    flex: 1,
  },

  text : 
  {
     
     marginTop: 18,
     marginBottom:23,
  },

  text1 :
  {
        textAlign: 'center',
  },
  
});

export default UselessTextInput;