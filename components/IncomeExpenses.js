import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../utils/Colors';


export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const credit = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const debit = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.credit}>Credit</Text>
                <Text style={styles.credit}>{credit}</Text>
            </View>
            <View >
                <Text style={styles.debit}>Debit</Text>
                <Text style={styles.debit}>{debit}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor: 'white',
        padding: 10,
        marginVertical:5,
        marginHorizontal:5,
    },
    credit:{
        color: 'green',
        alignItems:'center',
        fontSize: 18,
        fontFamily:'sans-serif'
    },
    debit:{
        color: 'red',
        alignItems:'center',
        fontSize: 18,
        fontFamily:'sans-serif'
    }
});

