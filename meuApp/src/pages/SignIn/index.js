import React from "react";
import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../../services/api'




export default function SignIn() {


    //     const [userLoged, setUserLoged ] = useState()

    //    api.post('/user/login', {
    //     email: "jocastha@gmail.com",
    //     password: "123454"
    //    }).then((response) =>{
    //     console.log(response)
    //    })
    //    .catch((err) => {
    //     console.log(err);
    //    })


    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');

    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.message}>Seja Bem Vindo!</Text>
            </View>


            <View style={styles.containerForm}>

                <Text style={styles.title}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email..."
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => setEmail(text)}

                />

                <Text style={styles.title}>Senha</Text>
                <TextInput style={styles.input}
                    placeholder="Digite sua senha"
                    onChangeText={text => setPassword(text)}
                    autoCorrect={false}
                />


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>


        </View>

    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000',
        alignItems: 'center'
    },

    message: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 24,
        color: '#FFF',
        marginTop: 28,
        marginBottom: 12,
    },


    containerForm: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
        padding: '5%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    title: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 24,
        color: '#000',
        marginTop: 28,
        marginBottom: 12,
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },

    button: {
        width: '100%',
        border: 'none',
        backgroundColor: '#2280ff',
        padding: 8,
        borderRadius: 8,
        marginTop: 14,
    },

    buttonText: {
        color: '#FFF',
        fontFamily: 'Roboto_400Regular',
        fontSize: 24,
        textAlign: 'center',
    },

    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',

    },

    registerText: {
        fontSize: 20,
        color: '#2280ff'
    }

})


