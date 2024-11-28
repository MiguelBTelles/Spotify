import { COLORS } from "@/constants/constants";
import React from "react";
import { View, Text } from "react-native";

export function Avatar({title, size}: any) {
    return (
        <View
        style={{
            backgroundColor: COLORS.blue,
            width: size,
            height: size,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: size / 2
        }}
    >
        <Text
            style={{
                textAlign: 'center',
                fontSize: 20,
                color: 'black'
            }}>
            {title}
        </Text>
    </View>
    )
}