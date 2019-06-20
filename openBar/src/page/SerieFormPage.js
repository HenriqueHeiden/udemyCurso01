import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Picker,
    Slider,
    Button,
    ScrollView,
    KeyboardAvoidingView,
    ActivityIndicator,
    Alert
} from 'react-native';
import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { setField, saveSerie, setWholeSerie } from '../actions'

class SerieFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }
    componentDidMount(){      
       const { navigation, setWholeSerie } = this.props;
       const { params } = navigation.state;
       if(params && params.serieToEdit){
           setWholeSerie(params.serieToEdit);
       }
    }

    render() {
        const { serieForm, setField, saveSerie, navigation } = this.props;
        return (

            <KeyboardAvoidingView
            //keyboardVerticalOffset={80}
          /*  behavior="padding" 
            enabled*/>
                <ScrollView>
                    <FormRow first>
                        <TextInput
                            style={styles.input}
                            placeholder='Titulo'
                            value={serieForm.title}
                            onChangeText={value => { setField('title', value) }}
                        />
                    </FormRow>

                    <FormRow>
                        <TextInput
                            style={styles.input}
                            placeholder='URL da img'
                            value={serieForm.img}
                            onChangeText={value => { setField('img', value) }}
                        />
                    </FormRow>
                    <FormRow>
                        <Picker
                            style={styles.picker}
                            selectedValue={serieForm.gender}
                            onValueChange={itemValue => { this.setField('gender', itemValue) }}>

                            <Picker.Item label="Policial" value="police" />
                            <Picker.Item label="Comedia" value="comedy" />
                            <Picker.Item label="Terror" value="horror" />
                        </Picker>
                    </FormRow>

                    <FormRow>
                        <View style={styles.sameRow}>
                            <Text>nota</Text>
                            <Text>{serieForm.rate}</Text>
                        </View>
                        <Slider
                            onValueChange={value => { setField('rate', value) }}
                            value={serieForm.rate}
                            minimumValue={20}
                            maximumValue={80}
                            step={5} />
                    </FormRow>


                    <FormRow first>
                        <TextInput
                            style={styles.input}
                            placeholder='Descricao'
                            value={serieForm.description}
                            numberOfLines={4}
                            multiline={true}
                            onChangeText={value => { setField('description', value) }

                            }

                        />
                    </FormRow>
                    {
                        this.state.isLoading
                            ? <ActivityIndicator />
                            : <Button
                                title="Salvar"
                                onPress={async () => {
                                    this.setState({ isLoading: true });
                                    try {
                                        saveSerie(serieForm);
                                        navigation.goBack();
                                    }  catch(Error){          
                                        Alert.alert('Erro!', "Um erro ocorreceu");
                                    } finally{
                                        this.setState({ isLoading: false });
                                    }

                                   
                                    

                                }} />
                    }
                </ScrollView>
                <View style={{ height: 80 }} />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    },
    picker: { height: 50, width: 100 },
    sameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    }
});

function mapStateToProps(state) {
    return {
        serieForm: state.serieForm
    }
}


const mapDispatchToProps = {
    setField,
    saveSerie,
    setWholeSerie
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);


