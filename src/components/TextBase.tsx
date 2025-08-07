import React from "react";
import { Text, TextProps } from "react-native";
import { clsx } from "clsx";

type TextBaseProps = TextProps & {
  size?: "md" | "sm" | "xs";
};

export default function TextBase({
  size = "md",
  children,
  className,
  ...props
}: TextBaseProps) {
  const sizeStyles = {
    md: "text-base",
    sm: "text-sm",
    xs: "text-xs",
  };

  return (
    <Text
      className={clsx("text-zinc-100", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </Text>
  );
}
