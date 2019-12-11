import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";

// propTypes : 데이터를 받아올 때, 어떤 데이터를 받을지 미리 지정 Validation
// import 할때 처음에 대문자, 뒤에 소문자 주의하기!!

const Button = ({ iconName, action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <FontAwesome name={iconName} size={60} />
    </TouchableOpacity>
  );
};

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default Button;
