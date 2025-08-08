import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions, Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  SlideInDown,
  SlideOutDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { zinc } from "tailwindcss/colors";

const DIMENSIONS = Dimensions.get("window");
const SHEET_HEIGHT = 420;
const SHEET_OVER_DRAG = 20;

type Props = {
  onClose: () => void;
};

export function Sheet({ onClose }: Props) {
  const offset = useSharedValue(0);

  const pan = Gesture.Pan()
    .onChange((event) => {
      const offsetDelta = event.changeY + offset.value;
      const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta);

      offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    })
    .onFinalize(() => {
      if (offset.value < SHEET_HEIGHT / 3) {
        console.log("Closing sheet");

        offset.value = withSpring(0);
      } else {
        offset.value = withTiming(SHEET_HEIGHT, {}, () => {
          runOnJS(onClose)();
        });
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        className="absolute bg-zinc-800 z-10"
        style={[
          {
            width: DIMENSIONS.width,
            height: SHEET_HEIGHT,
            bottom: -SHEET_OVER_DRAG * 1.3,
          },
          translateY,
        ]}
        entering={SlideInDown.springify().damping(15)}
        exiting={SlideOutDown}
      >
        <MaterialCommunityIcons
          name="drag-horizontal"
          color={zinc[400]}
          className="mt-4 self-center"
          size={24}
        />
        <Text className="text-zinc-100 text-lg font-bold m-6">
          This is a sheet component
        </Text>
      </Animated.View>
    </GestureDetector>
  );
}
