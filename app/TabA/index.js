import { View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ headerShown: false}} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link href="/TabA/StackA-1">Go to StackA-1</Link>
    </View>
  );
}