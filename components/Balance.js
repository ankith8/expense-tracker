import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { StyleSheet, Text, View } from 'react-native';
import Colors from '../utils/Colors';
import DefaultStyles from '../utils/default-styles';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <View style={styles.container}>
            <Text style={styles.balanceText}>Balance Amount</Text>
            <Text style={styles.totalText}>${total}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        marginVertical:15,
        marginHorizontal:40,
        borderRadius: 10
    },
    balanceText: {
        color: 'black',
        fontSize: 15,
        paddingRight: 10,
        paddingTop:5,
        fontFamily:'sans-serif'
    },
    totalText: {
        color: 'black',
        paddingRight: 10,
        paddingTop:5,
        fontSize: 25,
        fontFamily:'sans-serif'
    }
});
