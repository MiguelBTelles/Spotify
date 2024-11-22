import React from "react";
import { View, ScrollView } from "react-native";


export function Content({children}:any) {
    return (
        <ScrollView contentContainerStyle={{paddingHorizontal: 12}}>
            {children}
        </ScrollView>
    )
}