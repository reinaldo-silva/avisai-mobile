import Entypo from "@expo/vector-icons/Entypo";
import { clsx } from "clsx";
import React, { useState } from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  type?: "text" | "password";
  className?: string;
}

export default function Input({
  type = "text",
  className,
  ...props
}: InputProps) {
  const [secure, setSecure] = useState(type === "password");

  const toggleSecure = () => setSecure((prev) => !prev);

  return (
    <View className="relative">
      <TextInput
        className={clsx(
          "border border-gray-300 rounded-lg px-4 py-3 text-black bg-white",
          type === "password" && "pr-10",
          className,
        )}
        placeholderTextColor="#999"
        secureTextEntry={secure}
        {...props}
      />
      {type === "password" && (
        <Pressable
          onPress={toggleSecure}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          <Entypo
            name={secure ? "eye" : "eye-with-line"}
            size={20}
            color="#999"
          />
        </Pressable>
      )}
    </View>
  );
}
