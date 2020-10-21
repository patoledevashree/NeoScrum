import React from 'recat';
import { StyleSheet,View,Text,Image} from 'react-native';
import Card from './Card';

export default function AddFeedBack(){
    return(
        <View style={styles.container}>
            <Card>
                <Image source={{uri:'assests/images'}}/>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginVertical:30,
        marginHorizontal:50
    }
})