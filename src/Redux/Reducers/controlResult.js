const INITIAL_STATE = {
  res: false,
  ques: false,
};

export default function controlResult(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SHOW_RESULT":
      return { ...state, res: true };
    case "CLOSE_RESULT":
      return { ...state, res: false };
    default:
      return state;
  }
}
