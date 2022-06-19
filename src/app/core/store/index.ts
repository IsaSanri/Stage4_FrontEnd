import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./models/app.model";
import { personalDataReducer } from "./reducers/personal.reducer";


export const reducers: ActionReducerMap<AppState> = {
  personalData: personalDataReducer,

};
