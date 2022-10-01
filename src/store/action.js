function storeMarks(payload) {
  return { type: "STORE_MARKS", payload };
}

export const fetchMarks = () => (dispatch) => {
  const marks = localStorage.marks && JSON.parse(localStorage.marks);
  if (!marks) localStorage.setItem("marks", "[]");
  dispatch(storeMarks(marks));
};

export const addMark = (payload) => (dispatch) => {
  const addMark = JSON.parse(localStorage.marks)
  addMark.unshift(payload);
  localStorage.marks = JSON.stringify(addMark);
  dispatch(storeMarks(addMark));
};

export const deleteMark = (id) => (dispatch) => {
  const deleteMark = JSON.parse(localStorage.marks).filter(
    (el) => el.id !== id
  );
  localStorage.marks = JSON.stringify(deleteMark);
  dispatch(storeMarks(deleteMark));
};
