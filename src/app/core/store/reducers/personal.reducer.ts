import { PersonalDataState } from "../models/personal-data.model";
import { Action, createReducer, on } from "@ngrx/store";
import { storePersonalData } from "../actions/personal-data.action";

const initialState: PersonalDataState = {
  personalInformation: {
    name: '',
    lastName: '',
    age: '',
    email: '',
    phoneNumber: ''
  }
};

const _personalDataReducer = createReducer(
  initialState,
  on(storePersonalData, (state, { personalInformation }) => ({
    ...state,
    personalInformation: personalInformation
  }))
);

export function personalDataReducer(state: PersonalDataState, action: Action) {
  return _personalDataReducer(state, action);
}
