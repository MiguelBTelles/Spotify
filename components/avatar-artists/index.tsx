import { COLORS } from "@/constants/constants";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export function AvatarArtists({ image, title, fileType, artist }: any) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: 70, 
          height: 70,
          borderRadius: 40, 
        }}
        source={image ? { uri: image } : require("../../assets/images/icon.png")}
      />
      <View style={{ marginLeft: 12 }}>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: 400,
          }}
          numberOfLines={1} 
        >
          {title}
        </Text>
        <Text
          style={{
            color: COLORS.lightGray, 
            fontSize: 12,
          }}
          numberOfLines={1} 
        >
            {artist}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
