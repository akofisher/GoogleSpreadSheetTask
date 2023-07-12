import { combineReducers } from 'redux'
import { default as sheetsData } from './SheetsData/SheetsReducer'






const rootReducer = combineReducers({
    sheetsData,


})

export default rootReducer