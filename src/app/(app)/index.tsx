import { NotificationItem } from "@/components/NotificationItem";
import { Sheet } from "@/components/Sheet";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import MapView from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function IndexMapPage() {
  const [isOpened, setIsOpened] = useState(true);
  const { bottom } = useSafeAreaInsets();

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

      {isOpened && (
        <Sheet.Content
          onClose={toggleSheet}
          sheetHeight={400}
          title="Notificações Perto de Você"
        >
          <FlatList
            style={{ marginBottom: bottom + 20 }}
            className="border-t border-slate-700"
            data={Array.from({ length: 10 })}
            renderItem={({ item }) => (
              <NotificationItem
                title="Padaria da Maria"
                description="Fornada de pães fresquinhos!"
                distance="200m"
                time="10 min"
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </Sheet.Content>
      )}

      <MapView style={{ width: "100%", height: "100%" }} />
    </Sheet.Root>
  );
}
