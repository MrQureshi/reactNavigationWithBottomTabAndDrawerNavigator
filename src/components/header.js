import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, Touchable, TouchableOpacity } from "react-native"

const Appheader = () => {
    const navigation = useNavigation();
    return (
            <View style={{
                height: 70,
                paddingTop: 30,
                backgroundColor: "red",
                paddingHorizontal: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }} >
                <TouchableOpacity onPress={()=> navigation.openDrawer && navigation.openDrawer()}>
                    <Text>open Drawer</Text>
                </TouchableOpacity>
            </View>
    )
}

export default Appheader