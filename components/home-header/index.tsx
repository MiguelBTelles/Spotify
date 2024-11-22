import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Header } from '../header'
import { Avatar } from '../avatar'
import { ButtonTag } from "../button-tag";
export function HomeHeader({ children }: any) {
    const [btnActive, setBtnActive] = useState('all')
    return (
        <Header>
            <ScrollView 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{alignSelf: 'center',  gap:12,}}
            style={{
                paddingHorizontal: 12, 
            }}>
                <Avatar title={'M'} />
                <ButtonTag onPress={() => setBtnActive('all')} active={btnActive==='all'} title={'All'}/>
                <ButtonTag onPress={() => setBtnActive('music')} active={btnActive==='music'} title={'Music'}/>
                <ButtonTag onPress={() => setBtnActive('podcast')} active={btnActive==='podcast'} title={'Podcasts'}/>
                <ButtonTag onPress={() => setBtnActive('videos')} active={btnActive==='videos'} title={'Videos'}/>
             

            </ScrollView>
        </Header>
    )
}