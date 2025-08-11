import { Sheet } from "@/components/Sheet";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import MapView from "react-native-maps";

export default function IndexMapPage() {
  const [isOpened, setIsOpened] = useState(true);

  const toggleSheet = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <Sheet.Root>
      <View className="absolute top-16 right-10 p-4 gap-8 z-10">
        <Pressable onPress={toggleSheet}>
          <Text>Open</Text>
        </Pressable>
      </View>

      {isOpened && <Sheet.Content onClose={toggleSheet} sheetHeight={360} />}

      <MapView style={{ width: "100%", height: "100%" }} />
    </Sheet.Root>
  );
}
