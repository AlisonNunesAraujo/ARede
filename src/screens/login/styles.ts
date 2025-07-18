import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black'
    },

    areaImg:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        backgroundColor: 'black'
    },
    title:{
        fontSize: 25,
        fontFamily: 'Arial',
        color: 'white',
    },
    form:{
        flex: 1,
        width: '100%',
        padding: 10,

    },
    label:{
        fontSize: 16,
        fontFamily: 'Arial',
        marginBottom: 5,
        color: 'white',
         marginLeft: '5%'
    },
    inputs:{
        width: '90%',
        height: 35,
        borderRadius: 5,
        backgroundColor: 'white',
        marginBottom: 15,
        marginLeft: '5%',
        color: 'black',
    },
    buttons:{
        width: '90%',
        height: 35,
        borderRadius: 5,
        backgroundColor: 'white',
        marginBottom: 5,
        marginLeft: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    textButtons:{
        color: 'black',
        fontFamily: 'Arial',
    },
    img:{
        width: 100,
        height: 100,
    }
})