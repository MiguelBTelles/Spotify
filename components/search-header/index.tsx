import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Header } from "../header";
import { Avatar } from "../avatar";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from "@/constants/constants";

export function SearchHeader() {
    const [music, setMusic] = useState('');

    return (
        <Header>
            <View style={{ alignItems: 'center', flexDirection: 'row', gap: 18, marginBottom: 20,}}>
                <Avatar title="M" size={35} />
                <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold', marginRight: 170 }}>
                    Buscar
                </Text>
                <TouchableOpacity>
                    <Feather name="camera" size={26} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 40, marginBottom: 10}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    width: '100%',
                    backgroundColor: '#fff',
                    gap: 8
                }}>
                    <AntDesign name="search1" size={24} color={COLORS.placeholder} />
                    <TextInput
                        placeholder="O que você quer ouvir?"
                        placeholderTextColor={COLORS.placeholder}
                        value={music}
                        onChangeText={setMusic}
                        style={{
                            height: '100%',
                            fontSize: 16,
                            fontWeight: 800
                        }}
                    />
                </View>
            </View>
        </Header>
    );
}
