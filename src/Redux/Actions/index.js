export const showResult = () => {
  return {
    type: "SHOW_RESULT",
  };
};

export const closeResult = () => {
  return {
    type: "CLOSE_RESULT",
  };
};

export const addResult = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};

export const openQuestion = () => {
  return {
    type: "OPEN_QUESTION",
  };
};

export const closeQuestion = () => {
  return {
    type: "ClOSE_QUESTION",
  };
};
