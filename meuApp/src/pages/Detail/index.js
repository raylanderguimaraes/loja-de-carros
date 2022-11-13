import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Detail({ navigation }, props) {

    navigation.setOptions({
        headerTitle: 'Volkswagen Polo TSI HIGHLINE'
    })

    return (
        


            <ScrollView style={styles.container}>
                <Image

                    source={require('../../assets/golf.png')}
                    style={styles.image}
                    resizeMode="cover"
                />

                <View>
                    <View>
                        <Text style={[styles.title, { fontSize: 28 }]}>Volkswagen Polo TSI HIGHLINE</Text>
                    </View>

                    <View >
                        <Text style={[styles.title, { fontSize: 24, color: '#2280ff' }]}>R$40.000</Text>
                    </View>
                </View>


            </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',

    },

    image: {
        width: '100%'
    },

    title: {
        fontFamily: 'Roboto_400Regular',
        paddingHorizontal: '2%'
    }

})