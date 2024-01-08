import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import{FETCH_CAMP_LIST,FETCH_COUNT,FETCH_PAGE} from "../../actions/types";
import {fetchCampList,fetchPage,fetchCount} from "../../actions/campActions";
import {NavLink} from "react-router-dom";
import Pagination from "react-js-pagination";
function CampList(){
    const dispatch=useDispatch()
    const [address,setAddress]=useState('경기')
    const [curpage,setCurpage]=useState(1)

    //데이터 읽기
    useEffect(() => {
        dispatch(fetchCampList(address,curpage))
        dispatch(fetchPage(address))
        dispatch(fetchCount(address))
    }, [curpage,address]);
    // 이벤트 처리
    // 검색어 입력값으로 변환
    const findChange=(e)=>{
        setAddress(e.target.value)
    }
    //"검색" 버튼 클릭시 처리
    const findBtn=()=>{
        setCurpage(1)
    }


    const campList=useSelector((state)=>state.camps.camp_list)
    const totalpage=useSelector((state)=>state.camps.totalpage)
    const count=useSelector((state)=>state.camps.count)
    const handlePageChange = (page) => {
        setCurpage(page);
        console.log("page=" + curpage)

    }

    const html=campList.map((c,index)=>
        <li className={index % 4 === 0 ? "one_quarter first" : "one_quarter"} key={c.cno}>
            <NavLink to={"/camp/camp_detail/"+c.cno}><img src={c.image} title={c.name} style={{"width":"220px","height":"180px"}}/></NavLink>
        </li>
    )

    return(
        <Fragment>
        <div className={"wrapper bgded overlay"} style={{"backgroundImage":"url('../images/demo/backgrounds/camping2.jpg')"}}>
            <div id="breadcrumb" className="hoc clear">
                <h6 className="heading">Camping</h6>
            </div>
        </div>
        <div className="wrapper row3">
            <main className="hoc container clear">
                <h1 style={{"color":"black"}}>캠핑장 검색</h1>
                <div className={"row"}>
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <td className={"inline text-right"}>
                                <input type="text" style={{ color: 'black' }} size={25} value={address} onChange={findChange}/>
                                <input type={"button"} style={{"backgroundColor":"#E2921A","borderColor":"#E2921A"}} value={"검색"}
                                       onClick={findBtn} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="content">
                    <div id="gallery">
                        <figure>
                            <ul className="nospace clear">
                                {html}
                            </ul>
                        </figure>
                    </div>
                    <div className={"text-center"}>
                        <Pagination
                            activePage={curpage}
                            itemsCountPerPage={20}
                            totalItemsCount={count}
                            pageRangeDisplayed={5}
                            prevPageText={"‹"}
                            nextPageText={"›"}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>

            </main>
        </div>

        </Fragment>
    )
}
export default CampList