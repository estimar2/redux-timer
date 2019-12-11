import Timer from "./timerPressenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../reducer";

//store를 받아옴

// 1. state 받아오기 (reducer 에서 actionCreator as tomatoActions 가져오기)
mapStateProps = state => {
  const { isPlaying, timerDuration, elapsedTime } = state;

  // reducer 에는 isPlaying, timerDuration, elapsed 3개 존재
  // 근데 우리는 isPlaying, timerDuration 2개만 사용 중

  return {
    isPlaying,
    timerDuration,
    elapsedTime
  };
};

// reducer에 state만들어지고
// return
// index에서 state (필요한 녀석만)받아오고 -> state ===> props로 전환해서 보냄
// return
// presenter 에서 state를 props로 받아오고
// console.log

// 2. function 받아오기
// dispatch : 전달받은 function이라고 생각하면 편함
// tomatoActions : reduceer 를 의미함
mapDispatchToProps = dispatch => {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
  };
};

// result : 받아온 녀석과 Timer를 함께 리턴하기
// connect 가 mapStateProps, mapDispatchToProps 를 this.props로 전달해줌
export default connect(mapStateProps, mapDispatchToProps)(Timer);
