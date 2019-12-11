import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/Timer";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Provider : react가 store를 받아옴
// 1.store를 받아옴
// 2.받아온 store를 childeren에 뿌려줌

// createStore : reducer를 통해 만들어진 공간

let store = createStore(reducer);

// reducer를, redux Store(전체가 사용 가능한 가상 공간)에 쑤서 넣고, App이 시작

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}

export default App;
