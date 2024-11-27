
import AntDesign from '@expo/vector-icons/AntDesign';
import React from "react";
import { View, ImageBackground, Image, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { COLORS } from "@/constants/constants";

export function MusicLarge({ Animated, imageBackground, image, title, artist, typeOfMusic, typeOfMusicCreator }: any) {
  return (
    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 40 }}>
      <ImageBackground
        style={{
          width: 380,
          height: 500,
          borderRadius: 10,
          overflow: "hidden",
          padding: 20,
        }}
        source={imageBackground ? { uri: imageBackground } : require("../../assets/images/icon.png")}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            style={{ width: 70, height: 70, borderRadius: 8 }}
            source={image ? { uri: image } : require("../../assets/images/icon.png")}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "800", color: "white" }} numberOfLines={2}>
              {title}
            </Text>
            <Text style={{ fontSize: 14, color: '#c2c2c2' }} numberOfLines={1}>
              {typeOfMusic} • {typeOfMusicCreator}
            </Text>
          </View>
          <TouchableOpacity>
            <SimpleLineIcons name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            position: 'absolute',
            bottom: 80,
            left: 20,
            color: COLORS.lightGray
          }}
          numberOfLines={1}
        >
          {artist}
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 30,
            left: 20,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(42, 42, 42, 0.65)",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <FontAwesome5 name="volume-mute" size={20} color="white" />
          <Text style={{ marginLeft: 8, color: "white", fontSize: 14, }}>
            Ouvir prévia da {typeOfMusic}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            bottom: 30,
            right: 20,
            flexDirection: "row",
            alignItems: "center",
            gap: 28
          }}
        >
          <TouchableOpacity>
            <SimpleLineIcons name="options-vertical" size={18} color="white" />
          </TouchableOpacity>
          <TouchableOpacity >
            <AntDesign name="play" size={30} color="white" />
          </TouchableOpacity>


        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
