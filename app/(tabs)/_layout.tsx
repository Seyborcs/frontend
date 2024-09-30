import { Tabs } from "expo-router";
import React from "react";

import { StyleSheet } from "react-native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { colors } from "@/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedText,
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Przygotuj się",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bicycle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Mapa",
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
        }}
      />
      <Tabs.Screen
        name="warnings"
        options={{
          title: "Ostrzeżenia",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="alert-circle" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="learn"
        options={{
          title: "Ucz się",
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600",
  },
});
