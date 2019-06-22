import React from 'react';
import { StyleSheet, ScrollView, Image, Button, View } from 'react-native';
import Line from '../components/Line';
import LongText from '../components/LongText';


class SerieDetailPage extends React.Component {
    render() {
        const { navigation } = this.props;
        const { serie } = navigation.state.params;
        return (
            < ScrollView >
                {serie.img ? <Image
                    style={styles.image}
                    source={{
                        uri: serie.img

                    }} /> : null}
                <Line label="Titulo" content={serie.title} />
                <Line label="Gênero" content={serie.gender} />
                <Line label="Genero" content={serie.rate} />
                <Line label="Nota" content={serie.rate} />
                <LongText label="Descrição" content={serie.description} />
                <View style={styles.bnt}>           
                <Button title="Editar"

                    onPress={() => {
                        navigation.replace('SerieFormPage', { serieToEdit: serie });
                    }} />
                </View>
                <View style={styles.bnt}>  
                <Button color="#FF0004FF" title="Deletar"

                    onPress={() => {
                        
                    }} />
                    </View>


            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1
    },
    bnt:{
       margin:10
    }
});

export default SerieDetailPage;