import React from 'react';
import { View, StyleSheet ,Alert} from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {
    Avatar,
    Text,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { SignOut } from '../Redux/actions/signOutAction';
import Toast from 'react-native-simple-toast';

/**
 * @author Devashree Patole
 * @description This file contains the code for custom drawer.
 *              User information with the image profile is shown.
 * @param {object} props Screens hich is to be displayed in drawer
 * @returns JSX of the custom drawer navigation of screens.
 */

function DrawerContent(props) {

    const showTost=()=>{
        props.SignOut()
        Toast.show('You Successfully Logged Out',Toast.LONG)
    }
    const logOut = ()=>{
        Alert.alert('Logout','Do you wnat to LogOut',[
            {
                text:'OK',
                onPress : ()=> {showTost()},
                
            },
            {
                text:'Cancle'
            }
        ])
       
       
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfo}>
                        <View>
                            {props.user.user_image?
                            <Avatar.Image
                                source={{
                                    uri: props.user.user_image
                                }}
                                rounded
                                size={100} />
                            :<Avatar.Image
                            source={require('../assests/images/avtar.png')}
                            rounded
                            size={100}
                            />
                            }
                        </View>
                    </View>
                    <View style={styles.userDetail}>
                        <Title>{props.user.user_name}</Title>
                    </View>
                    <Drawer.Section>
                        <DrawerItemList {...props}/>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name='exit-to-app'
                            color={color}
                            size={size} ></Icon>
                    )}
                    label='Logout'
                    onPress={()=>logOut()}
                />
            </Drawer.Section>

        </View>
    )
}
const mapStateToProps = state => {
    return {
      user: state.userReducer.user
    }
  } 
const mapDispatchToProps = dispatch => {
    return {
        SignOut: () => dispatch(SignOut())
    }
}

const styles = StyleSheet.create({
    bottomSection: {
        marginBottom: 15,
        fontSize: 18
    },
    drawerContent: {
        flex: 1
    },
    userInfo: {
        marginLeft: 60,
        paddingTop: 20
    },
    userDetail: {
        paddingLeft: 20
    },
    prefrence:{
        flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(DrawerContent)
