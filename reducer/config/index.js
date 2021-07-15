const initialState = {
  identification: {
    state: "production",
    agent: "pc",
    version: "1.0.11",
  },
  isMenu: false,
};

const config = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CONFIG/UPDATE/AGENT":
      return {
        ...state,
        identification: {
          ...state.identification,
          agent: payload,
        },
      };
    case "CONFIG/MENU/CHANGE":
      return {
        ...state,
        isMenu: payload,
      };
    default:
      return state;
  }
};
export default config;
