import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api'


export default function Home() {

    const [data, setData] = useState([
    ]);

    const navigation = useNavigation();




    useEffect(() => {

        api.get('/')
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            })


    }, [])




    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>DiCarreta</Text>

                    <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.textButton}>Sign In</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.line} />

            <FlatList
                style={{ marginTop: 35 }}
                contentContainerStyle={{ marginHorizontal: 20 }}
                data={data}
                keyExtractor={item => String(item._id)}
                renderItem={({ item }) => <ListItem data={item} />}
            />






        </SafeAreaView>

    )
}

function ListItem({ data }) {
    return (
        <TouchableOpacity style={styles.listItem} >
            
                <Image source={{ uri: data.image }} style={styles.Img} />
           
            <Text style={styles.listText}>{data.name}</Text>
            <Text style={styles.listText}>{data.model}</Text>
            <Text style={styles.listText}>{data.brand}</Text>
            <Text style={styles.listPrice}>{data.price}</Text>
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    container: {

        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',

    },
    header: {
        marginBottom: 8,
    },
    textContainer: {
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginVertical: '10%'
    },
    text: {
        fontFamily: 'Roboto_900Black',
        fontSize: 26,

    },
    textDescription: {
        opacity: 0.4,
        marginVertical: 20,
        fontFamily: 'Roboto_400Regular', fontSize: 20,
    },

    buttonLogin: {
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
        border: 'none',
        backgroundColor: '#2280ff',
        padding: 8,
        borderRadius: 8
    },
    textButton: {
        color: '#FFF',
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
    },

    line: {
        borderBottomColor: '#CECECF',
        borderBottomWidth: 2
    },

    listItem: {
        width: '100%',
        paddingVertical: '2%',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center'
    },
    listText: {
        fontSize: 25,
        color: '#000',
        alignSelf: "flex-start",
    },
    listPrice: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 22,
        color: '#2280ff',
        alignSelf: "flex-start",
    },
    containerImg: {

        width: 300,
        height: 300,
        borderRadius: 8,

    },
    Img:{
        width: 300,
        height: 300,
        resizeMode: 'cover',
    },

})





















{/* <ScrollView>
                <Text style={styles.textDescription}>
                    CARROS USADOS
                </Text>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Cars
                        
                        img={require('../../assets/golf.png')}
                        name="Volkswagen Polo TSI HIGHLINE"
                        price="40.000" q
                        onClick={() => navigation.navigate('Detail')}
                    />
                </View>
            
               
            </ScrollView> */}