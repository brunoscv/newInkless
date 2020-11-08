import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock, faBookReader, faFile, faFolder } from '@fortawesome/free-solid-svg-icons';


export default function Menu({ navigation }) {
  
  async function goToCheckIn() {
    //const response = await api.get()
    //await AsyncStorage.setItem('user', 30059);
    navigation.navigate('Scheduling');
  }
  
  async function goToHistoric() {
    //const response = await api.get()
    //await AsyncStorage.setItem('user', 30059);
    navigation.navigate('Historic');
  }

  async function goToReports() {
    //const response = await api.get()
    //await AsyncStorage.setItem('user', 30059);
    navigation.navigate('Report');
  }

  async function goToDocuments() {
    //const response = await api.get()
    //await AsyncStorage.setItem('user', 30059);
    navigation.navigate('Document');
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.firstrow}>
        <TouchableOpacity onPress={goToCheckIn} style={styles.button}>
          <FontAwesomeIcon icon={ faClock } size={80} color="#fff"/>
          <Text style={styles.buttonText}>Check-In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToHistoric} style={styles.button}>
          <FontAwesomeIcon icon={ faBookReader } size={80} color="#fff"/>
          <Text style={styles.buttonText}>Agendamentos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.secondrow}>
        <TouchableOpacity onPress={goToReports} style={styles.button}>
          <FontAwesomeIcon icon={ faFile } size={80} color="#fff"/>
          <Text style={styles.buttonText}>Laudos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={goToDocuments} style={styles.button}>
          <FontAwesomeIcon icon={ faFolder } size={80} color="#fff"/>
          <Text style={styles.buttonText}>Documentos</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1976d2',
  },
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1976d2',

  },
  secondrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1976d2',

  },
  button: {
    height:160,
    width:160,
    backgroundColor: '#29b6f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:16,
    margin: 5
  },
  buttonText: {
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});