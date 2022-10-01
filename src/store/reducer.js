export function marksReducer(state = [], action) {
  switch (action.type) {
    case "STORE_MARKS":
      return action.payload;

    default:
      return state;
  }
}
