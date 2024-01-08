import{FETCH_CAMP_HOME,FETCH_CAMP_LIST,FETCH_CAMP_DETAIL,FETCH_NEWS,FETCH_PAGE,FETCH_COUNT} from "../actions/types";
// 데이터를 저장 => useState
// useSelector((state)=> camp_list)
const initialState={
    camp_list:[],
    camp_detail:{},
    news_data:[],
    page_info:{},
    totalpage:0,
    count:0
}

export default function(state=initialState,action){
    switch (action.type)
    {
        case FETCH_CAMP_HOME:
            return{
                ...state,
                camp_list:action.payload
            }
        case FETCH_CAMP_LIST:
            return{
                ...state,
                camp_list:action.payload
            }
        case FETCH_CAMP_DETAIL:
            return{
                ...state,
                camp_detail: action.payload
            }
        case FETCH_NEWS:
            return{
                ...state,
                news_data: action.payload
            }
        case FETCH_PAGE:
            return {
                ...state,
                totalpage: action.payload
            }
        case FETCH_COUNT:
            return {
                ...state,
                count:action.payload
            }
        default:
            return state;
    }
}