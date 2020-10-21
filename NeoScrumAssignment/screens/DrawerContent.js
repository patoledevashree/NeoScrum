import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {
    Avatar,
    Text,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfo}>
                        <View>
                            <Avatar.Image
                                source={{
                                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                                }}
                                rounded
                                size={100} />
                        </View>
                    </View>
                    <View style={styles.userDetail}>
                        <Title>Devashree Patole</Title>
                        <Caption>Trainee Engineer</Caption>
                    </View>
                    <Drawer.Section>
                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name='home-outline'
                                    color={color}
                                    size={size} ></Icon>
                            )}
                            label='Dashboard'
                            onPress={props.navigation.navigate('Dashboard')}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name='pencil-outline'
                                    color={color}
                                    size={size} ></Icon>
                            )}
                            label='Add FeedBack'
                            onPress={props.navigation.navigate('Feedback')}
                        /> */}
                        <DrawerItemList {...props}/>
                    </Drawer.Section>
                    <Drawer.Section title='Prefrence'>
                        <TouchableRipple>
                            <View style={styles.prefrence}>
                                <Text>Dark Theme</Text>
                                <Switch />
                            </View>
                        </TouchableRipple>
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
                    label='LogOut'
                />
            </Drawer.Section>

        </View>
    )
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