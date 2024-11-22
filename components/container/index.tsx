import React from "react";
import { View } from "react-native";

export function Container({children}:any) {
    return (
        <View style={{backgroundColor: 'black', flex: 1,}}>
            {children}
        </View>
    )
}