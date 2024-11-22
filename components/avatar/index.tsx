import { COLORS } from "@/constants/constants";
import React from "react";
import { View, Text } from "react-native";

export function Avatar({title}) {
    return (
        <View
        style={{
            backgroundColor: COLORS.blue,
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30
        }}
    >
        <Text
            style={{
                textAlign: 'center',
                fontSize: 24,
                color: 'white'
            }}>
            {title}
        </Text>
    </View>
    )
}