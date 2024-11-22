import { COLORS } from "@/constants/constants";
import { TouchableOpacity, Text } from "react-native";

export function ButtonTag ({title, active, onPress}) {
    return (
        <TouchableOpacity
        onPress={onPress} 
        style={{paddingHorizontal: 12,
            paddingVertical: 4, backgroundColor: active  ? COLORS.green : COLORS.gray, alignSelf: 'center', borderRadius: 12
        }}>
            <Text style={{color: active ? 'black' : 'white'}}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}