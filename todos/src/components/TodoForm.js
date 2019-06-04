import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Input from './Input';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

class TodoForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text:''
        }
    }
    onChangeText(text){
        this.setState({
            text
        });
    }

    onPress(){
        if(this.state.text)        
        this.props.disptchAddTodo(this.state.text);
        this.setState({ text: ''});
    }
    render() {
        const { text } = this.state;
        return (
            <View style={styles.formContainer}>
                <View  style={styles.inputContainer}>
                    <Input 
                    onChangeText={text => this.onChangeText(text)}
                    value={text}/>
                </View>

                <View style={styles.buttonContainer}>
                    <Button 
                    onPress={() => this.onPress()}
                    title="Add"  />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    formContainer: {
       flexDirection: 'row'
    },
    inputContainer: {
        flex:4
    },
    buttonContainer: {
        flex:1
    }
});

/*const mapDispatchToProps = {
    disptchAddTodo: addTodo
}*/

export default connect(null, {
    disptchAddTodo: addTodo
})(TodoForm);