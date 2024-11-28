import { COLORS } from "@/constants/constants";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export function SquareFileAdd({ title }: { title: string }) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
      }}
    >
      
      <View
        style={{
          width: 70,
          height: 70,
          backgroundColor: COLORS.gray,
          justifyContent: "center", 
          alignItems: "center", 
        }}
      >
        <AntDesign name="plus" size={38} color={COLORS.lightGray} />
      </View>

    
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "500", 
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
