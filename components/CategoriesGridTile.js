import { useNavigation } from '@react-navigation/native';
import {StyleSheet, View,Pressable,Text, Platform} from 'react-native';

function CategoriesGridTile({ title, color, Press }) {
    const navigation = useNavigation();
    return (
        <View style={styles.gridItem}>
            <Pressable android_ripple={{color: 'brown'}} 
            style={( {pressed} ) => [
                styles.button,
                pressed?styles.buttonPressed : null,
                ]}
                onPress={ Press }
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>

    )
}

export default CategoriesGridTile;

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius: 8,
        elevation:4,
        shadowColor: 'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity: 0.25,
        shadowRadius:8,
        overflow:Platform.OS === 'android'? 'hidden':'visible'
    },
    button:{
        flex:1,  
    },
    innerContainer:{
        flex:1,
        padding:16,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    }

});