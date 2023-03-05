import { SplashScreen ,Navigator} from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function App() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);

  return (
    <>
      {/* When all loading is setup, unmount the splash screen component. */}
      {!isReady && <SplashScreen />}
      <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text>Home</Text>
      </View>
    </>
  );
}