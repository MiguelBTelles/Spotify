import { COLORS } from "@/constants/constants";
import React, { useState } from "react";
import { View, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface InputSearchProps {

}

export function InputSearch() {
    const [searchAlbum, setSearchAlbum] = useState('');

    return (
        <View style={{
            backgroundColor: 'rgba(211, 211, 211, 0.2)',
            width: '95%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 8,
            gap: 8
        }}>
            <AntDesign name="search1" size={24} color="white" />
            <TextInput
                placeholder="Procure um álbum"
                placeholderTextColor='white'
                value={searchAlbum}
                onChangeText={setSearchAlbum}
                style={{
                    width: '100%',
                    fontSize: 16,
                    fontWeight: 600
                }}
            />
        </View>
    )
}