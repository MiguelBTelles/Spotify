import React from "react";
import { View, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface BackButtonProps {
    onPress: any
    size?: number
}

export function BackButton({onPress, size = 34}: BackButtonProps) {
    return(
        <TouchableOpacity onPress={onPress}>
            <AntDesign name="arrowleft" size={size} color="white" />
        </TouchableOpacity>
    )
}