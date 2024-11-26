import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { Header } from "../header";
import { Avatar } from "../avatar";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { COLORS } from "@/constants/constants";
import AntDesign from '@expo/vector-icons/AntDesign';

export function SearchHeader() {
    const [music, setMusic] = useState('');

    return (
        <Header>
            <View style={{ alignItems: 'center', flexDirection: 'row', gap: 18, marginBottom: 20 }}>
                <Avatar title={'M'} size={35} />
                <Text style={{ color: 'white', fontSize: 28, justifyContent: 'center', fontWeight: 'bold', marginRight: 170 }}>
                    Buscar
                </Text>
                <TouchableOpacity>
                    <Feather name="camera" size={26} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:  40 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingLeft: 10, paddingRight: 10, width: '100%', height: 50, backgroundColor: '#fff', gap:8 }}>
                <AntDesign name="search1" size={24} color={COLORS.placeholder} />
                    <TextInput
                        placeholder="Oque você quer ouvir?"
                        placeholderTextColor={COLORS.placeholder}
                        value={music}
                        onChangeText={setMusic}
                        style={{
                            flex: 1, height: '100%', fontSize: 16,
                        }}
                    />
                </View>
            </View>
        </Header>
    );
}