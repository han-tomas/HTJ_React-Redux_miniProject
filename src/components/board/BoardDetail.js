import {Fragment,useState,useEffect} from "react";
import {NavLink, useParams,useNavigate} from "react-router-dom";
import axios from "axios";



function BoardDetail(){
    const {no}=useParams()
    const [boardDetail,setBoardDetail]=useState({})
    const nav=useNavigate();
    useEffect(() => {
        axios.get('http://localhost/board/board_detail_react',{
            params:{
                no:no
            }
        }).then(response=>{
            setBoardDetail(response.data)
        })
    }, [no]);
    return(
        <Fragment>
            <div className={"wrapper bgded overlay"} style={{"backgroundImage":"url('/images/demo/backgrounds/camping2.jpg')"}}>
                <div id="breadcrumb" className="hoc clear">

                </div>
            </div>
            <div className="wrapper row3">
                <main className="hoc container clear">
                    <table className={"table"}>
                        <tbody>
                            <tr>
                                <th width={"20%"}>번호</th>
                                <td width={"30%"}>{boardDetail.no}</td>
                                <th width={"20%"}>작성일</th>
                                <td width={"30%"}>{boardDetail.regdate}</td>
                            </tr>
                            <tr>
                                <th width={"20%"}>이름</th>
                                <td width={"30%"}>{boardDetail.name}</td>
                                <th width={"20%"}>조회수</th>
                                <td width={"30%"}>{boardDetail.hit}</td>
                            </tr>
                            <tr>
                                <th width={"20%"}>제목</th>
                                <td colSpan={"3"}>{boardDetail.subject}</td>
                            </tr>
                            <tr>
                                <td colSpan={"4"}>
                                    <pre style={{"whiteSpace":"pre-wrap","backgroundColor":"white","border":"none"}}>
                                        {boardDetail.content}
                                    </pre>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={"4"} className={"text-right"}>
                                    <NavLink to={"/board/board_update/"+boardDetail.no} className={"btn btn-sm btn-success"}>수정</NavLink>
                                    <NavLink to={"/board/board_delete/"+boardDetail.no} className={"btn btn-sm btn-danger"}>삭제</NavLink>
                                    <a href={"#"}  onClick={()=>nav(-1)} className={"btn btn-sm btn-secondary"}>목록</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        </Fragment>
    )
}
export default BoardDetail