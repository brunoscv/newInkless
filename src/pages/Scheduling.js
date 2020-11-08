import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faUserCircle, faCheckCircle, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';

// import { Container } from './styles';

export default function Scheduling({ navigation }) {
    
    async function goToMenu() {
        //const response = await api.get()
        //await AsyncStorage.setItem('user', 30059);
        navigation.navigate('Menu');
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" style={styles.statusBar}/>
            <View style={styles.actionsBlock}>
                
                <View style={styles.backBlock}>
                    <TouchableOpacity onPress={goToMenu} style={styles.navButton}>
                        <FontAwesomeIcon icon={ faArrowLeft } size={20} color="#fff"/>
                    </TouchableOpacity>
                    <View style={styles.rightBlock}>
                        <FontAwesomeIcon icon={ faUserCircle } size={25} color="#fff"/>
                    </View>
                </View>
                
            </View>

            <View style={styles.titleBlock}>
                <Text style={styles.nameBlock}>{"Check-In's de,"}</Text>
                <Text style={styles.subnameBlock}>{"José Paciente Teste"}</Text>
            </View>

            <View style={{paddingVertical: 20, paddingHorizontal: 10}}>
                <Text>{"Check-In's Disponíveis"}</Text>
            </View>

            <ScrollView style={{
                flex: 1, 
                backgroundColor: "#cfd8dc", 
                borderTopLeftRadius: 30, 
                borderTopRightRadius: 30,
                paddingVertical: 2 }}>
                
                    <View style={{ 
                        backgroundColor: '#fff', 
                        marginHorizontal: 10,
                        marginVertical: 4,
                        paddingHorizontal: 14,
                        paddingVertical: 10,
                        borderRadius: 20 }}>
                        <View style={styles.cardBody} >
                            <Image style={styles.cardAvatar} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn-Rme-Dwjyl29g2RtYjlwb2j_-q6lwbyXEw&usqp=CAU'}}/>
                            <View style={styles.cardLeftSide} >
                                <Text style={styles.cardName} >Dr. Maximo Henrique</Text>
                                <Text style={styles.cardTime} >05/11/2020 às 8:00 PM</Text>
                                <Text style={styles.cardAddress} >Consulta Presencial - Hospital Gastrovita</Text>
                                <Text style={styles.cardAddress} >Aguardando Atendimento</Text>
                            </View>
                        </View>
                        <View style={styles.cardFooter}>
                            <TouchableOpacity onPress={{}} style={styles.checkinButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faCheckCircle } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Fazer Check-In</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={{}} style={styles.callButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faPhoneSquareAlt } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Atender Chamada</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ 
                        backgroundColor: '#fff', 
                        marginHorizontal: 10,
                        marginVertical: 4,
                        paddingHorizontal: 14,
                        paddingVertical: 10,
                        borderRadius: 20 }}>
                        <View style={styles.cardBody} >
                            <Image style={styles.cardAvatar} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn-Rme-Dwjyl29g2RtYjlwb2j_-q6lwbyXEw&usqp=CAU'}}/>
                            <View style={styles.cardLeftSide} >
                                <Text style={styles.cardName} >Dr. Maximo Henrique</Text>
                                <Text style={styles.cardTime} >05/11/2020 às 8:00 PM</Text>
                                <Text style={styles.cardAddress} >Consulta Presencial - Hospital Gastrovita</Text>
                                <Text style={styles.cardAddress} >Aguardando Atendimento</Text>
                            </View>
                        </View>
                        <View style={styles.cardFooter}>
                            <TouchableOpacity onPress={{}} style={styles.checkinButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faCheckCircle } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Fazer Check-In</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={{}} style={styles.callButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faPhoneSquareAlt } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Atender Chamada</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ 
                        backgroundColor: '#fff', 
                        marginHorizontal: 10,
                        marginVertical: 4,
                        paddingHorizontal: 14,
                        paddingVertical: 10,
                        borderRadius: 20 }}>
                        <View style={styles.cardBody} >
                            <Image style={styles.cardAvatar} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn-Rme-Dwjyl29g2RtYjlwb2j_-q6lwbyXEw&usqp=CAU'}}/>
                            <View style={styles.cardLeftSide} >
                                <Text style={styles.cardName} >Dr. Maximo Henrique</Text>
                                <Text style={styles.cardTime} >05/11/2020 às 8:00 PM</Text>
                                <Text style={styles.cardAddress} >Consulta Presencial - Hospital Gastrovita</Text>
                                <Text style={styles.cardAddress} >Aguardando Atendimento</Text>
                            </View>
                        </View>
                        <View style={styles.cardFooter}>
                            <TouchableOpacity onPress={{}} style={styles.checkinButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faCheckCircle } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Fazer Check-In</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={{}} style={styles.callButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faPhoneSquareAlt } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Atender Chamada</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ 
                        backgroundColor: '#fff', 
                        marginHorizontal: 10,
                        marginVertical: 4,
                        paddingHorizontal: 14,
                        paddingVertical: 10,
                        borderRadius: 20 }}>
                        <View style={styles.cardBody} >
                            <Image style={styles.cardAvatar} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn-Rme-Dwjyl29g2RtYjlwb2j_-q6lwbyXEw&usqp=CAU'}}/>
                            <View style={styles.cardLeftSide} >
                                <Text style={styles.cardName} >Dr. Maximo Henrique</Text>
                                <Text style={styles.cardTime} >05/11/2020 às 8:00 PM</Text>
                                <Text style={styles.cardAddress} >Consulta Presencial - Hospital Gastrovita</Text>
                                <Text style={styles.cardAddress} >Aguardando Atendimento</Text>
                            </View>
                        </View>
                        <View style={styles.cardFooter}>
                            <TouchableOpacity onPress={{}} style={styles.checkinButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faCheckCircle } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Fazer Check-In</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={{}} style={styles.callButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faPhoneSquareAlt } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Atender Chamada</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ 
                        backgroundColor: '#fff', 
                        marginHorizontal: 10,
                        marginVertical: 4,
                        paddingHorizontal: 14,
                        paddingVertical: 10,
                        borderRadius: 20 }}>
                        <View style={styles.cardBody} >
                            <View style={{backgroundColor: '#1976d2', width: 60, height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 60}} >
                                <Image style={styles.cardAvatar} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn-Rme-Dwjyl29g2RtYjlwb2j_-q6lwbyXEw&usqp=CAU'}}/>
                            </View>
                            <View style={styles.cardLeftSide} >
                                <Text style={styles.cardName} >Dr. Maximo Henrique</Text>
                                <Text style={styles.cardTime} >05/11/2020 às 8:00 PM</Text>
                                <Text style={styles.cardAddress} >Consulta Presencial - Hospital Gastrovita</Text>
                                <Text style={styles.cardAddress} >Aguardando Atendimento</Text>
                            </View>
                        </View>
                        <View style={styles.cardFooter}>
                            <TouchableOpacity onPress={{}} style={styles.checkinButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faCheckCircle } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Fazer Check-In</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={{}} style={styles.callButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faPhoneSquareAlt } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Atender Chamada</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ 
                        backgroundColor: '#fff', 
                        marginHorizontal: 10,
                        marginVertical: 4,
                        paddingHorizontal: 14,
                        paddingVertical: 10,
                        borderRadius: 20 }}>
                        <View style={styles.cardBody} >
                            <Image style={styles.cardAvatar} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn-Rme-Dwjyl29g2RtYjlwb2j_-q6lwbyXEw&usqp=CAU'}}/>
                            <View style={styles.cardLeftSide} >
                                <Text style={styles.cardName} >Dr. Maximo Henrique</Text>
                                <Text style={styles.cardTime} >05/11/2020 às 8:00 PM</Text>
                                <Text style={styles.cardAddress} >Consulta Presencial - Hospital Gastrovita</Text>
                                <Text style={styles.cardAddress} >Aguardando Atendimento</Text>
                            </View>
                        </View>
                        <View style={styles.cardFooter}>
                            <TouchableOpacity onPress={{}} style={styles.checkinButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faCheckCircle } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Fazer Check-In</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={{}} style={styles.callButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faPhoneSquareAlt } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Atender Chamada</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ 
                        backgroundColor: '#fff', 
                        marginHorizontal: 10,
                        marginVertical: 4,
                        paddingHorizontal: 14,
                        paddingVertical: 10,
                        borderRadius: 20 }}>
                        <View style={styles.cardBody} >
                            <Image style={styles.cardAvatar} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn-Rme-Dwjyl29g2RtYjlwb2j_-q6lwbyXEw&usqp=CAU'}}/>
                            <View style={styles.cardLeftSide} >
                                <Text style={styles.cardName} >Dr. Maximo Henrique</Text>
                                <Text style={styles.cardTime} >05/11/2020 às 8:00 PM</Text>
                                <Text style={styles.cardAddress} >Consulta Presencial - Hospital Gastrovita</Text>
                                <Text style={styles.cardAddress} >Aguardando Atendimento</Text>
                            </View>
                        </View>
                        <View style={styles.cardFooter}>
                            <TouchableOpacity onPress={{}} style={styles.checkinButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faCheckCircle } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Fazer Check-In</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={{}} style={styles.callButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faPhoneSquareAlt } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Atender Chamada</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ 
                        backgroundColor: '#fff', 
                        marginHorizontal: 10,
                        marginVertical: 4,
                        paddingHorizontal: 14,
                        paddingVertical: 10,
                        borderRadius: 20 }}>
                        <View style={styles.cardBody} >
                            <Image style={styles.cardAvatar} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn-Rme-Dwjyl29g2RtYjlwb2j_-q6lwbyXEw&usqp=CAU'}}/>
                            <View style={styles.cardLeftSide} >
                                <Text style={styles.cardName} >Dr. Maximo Henrique</Text>
                                <Text style={styles.cardTime} >05/11/2020 às 8:00 PM</Text>
                                <Text style={styles.cardAddress} >Consulta Presencial - Hospital Gastrovita</Text>
                                <Text style={styles.cardAddress} >Aguardando Atendimento</Text>
                            </View>
                        </View>
                        <View style={styles.cardFooter}>
                            <TouchableOpacity onPress={{}} style={styles.checkinButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faCheckCircle } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Fazer Check-In</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={{}} style={styles.callButton}>
                                <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={ faPhoneSquareAlt } size={20} color="#fff"/>
                                    <Text style={styles.buttonText}>Atender Chamada</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cfd8dc',
    },
    statusBar: {
        backgroundColor: '#1976d2',
        color: '#fff'
    },
    actionsBlock: {
        backgroundColor: '#1976d2',
    },
    backBlock: {
        backgroundColor: '#1976d2',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rightBlock: {
        flexDirection: 'row',
    },
    titleBlock: {
        backgroundColor: '#1976d2',
        padding: 16,
        height: 130,
        position: "relative",
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60
    },
    nameBlock: {
        color: '#fff',
        fontSize: 16,
    },
    subnameBlock: {
        color: '#fff',
        fontSize: 30,
    },
    cardAvatar: {
        height: 60,
        width: 60,
        backgroundColor: 'gray',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    cardBody: {
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    cardFooter: {
        flexDirection: 'row', 
        justifyContent:'center', 
        alignItems: 'center'
    },
    cardLeftSide: {
        paddingHorizontal: 10,
        flex: 1
    },  
    cardName: {
        color: '#222',
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardTime: {
        color: '#222',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    cardAddress: {
        color: 'gray',
        fontSize: 15,
        fontWeight: '500',
        marginTop: 5
    },
    iconMore: {
        position: 'absolute',
        bottom: 3,
        right: 0,
    },
    cardActionButtons: {

    },
    checkinButton: {
        backgroundColor: '#1976d2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:4,
        margin: 2,
        padding: 4,
    },
    callButton: {
        backgroundColor: '#388e3c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:4,
        margin: 2,
        padding: 4,
    },
    navButton: {

    },
    buttonText: {
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 14,
        marginHorizontal: 10
    }
});