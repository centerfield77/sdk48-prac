import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs>
          <Tabs.Screen
            name="index"
            options={
                {href: null, title: "Home"}
            }
          />
        </Tabs>
      );
}