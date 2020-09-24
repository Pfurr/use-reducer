import React, { useReducer } from "react";

const initialState = "";
const reducer = (state, action) => action;

const Example04 = () => {
  const [firstName, changeFirstName] = useReducer(reducer, initialState);
  const [lastName, changeLastName] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        First Name:
        <TextInput value={firstName} onChangeText={changeFirstName}/>
      </div>
      <div>
        Last Name:
        <TextInput value={lastName} onChangeText={changeLastName} />
      </div>
    </>
  );
};

// ref: https://facebook.github.io/react-native/docs/textinput
const TextInput = ({ value, onChangeText }) => (
  <input
    type="text"
    value={value}
    onChange={e => onChangeText(e.target.value)}
  />
);

export default Example04;
