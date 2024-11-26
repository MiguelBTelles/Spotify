import { COLORS } from "@/constants/constants";
import React from "react";
import { View } from "react-native";

export function Container({children}:any) {
    return (
        <View style={{backgroundColor: COLORS.backgroundScreen, flex: 1,}}>
            {children}
        </View>
    )
}