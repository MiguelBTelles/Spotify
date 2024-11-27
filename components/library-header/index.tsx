import React, { useState } from "react";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { Header } from "../header";
import { Avatar } from "../avatar";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ButtonTag } from "../button-tag";

export function LibraryHeader() {
    const [btnActive, setBtnActive] = useState("playlists");

    return (
        <Header style={{
            borderBottomWidth: 4,
            borderBottomColor: 'black',
            paddingBottom: 16
        }}>

            <View
                style={{
                    flexDirection: "column",
                    gap: 10,
                }}
            >

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 10,
                    }}
                >

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 16,
                        }}
                    >
                        <Avatar title={"M"} size={35} />
                        <Text
                            style={{
                                fontSize: 28,
                                color: "white",
                                fontWeight: "600",
                            }}
                        >
                            Sua Biblioteca
                        </Text>
                    </View>


                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity style={{ marginRight: 14 }}>
                            <AntDesign name="search1" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="plus" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        alignSelf: "center",
                        gap: 12,
                        marginTop: 20
                    }}
                >
                    <ButtonTag
                        onPress={() => setBtnActive("playlists")}
                        active={btnActive === "playlists"}
                        title={"Playlists"}
                    />
                    <ButtonTag
                        onPress={() => setBtnActive("álbuns")}
                        active={btnActive === "álbuns"}
                        title={"Álbuns"}
                    />
                    <ButtonTag
                        onPress={() => setBtnActive("artistas")}
                        active={btnActive === "artistas"}
                        title={"Artistas"}
                    />
                    <ButtonTag
                        onPress={() => setBtnActive("baixado")}
                        active={btnActive === "baixado"}
                        title={"Baixado"}
                    />
                </ScrollView>
               
            </View>
        
        </Header >
    );
}
