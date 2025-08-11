import Heading from "@/components/Heading";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Dimensions, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
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
  sheetHeight?: number;
  title: string;
  children?: ReactNode;
};

const SheetContent = ({
  onClose,
  sheetHeight = SHEET_HEIGHT,
  title,
  children,
}: Props) => {
  const offset = useSharedValue(0);

  const pan = Gesture.Pan()
    .onChange((event) => {
      const offsetDelta = event.changeY + offset.value;
      const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta);

      offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    })
    .onFinalize(() => {
      if (offset.value < sheetHeight / 3) {
        offset.value = withSpring(0);
      } else {
        offset.value = withTiming(sheetHeight, {}, () => {
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
        className="absolute bg-slate-800 z-10"
        style={[
          {
            width: DIMENSIONS.width,
            height: sheetHeight,
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
        <View className="mt-2 flex-1">
          <Heading size="md" className="mb-3 px-6">
            {title}
          </Heading>
          {children}
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

const SheetRoot = ({ children }: { children: ReactNode }) => {
  return (
    <GestureHandlerRootView className="flex-1 relative">
      {children}
    </GestureHandlerRootView>
  );
};

export const Sheet = {
  Content: SheetContent,
  Root: SheetRoot,
};
