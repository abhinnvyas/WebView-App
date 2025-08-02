import React, { useState } from "react";
import {
  ActivityIndicator,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { WebView } from "react-native-webview";

export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#6200EE" />
        </View>
      )}
      <WebView
        source={{ uri: "http://192.168.1.13:8123" }}
        onLoadEnd={() => setLoading(false)}
      />
    </SafeAreaView>
  );
}

// ✅ Hide header title or set a custom one
export const screenOptions = {
  title: "", // removes the "index" label
  headerShown: false, // optional: hides header bar completely
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -25,
    marginTop: -25,
    zIndex: 10,
  },
});
