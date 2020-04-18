import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Colors from '../utils/Colors';
import DefaultStyles from '../utils/default-styles';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

    const numberInputHandler = inputText => {
        setAmount(+inputText);
    }

    const descriptionInputHandler = inputText => {
        setText(inputText);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add new transaction</Text>
            <View style={styles.inputContainer}>
                <View>
                    <TextInput 
                        style={styles.input} 
                        value={`${text}`} 
                        onChangeText={descriptionInputHandler} 
                        placeholder="Enter text..." />
                </View>
                <View>
                    <TextInput  
                        style={styles.input} 
                        keyboardType="number-pad" 
                        value={`${amount}`} 
                        onChangeText={numberInputHandler} 
                        placeholder="Enter amount..." />
                </View>
                <Text style={styles.note}>(negative => debit, positive => credit)</Text>
                <Button 
                    color={Colors.primary} 
                    title={'Add transaction'} 
                    onPress={onSubmit} />
            </View>
        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 2,
        marginHorizontal: 2,
    },
    inputContainer: {
        minWidth: 300,
        width: '80%',
        maxWidth: '95%',
        alignItems: 'center'
    },
    input:{
        width: '100%',
        textAlign: 'center',
        height: 30,
        borderColor: Colors.textLight,
        borderWidth: 1,
        marginVertical: 10
    },
    heading: {
        fontSize: 15,
        borderBottomWidth: 1,
        paddingBottom: 2,
        width: '70%',
        borderBottomColor: Colors.primary
    },
    note:{
        fontSize: 9,
    }
});

