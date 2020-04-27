const INITIAL_STATE = {
  ques: false,
};

export default function controlQuestion(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPEN_QUESTION":
      return { ...state, ques: true };
    case "CLOSE_QUESTION":
      return { ...state, ques: false };
    default:
      return state;
  }
}
