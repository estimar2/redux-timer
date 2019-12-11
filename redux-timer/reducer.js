//  공식문서는 11 단계가 존재 => 우리 사용은 7단계로 진행
// ☆ redux 라는 공간이 있고, 공간 안에 있는 state(글로벌) 제어하거나 가져오는 액션을 reducer 라고 함

// redux ===  모든 컴포넌트들이 공통으로 사용할 수 있는 공간(state)
// 사용을 위해서는 react-redux, redux => 두개의 패키지가 필요
// (+ redux라는 녀석은 react에서만 구동되는게 아니라, jQuery, JavaScript, Native, Android, Swift ... 에서 사용할 수 있음)

// recuder => redux에게 '엑션'을 보내는 역할

// 1.import

// 2.action : 단순히 variable area
// START_TIMER, RESTART_TIMER 2개를 사용하겠다.
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// 3. Action Creator : How to working ? (어떻게 작동할껀데?)=> function의 공간
// return을 하게 되면 reducer가 가지고 가게됨 => 액션이라고 함
const startTimer = () => {
  return {
    type: START_TIMER
  };
};

const restartTimer = () => {
  return {
    type: RESTART_TIMER
  };
};

const addSecond = () => {
  return {
    type: ADD_SECOND
  };
};

// 4. Reducer : 글로벌스테이트 => 중요!
// initialState : 초기값
// 처음 문서 로딩되고 여기서부터 시작하고 다른 것들은 준비상태
const TIMER_DURATION = 3600;

const initialState = {
  isPlaying: false,
  timerDuration: TIMER_DURATION,
  elapsedTime: 0
};

/* 이니셜스테이트로 시작할꺼고, 액션을 보낼 때 마다 -> default 값으로 리듀서를 실행한다.*/
// switch = if문

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state);
    default:
      return state;
  }
};

// 5. Reducer Function : 어떻게 실행할꺼야?
const applyStartTimer = state => {
  return {
    // ...state : 기존의 state를 받아오겠다 라는 의미
    ...state,
    isPlaying: true
  };
};

const applyRestartTimer = state => {
  return {
    ...state,
    isPlaying: false,
    elapsedTIme: 0
  };
};
const applyAddSecond = state => {
  if (state.elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
};

// 6.Export Action Creator
// 밖에서 aiction 을 사용할 수 있도록 actionCreator을 담아 export해줌
const actionCreator = {
  startTimer,
  restartTimer,
  addSecond
};

export { actionCreator };

// 7.Export Reducer
export default reducer;

// 사고방식 = ;;
// 어디서 부터 시작할 것인지가 중요
// 1.'사용자가 무언가를 했다'부터 시작.
