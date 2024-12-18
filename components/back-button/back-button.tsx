import React from "react";
import { View, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface BackButtonProps {
    onPress: any
}

export function BackButton({onPress}: BackButtonProps) {
    return(
        <TouchableOpacity onPress={onPress}>
            <AntDesign name="arrowleft" size={34} color="white" />
        </TouchableOpacity>
    )
}