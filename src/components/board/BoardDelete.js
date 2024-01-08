import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Fragment} from "react";

function BoardDelete(){
    const {no}=useParams()
    const nav=useNavigate()
    const DelClick=()=>{
        axios.post("http://localhost/board/board_delete_react",null,{
            params:{
                no:no
            }
        }).then(result=>{
            window.location.href="/board/board_list"
            // sendRedirect()  this.location.href
        })

    }
    return(
        <Fragment>
            <div className={"wrapper bgded overlay"} style={{"backgroundImage":"url('/images/demo/backgrounds/camping2.jpg')"}}>
                <div id="breadcrumb" className="hoc clear">

                </div>
            </div>
            <div className="wrapper row3">
                <main className="hoc container clear">
                    <h2 style={{"color":"black"}} className={"text-center"}>삭제하기</h2>
                    <div className={"row"}  style={{"width":"500px","margin":"0px auto"}}>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <th width={"15%"} className={"text-center"}>비밀번호</th>
                                <td width={"85%"}>
                                    <input type={"password"} size={"60"} className={"input-sm"}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={"2"} className={"text-center"}>
                                    <button className={"btn btn-sm btn-info"}
                                            onClick={DelClick}>수정</button>&nbsp;
                                    <a href={"#"}  onClick={()=>nav(-1)} className={"btn btn-sm btn-info"}>목록</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </Fragment>
    )
}
export default BoardDelete