import React from "react";
import { View, ImageBackground, Image, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { COLORS } from "@/constants/constants";

export function MusicLarge({ imageBackground, image, title = "Seu Gosto", artist = "Single · Sotam, Rob, Prod Gom", typeOfMusic = "single" }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.black, marginTop: 40 }}>
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
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }} numberOfLines={2}>
              {title}
            </Text>
            <Text style={{ fontSize: 14, color: COLORS.lightGray }} numberOfLines={1}>
              {artist}
            </Text>
          </View>
          <TouchableOpacity>
            <SimpleLineIcons name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "black",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <FontAwesome5 name="volume-mute" size={20} color="white" />
          <Text style={{ marginLeft: 8, color: "white", fontSize: 14, fontWeight: "600" }}>
            Ouvir prévia do {typeOfMusic}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
