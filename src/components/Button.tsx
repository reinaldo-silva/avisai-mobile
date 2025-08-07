import { clsx } from "clsx";
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Variant = "default" | "outline" | "link";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: Variant;
}

export default function Button({
  title,
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  const buttonStyles = clsx(
    "py-3 px-5 rounded-xl items-center justify-center",
    {
      "bg-primary active:opacity-80": variant === "default",
      "border border-primary bg-transparent": variant === "outline",
      "bg-transparent": variant === "link",
    },
    className,
  );

  const textStyles = clsx("text-base font-semibold", {
    "text-white": variant === "default",
    "text-zinc-100": variant === "outline" || variant === "link",
  });

  return (
    <TouchableOpacity className={buttonStyles} {...props}>
      <Text className={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
}
