const INITIAL_STATE = {
  detail: false,
};

export default function controlDetail(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPEN_DETAIL":
      return { ...state, detail: true };
    case "CLOSE_DETAIL":
      return { ...state, detail: false };
    default:
      return state;
  }
}
