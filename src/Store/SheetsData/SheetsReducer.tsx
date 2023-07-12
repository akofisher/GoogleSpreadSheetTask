import { SET_SHEETS_DATA } from "./SheetsActions";

const initialState = {
    sheetsData: [],
}

export default function addressReducer(state = initialState, action: { type: any; payload: any; }) {
    switch (action.type) {
        case SET_SHEETS_DATA:
            return {
                ...state,
                sheetsData: action.payload,
            }
            break;




        default:
            return state
    }
}