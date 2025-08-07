import { useSession } from "@/ctx";
import { router } from "expo-router";
import { StatusBar, Text, View } from "react-native";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View className="flex-1 justify-center items-center bg-slate-950">
      <StatusBar barStyle={"light-content"} />

      <Text
        className="text-white"
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}
      >
        Sign In 13
      </Text>
    </View>
  );
}
