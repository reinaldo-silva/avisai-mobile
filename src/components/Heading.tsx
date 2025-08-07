import { clsx } from "clsx";
import React from "react";
import { Text, TextProps } from "react-native";

type HeadingProps = TextProps & {
  size?: "xl" | "lg" | "md" | "sm";
};

export default function Heading({
  size = "lg",
  children,
  className,
  ...props
}: HeadingProps) {
  const sizeStyles = {
    xl: "text-3xl",
    lg: "text-2xl",
    md: "text-xl",
    sm: "text-lg",
  };

  return (
    <Text
      className={clsx("font-bold text-zinc-100", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </Text>
  );
}
