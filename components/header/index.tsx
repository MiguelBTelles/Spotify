import React from "react";
import { View } from "react-native";

export function Header({children}:any) {
    return (
        <View style={{ height: 70, marginTop: 28, justifyContent: 'center'}}>
            {children}
        </View>
    )
}