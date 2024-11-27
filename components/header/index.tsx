import React from "react";
import { StyleSheet, StyleSheetProperties, View, ViewStyle } from "react-native";

interface HeaderProps{
    children: any
    style?: ViewStyle
}

export function Header({children, style}:HeaderProps) {
    return (
        <View style={{ minHeight: 70, marginTop: 50, paddingHorizontal: 20, ...style }}>
            {children}
        </View>
    )   
}