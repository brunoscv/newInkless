import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

//import api from '../services/api';

import logo from '../../assets/inkless.png';

export default function Login({ navigation }) {
  
  const [cpf, setCpf] = useState('');
  const [nasc, setNasc] = useState('');

  // useEffect(() => {
  //   AsyncStorage.getItem('user').then(user => {
  //     if(user) {
  //       navigation.navigate('Menu');
  //     }
  //   })
  // }, []);

  async function handleSubmit() {
    //const response = await api.get()
    //await AsyncStorage.setItem('user', 30059);
    navigation.navigate('Menu');
  } 
  return (
    <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior="padding" style={styles.container}>
      <Image source={logo} style={styles.logo}/>

      <View style={styles.form}>
        <Text style={styles.label}>CPF:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 123.456.789-00"
          placeholderTextColor="#fff"
          keyboardType="number-pad"
          value={cpf}
          onChangeText={setCpf}
        />

        <Text style={styles.label}>Data Nascimento:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 99/99/9999"
          placeholderTextColor="#fff"
          keyboardType="number-pad"
          value={nasc}
          onChangeText={setNasc}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1976d2',
  },
  logo: {
    width: 155,
    height:140
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30
  },
  label: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 20,
    fontSize: 16,
    height: 60,
    marginBottom:20,
    borderRadius:4,
    color: '#fff'
  },
  button: {
    height:60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:4
  },
  buttonText: {
    color:'#1976d2',
    fontWeight: 'bold',
    fontSize: 16
  }
}); 