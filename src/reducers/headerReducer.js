import {
  INCREAMENT_FORK,
  INCREAMENT_WATCH,
  INCREAMENT_STAR,
} from "../middelware/constants";

const initialState = {
  ForkCount: 44,
  StarCount: 300,
  WacthCount: 120,
};

export function headerinfo(state = initialState, action) {
  switch (action.type) {
    case INCREAMENT_FORK:
      return { ...state, ForkCount: state.ForkCount + 1 };
    case INCREAMENT_STAR:
      return { ...state, StarCount: state.StarCount + 1 };
    case INCREAMENT_WATCH:
      return {
        ...state,
        WacthCount: state.WacthCount + 1,
      };
    default:
      return state;
  }
}
