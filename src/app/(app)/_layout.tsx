import { Logo } from "@/components/Logo";
import TextBase from "@/components/TextBase";
import { useSession } from "@/ctx";
import { Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AppLayout() {
  const { top } = useSafeAreaInsets();
  const { signOut } = useSession();

  return (
    <Stack
      layout={({ children }) => {
        return (
          <View className="flex-1">
            <View
              style={{ paddingTop: top }}
              className="bg-slate-800 border-b border-slate-700 flex-row justify-between items-start p-2 px-4"
            >
              <Logo size="sm" />
              <Pressable className="p-4" onPress={signOut}>
                <TextBase>Sair</TextBase>
              </Pressable>
            </View>
            {children}
          </View>
        );
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
