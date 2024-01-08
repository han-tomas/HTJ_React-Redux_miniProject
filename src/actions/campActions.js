import {FETCH_CAMP_HOME,FETCH_CAMP_LIST,FETCH_CAMP_DETAIL,FETCH_NEWS,FETCH_PAGE,FETCH_COUNT} from "./types";
import axios from "axios";
// HOME 화면 리스트 출력
export const fetchCampHome=()=>dispatch=>{
    axios.get('http://localhost/camp/home_react')
        .then(response=>dispatch({
            type:FETCH_CAMP_HOME,
            payload:response.data
        }))
}
// 캠핑 검색 리스트 출력
export const fetchCampList=(address,page)=>dispatch=>{
    axios.get('http://localhost/camp/camp_find_react',{
        params:{
            address:address,
            page:page
        }
    }).then(response=>dispatch({
        type:FETCH_CAMP_LIST,
        payload:response.data
    }))
}
// 페이지네이션을 위한 총페이지수, 총 항목수
export const fetchPage=(address)=>dispatch=>{
    axios.get("http://localhost/camp/camp_totalpage_react",{
        params:{
            address:address
        }
    }).then(response=>dispatch({
        type:FETCH_PAGE,
        payload:response.data
        // reducer로 전송 => store
    }))
}
export const fetchCount=(address)=>dispatch=>{
    axios.get("http://localhost/camp/camp_count_react",{
        params:{
            address:address
        }
    }).then(response=>dispatch({
        type:FETCH_COUNT,
        payload:response.data
        // reducer로 전송 => store
    }))
}
// 캠핑 상세
export const fetchCampDetail=(cno)=>dispatch=>{
    axios.get('http://localhost/camp/camp_detail_react',{
        params:{
            cno:cno
        }
    }).then(response=>dispatch({
        type:FETCH_CAMP_DETAIL,
        payload:response.data
    }))
}
// 뉴스 검색
export const fetchNews=(fd)=>dispatch=>{
    axios.get('http://localhost/news/news_find_react',{
        params:{
            fd:fd
        }
    }).then(response=>dispatch({
        type:FETCH_NEWS,
        payload:response.data
    }))
}
