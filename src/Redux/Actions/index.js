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
    type: "CLOSE_QUESTION",
  };
};

export const openDetail = () => {
  return {
    type: "OPEN_DETAIL",
  };
};

export const closeDetail = () => {
  return {
    type: "CLOSE_DETAIL",
  };
};

export const openAbout = () => {
  return {
    type: "OPEN_ABOUT",
  };
};

export const closeAbout = () => {
  return {
    type: "CLOSE_ABOUT",
  };
};
