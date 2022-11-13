import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


export default function Cars(props) {

    
    function filterDescriptionCar(desc) {
        if (desc.length < 30) {
            return desc;
        }

        return `${desc.substring(0, 22)}...`;
    }

    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image
                source={props.img}
                style={styles.carsImg}
            />

            <Text style={styles.carsTitle}>
                {props.name}
            </Text>

            <Text style={styles.carsPrice}>
                {props.price}

            </Text>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    container: {
        width: '90%',
        paddingVertical: '2%',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center'
    },

    carsImg: {
        width: '100%',
        height: 300,
        borderRadius: 8,

    },
    carsTitle: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 25,
        alignSelf: "flex-start",

    },
    carsPrice: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 22,
        color: '#2280ff',
        alignSelf: "flex-start",
    }

});