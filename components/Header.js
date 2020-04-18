import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../utils/Colors';
import DefaultStyles from '../utils/default-styles';

export const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Expense Tracker</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,
    headerTitle: {
        color: 'black',
        fontSize: 26,
        fontFamily:'sans-serif'
    }
});


