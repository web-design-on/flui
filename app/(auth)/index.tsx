import { Redirect } from "expo-router";
import { createElement } from "react";

export default function HomeScreen() {
  return createElement(Redirect, { href: "/(auth)/cadastro" });
}
