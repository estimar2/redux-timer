import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/Timer";

// reducer를, redux Stor(전체가 사용 가능한 가상 공간)에 쑤서 넣고, App이 시작

class App extends React.Component {
  render() {
    return <Timer />;
  }
}

export default App;
