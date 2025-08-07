import TextBase from "@/components/TextBase";
import React from "react";
import { View } from "react-native";

interface DividerProps {
  label?: string;
}

export default function Divider({ label }: DividerProps) {
  return (
    <View className="flex-row items-center my-4">
      <View className="flex-1 h-px bg-gray-300" />
      {label && (
        <TextBase className="mx-3 text-gray-500 text-sm font-medium uppercase">
          {label}
        </TextBase>
      )}
      <View className="flex-1 h-px bg-gray-300" />
    </View>
  );
}
