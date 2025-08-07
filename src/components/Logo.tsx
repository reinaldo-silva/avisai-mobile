import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import TextBase from "@/components/TextBase";
import { zinc } from "tailwindcss/colors";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useEffect } from "react";

export function Logo() {
  const rotate = useSharedValue(0);

  useEffect(() => {
    rotate.value = withRepeat(
      withTiming(10, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );
    console.log("Logo animation started");
  }, [rotate]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    };
  });

  return (
    <View className="rounded-md overflow-hidden mx-auto mb-5">
      <LinearGradient
        colors={["#cc5500", "#FF8F33"]}
        style={{
          marginHorizontal: "auto",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          paddingVertical: 10,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Animated.View style={animatedStyle}>
          <Entypo name="megaphone" size={40} color={zinc[100]} />
        </Animated.View>
        <TextBase className="text-zinc-100 mt-2 font-bold">AvisAÍ</TextBase>
      </LinearGradient>
    </View>
  );
}
