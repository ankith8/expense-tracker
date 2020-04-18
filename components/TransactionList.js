import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Colors from '../utils/Colors';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>History</Text>
            {
                transactions.length <= 0 ? 
                    <Text style={styles.noHistory}>No History available</Text> 
                    :
                    <View style={styles.items}>
                        {transactions.map(transaction => (
                            <Transaction key={transaction.id} transaction={transaction} />
                        ))}
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        marginVertical: 2,
        marginHorizontal: 2,
    },
    heading: {
        fontSize: 15,
        borderBottomWidth:1,
        paddingBottom:2,
        width:'70%',
        borderBottomColor:Colors.primary
    },
    noHistory: {
        paddingTop: 5,
        fontSize: 10
    },
    items:{
    }
});

