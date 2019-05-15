import React from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Button,
    ActivityIndicator,
    Alert
} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';
//import firebase from '@firebase/app';



export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyCP9D0QiMCL2leIfNuVgeGNxQIZtholCWU",
            authDomain: "series-bcb40.firebaseapp.com",
            databaseURL: "https://series-bcb40.firebaseio.com",
            projectId: "series-bcb40",
            storageBucket: "series-bcb40.appspot.com",
            messagingSenderId: "934883734753",
            appId: "1:934883734753:web:e1cd01f9c385612f"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

    }


    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }

    tryLogin() {
        this.setState({ isLoading: true, message: '' });
        const { mail, password } = this.state;

        const loginUserSuccess = user => {
            this.setState({ message: "Sucesso!" });
        }

        const loginUserFailed = error => {
            this.setState({
                message: this.getMessageByErrorCode(error.code)
            });
        }

        firebase
            .auth()
            .signInWithEmailAndPassword(mail, password)
            .then(loginUserSuccess).catch(error => {
                if (error.code === 'auth/user-not-found') {
                    Alert.alert('Usuario não encontrado',
                        'Deseja criar o cadastro?',
                        [{
                            text: 'Não',
                            onPress: () => { },
                            style: 'cancel'
                        }, {
                            text: 'Sim',
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(mail, password)
                                    .then(loginUserSuccess)
                                    .catch(loginUserFailed)
                            }
                        }], { cancelable: false }
                    )
                    return;
                }

                loginUserFailed(error);
       
            }).then(() => this.setState({ isLoading: false }));
    }
    getMessageByErrorCode(erorrCode) {
        switch (erorrCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuario não encontrado';
            case 'auth/invalid-email':
                return 'Email já esta em uso';
            case 'auth/user-disabled':
                return 'usuario desabilitado';

            default: 'Erro desconhecido';
        }
    }
    renderMessage() {
        const { message } = this.state;
        if (!message)
            return null;

        return (
            <View>
                <Text>{message}</Text>
            </View>
        );

    }


    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator />;

        return (<Button title='Entrar' onPress={() => this.tryLogin()} />);
    }

    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput
                        style={styles.input}
                        placeholder="user@mail.com"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={styles.input}
                        placeholder="******"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow>

                {this.renderButton()}
                {this.renderMessage()}



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
})