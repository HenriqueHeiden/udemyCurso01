import React from 'react';
import { StyleSheet, ScrollView, Image, Button } from 'react-native';
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

                <Button title="Editar" 

                onPress={() =>{
                    navigation.replace('SerieFormPage', { serieToEdit: serie});
                }}/>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1
    }
});

export default SerieDetailPage;