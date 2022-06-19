const logger = (store) => (next) => (action) => {
  console.log("dispatching action", action);
  let result = next(action);
  console.log("action done, state: ", store.getState());
  return result;
};

export default logger;
