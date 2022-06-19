import { createAction, props } from "@ngrx/store";
import { PersonalInformationInterface } from "src/app/models/information.model";

export const storePersonalData = createAction(
  "[Personal Data] Store personal information",
  props<{ personalInformation: PersonalInformationInterface }>()
);
