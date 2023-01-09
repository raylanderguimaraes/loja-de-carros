import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api'


export default function Home() {

    const [data, setData] = useState([]);


    const navigation = useNavigation();

    useEffect(() => {

        api.get('/')
            .then((response) => {
                setData(response.data)

                // console.log(response.data)

            })
            .catch((err) => {
                console.log(err)
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

            <View>
                <Text style={styles.textDescription}>
                    CARROS SEMINOVOS
                </Text>
            </View>

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

    const ulr = 'http://10.0.0.133:3333/'

    return (
        <TouchableOpacity style={styles.listItem} >

            <Image style={styles.Img}
                source={{ uri: `${ulr}${data.image}` }}
            />

            <Text style={styles.listText}>{data.name} {data.model}</Text>
            <Text style={styles.listText}>Marca: {data.brand}</Text>
            <Text style={styles.listPrice}>Preço: R${data.price}</Text>

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
        opacity: 0.5,
        paddingHorizontal: 20,
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
        fontFamily: 'Roboto_400Regular',
        marginBottom: 5,
        fontSize: 25,
        color: '#000',
        alignSelf: "flex-start",
    },
    listPrice: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 24,
        color: '#2280ff',
        alignSelf: "flex-start",
    },

    Img: {
        width: '100%',
        borderRadius: 10,
        height: 300,
        resizeMode: 'cover',

    },

})





















