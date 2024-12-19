import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "@/constants/constants";

export function ArtistPerfilTabs() {
    const [activeTab, setActiveTab] = useState("Musicas");

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setActiveTab("Musicas")}
                style={[
                    styles.tab,
                    activeTab === "Musicas" && styles.activeTab
                ]}
            >
                <Text style={[
                    styles.text,
                    activeTab === "Musicas" ? styles.activeText : styles.inactiveText
                ]}>
                    Músicas
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setActiveTab("Curtas")}
                style={[
                    styles.tab,
                    activeTab === "Curtas" && styles.activeTab
                ]}
            >
                <Text style={[
                    styles.text,
                    activeTab === "Curtas" ? styles.activeText : styles.inactiveText
                ]}>
                    Curtas
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setActiveTab("Eventos")}
                style={[
                    styles.tab,
                    activeTab === "Eventos" && styles.activeTab
                ]}
            >
                <Text style={[
                    styles.text,
                    activeTab === "Eventos" ? styles.activeText : styles.inactiveText
                ]}>
                    Eventos
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 28,
    },
    tab: {
        paddingBottom: 8,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: COLORS.green,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    activeText: {
        color: 'white',
    },
    inactiveText: {
        color: COLORS.lightGray,
    },
});