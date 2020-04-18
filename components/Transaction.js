import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../utils/Colors';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.6}
                onPress={() => deleteTransaction(transaction.id)}>
                <View style={styles.button} >
                    <Text style={styles.buttonText}>{'x'}</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.text}> {transaction.text} {sign}${Math.abs(transaction.amount)}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 2,
        flexDirection: 'row',
        alignContent:'flex-start'
    },
    text: {
        fontSize: 12,
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 1,
        paddingHorizontal: 6,
        borderRadius: 1
    },
    buttonText: {
        color: 'white',
        fontSize: 12
    }
});

