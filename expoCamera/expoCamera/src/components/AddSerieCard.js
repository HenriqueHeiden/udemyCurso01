import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

const AddSerieCard = ({ serie, isFirstColumn, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={[
            styles.container,
            isFirstColumn ? styles.firstColumn : styles.lastColumn
        ]}>
       
    </TouchableOpacity >
);


const styles = StyleSheet.create({
    container: {
        //flex: 0.5,
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width / 2,

    },
    image:{
        width:'100%',
        height:'100%',
    },
    card: {
        flex: 1,
      
    },
    firstColumn: {
        paddingLeft: 10
    },
    lastColumn: {
        paddingRight: 10
    }

});


export default AddSerieCard;