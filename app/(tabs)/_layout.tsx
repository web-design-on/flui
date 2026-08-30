import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { ComponentProps } from "react";
import { Platform, View } from "react-native";

function TabIcon({
  name,
  color,
  focused,
}: {
  name: ComponentProps<typeof Ionicons>["name"];
  color: string;
  focused: boolean;
}) {
  return (
    <View>
      <Ionicons name={name} size={26} color={color} />
      {focused && <View />}
    </View>
  );
}

export default function TabLayout() {
  const activeColor = useThemeColor({}, "text");
  const inactiveColor = useThemeColor({}, "tint");
  const bgColor = useThemeColor({}, "background");
  const borderColor = "#E5E5E5";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: bgColor,
          borderTopWidth: 1,
          borderTopColor: borderColor,
          height: Platform.OS === "ios" ? 88 : 95,
          paddingBottom: 25,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "home" : "home-outline"}
              color={focused ? activeColor : inactiveColor}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
