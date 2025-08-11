import TextBase from "@/components/TextBase";
import Entypo from "@expo/vector-icons/Entypo";
import { clsx } from "clsx";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { zinc } from "tailwindcss/colors";

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
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
    <View
      className={clsx("rounded-md overflow-hidden", {
        "mx-0 mb-0": size === "sm",
        "mx-auto mb-5": size === "md",
      })}
    >
      <LinearGradient
        colors={["#cc5500", "#FF8F33"]}
        style={{
          marginHorizontal: "auto",
          justifyContent: "center",
          alignItems: "center",
          padding: size === "md" ? 20 : 10,
          paddingVertical: 10,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Animated.View style={animatedStyle}>
          <Entypo
            name="megaphone"
            size={size === "md" ? 40 : 20}
            color={zinc[100]}
          />
        </Animated.View>
        {size === "md" && (
          <TextBase className="text-zinc-100 mt-2 font-bold">AvisAÍ</TextBase>
        )}
      </LinearGradient>
    </View>
  );
}
