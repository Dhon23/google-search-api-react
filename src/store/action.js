function storeMarks(payload) {
  return { type: "STORE_MARKS", payload };
}

export const fetchMarks = () => (dispatch) => {
  const marks =
    window.localStorage.getItem("marks") &&
    JSON.parse(window.localStorage.getItem("marks"));
  if (!marks) window.localStorage.setItem("marks", "[]");
  dispatch(storeMarks(marks));
};

export const addMark = (payload) => (dispatch) => {
  const addMark = JSON.parse(window.localStorage.getItem("marks"));
  addMark.unshift(payload);
  // localStorage.marks = JSON.stringify(addMark);
  window.localStorage.setItem("marks", JSON.stringify(addMark));
  dispatch(storeMarks(addMark));
};

export const deleteMark = (id) => (dispatch) => {
  const deleteMark = JSON.parse(window.localStorage.getItem("marks")).filter(
    (el) => el.id !== id
  );
  // localStorage.marks = JSON.stringify(deleteMark);
  window.localStorage.setItem("marks", JSON.stringify(deleteMark));
  dispatch(storeMarks(deleteMark));
};
