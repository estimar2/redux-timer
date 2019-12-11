// Pressenter : 오로지 화면을 구성하는 곳

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";

//초를 분으로 바꿔주는 함수
function formatTime(time) {
  var minutes = Math.floor(time / 60);
  time -= minutes * 60;

  var seconds = parseInt(time % 60, 10);

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return;
}

class Timer extends React.Component {
  // timerDuration이 timerDuration -경과시간 이 되어야 한다.
  // props가 바뀔 때를 검증해야 함

  shouldComponentUpdate = (nextProps, nextState) => {
    // 현재 props가져오기
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      //   console.log("Timer Start!");
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        interval: timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      //   console.log("Timer Stop!");
      clearInterval(this.state.interval);
    }
    return true; // true일땐 render로 넘어가라
  };

  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer
    } = this.props;

    // console.log(isPlaying, timerDuration, elapsed);

    return (
      <View style={styles.container}>
        <View style={styles.upArea}>
          {/* 숫자가 나올 녀석 */}
          <Text style={styles.time}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>

        <View style={styles.downArea}>
          {/* 버튼이 나올 녀석 */}
          {/* false -> 재생버튼 보여줘
          true -> 정지버튼 보여줘 */}
          {/* 너 삼항연산자 알아 ? 끄덕 : 몰라 */}
          {isPlaying ? (
            <Button iconName="stop-circle" action={restartTimer} />
          ) : (
            <Button iconName="play-circle" action={startTimer} />
          )}
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
