import { Sheet } from "@/components/Sheet";
import { useSession } from "@/ctx";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView from "react-native-maps";

export default function IndexMapPage() {
  const { signOut } = useSession();
  const [isOpened, setIsOpened] = useState(false);

  const toggleSheet = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <GestureHandlerRootView className="flex-1 bg-slate-900 relative">
      <View className="absolute top-16 right-10 p-4 gap-8 bg-red-500 z-10">
        <Pressable onPress={signOut}>
          <Text>Sair</Text>
        </Pressable>
        <Pressable onPress={toggleSheet}>
          <Text>Open</Text>
        </Pressable>
      </View>

      {isOpened && <Sheet onClose={toggleSheet} />}

      <MapView style={{ width: "100%", height: "100%" }} />
    </GestureHandlerRootView>
  );
}
