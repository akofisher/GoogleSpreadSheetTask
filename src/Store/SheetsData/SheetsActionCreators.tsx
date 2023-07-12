import { SET_SHEETS_DATA } from "./SheetsActions";


export const setSheetsData = (sheetsData: any) => {
    return {
        type: SET_SHEETS_DATA,
        payload: sheetsData,
    }
}