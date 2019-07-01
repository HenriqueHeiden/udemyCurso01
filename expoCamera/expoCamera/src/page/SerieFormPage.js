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
    Alert,
    Image
} from 'react-native';
import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { setField, saveSerie, setWholeSerie, resetForm } from '../actions'
import { Permissions, ImagePicker } from 'expo';


class SerieFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }
    componentDidMount() {
        const { navigation, setWholeSerie, resetForm } = this.props;
        const { params } = navigation.state;
        if (params && params.serieToEdit) {
            return setWholeSerie(params.serieToEdit);
        }
        return resetForm();

    }
    async pickImage() {
        console.log('Usuario quer pegar uma img');
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL, 
            Permissions.CAMERA);
        if (status !== 'granted') {
            console.log('usuario não permitiu');
            Alert.alert('Você precisa permitir o acesso!');
            return;
        }
        console.log('Usuario permitiu');
        const result = await ImagePicker.launchCameraAsync({
            quality: 0.2,
            base64: true,
            allowsEditing: true,
            aspect: [1, 1]//apenas no android
        });
        if (!result.canceled) {
            this.props.setField('img64', result.base64)
            console.log('Temos uma img', result.base64);
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
                    {serieForm.img64 ? 
                    <Image
                        source={{
                            uri: `data:image/jpeg;base64,${serieForm.img64}`
                        }}
                        style={styles.img} /> : null}
                    <Button title="Selecione uma iamgem"
                        onPress={() => this.pickImage()} />
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
                                    } catch (Error) {
                                        Alert.alert('Erro!', "Um erro ocorreceu");
                                    } finally {
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
    },
    img: {
        aspectRatio: 1,
        width: '100%',
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
    setWholeSerie,
    resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);


