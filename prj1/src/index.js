import React, { Component } from 'react';
import { Plataform, StyleSheet, Text, View, Button } from 'react-native';
import Todo from './components/Todo';


export default class App extends Component {
  state = {
    todos: [
      {id: 0, text:'Fazer café'},
      {id: 1, text: 'Estudar o GoNative'}
    ]
  };

  addTodo = () => {
    this.setState({
      todos: [ ...this.state.todos, { id: Math.random(), text: 'Novo todo' }
      ],
    });
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
      </View>

     /* <View style={styles.container}>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
      </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection:'row', /*Alinha para o lado */
    flexWrap: 'wrap', /*Não permite passar da tela */
    justifyContent:'space-around',
    alignContent:'flex-end',
  },
  box: {
    width:80,
    height:80,
    backgroundColor:'#F00',
    margin:10,
    transform:[
      {rotateZ: '20deg'}
    ]
  }
});
