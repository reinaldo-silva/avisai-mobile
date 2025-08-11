import Heading from "@/components/Heading";
import TextBase from "@/components/TextBase";
import { View } from "react-native";

interface NotificationItemProps {
  distance: string;
  title: string;
  description: string;
  time: string;
}

export function NotificationItem({
  description,
  distance,
  time,
  title,
}: NotificationItemProps) {
  return (
    <View className="border-b border-slate-700 flex-row gap-2">
      <View className="justify-center items-center">
        <View className="w-16 h-16 bg-slate-600" />
        <TextBase size="sm">{distance}</TextBase>
      </View>
      <View className="flex-1 py-1">
        <Heading size="sm">{title}</Heading>
        <TextBase size="sm">{description}</TextBase>
      </View>
      <View className="pr-4 py-1 items-end">
        <TextBase size="sm">{time}</TextBase>
      </View>
    </View>
  );
}
