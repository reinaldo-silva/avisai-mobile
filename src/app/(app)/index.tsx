import { useSession } from "@/ctx";
import { Text, View } from "react-native";

export default function Index() {
  const { signOut } = useSession();

  return (
    <View className="flex-1 justify-center items-center bg-slate-900">
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
      >
        Sign Out
      </Text>
    </View>
  );
}
