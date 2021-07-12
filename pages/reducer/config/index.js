const initialState = {
  identification: {
    state: "production",
    agent: "pc",
    version: "1.0.11",
  },
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
    default:
      return state;
  }
};
export default config;
