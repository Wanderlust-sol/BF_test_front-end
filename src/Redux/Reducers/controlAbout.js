const INITIAL_STATE = {
  about: false,
};

export default function controlAbout(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPEN_ABOUT":
      return { ...state, about: true };
    case "CLOSE_ABOUT":
      return { ...state, about: false };
    default:
      return state;
  }
}
