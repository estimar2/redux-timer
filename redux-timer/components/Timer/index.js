import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";

class Timer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upArea}>
          {/* 숫자가 나올 녀석 */}
          <Text style={styles.time}>25:00</Text>
        </View>

        <View style={styles.downArea}>
          {/* 버튼이 나올 녀석 */}
          <Button iconName="play-circle" action={() => alert("재생")} />
          <Button iconName="stop-circle" action={() => alert("멈춤")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  upArea: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  downArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    fontSize: 100
  }
});

export default Timer;
