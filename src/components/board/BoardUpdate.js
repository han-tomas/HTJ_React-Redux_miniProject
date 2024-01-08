import {Fragment,useState,useEffect} from "react";
import {NavLink,useNavigate,useParams} from "react-router-dom";
import axios from "axios";

function BoardUpdate(){
    const {no}=useParams()
    const nav=useNavigate()
    const [name,setName]=useState("");
    const [subject,setSubject]=useState("");
    const [content,setContent]=useState("");
    const [pwd,setPwd]=useState("")

    useEffect(()=>{
        axios.get('http://localhost/board/board_detail_react',{
            params:{
                no:no
            }
        }).then(response=>{
            setName(response.data.name)
            setSubject(response.data.subject)
            setContent(response.data.content)
        })
    },[])
    const nameChange=(e)=>{

        setName(e.target.value);

    }
    const subjectChange=(e)=>{

        setSubject(e.target.value);

    }
    const contentChange=(e)=>{

        setContent(e.target.value);

    }
    const pwdChange=(e)=>{

        setPwd(e.target.value);

    }
    const writeClick=()=>{
        axios.post("http://localhost/board/board_update_react",null,{
            params:{
                name:name,
                subject:subject,
                content:content,
                pwd:pwd,
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
                    <h2 style={{"color":"black"}} className={"text-center"}>수정하기</h2>
                    <div className={"row"}  style={{"width":"500px","margin":"0px auto"}}>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <th width={"15%"} className={"text-center"}>이름</th>
                                <td width={"85%"}>
                                    <input type={"text"} size={"60"} className={"input-sm"}
                                           onChange={nameChange} value={name}/>
                                </td>
                            </tr>
                            <tr>
                                <th width={"15%"} className={"text-center"}>제목</th>
                                <td width={"85%"}>
                                    <input type={"text"} size={"60"} className={"input-sm"}
                                           onChange={subjectChange} value={subject}/>
                                </td>
                            </tr>
                            <tr>
                                <th width={"15%"} className={"text-center"}>내용</th>
                                <td width={"85%"}>
                                    <textarea rows={"10"} cols={"56"} onChange={contentChange} value={content}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <th width={"15%"} className={"text-center"}>비밀번호</th>
                                <td width={"85%"}>
                                    <input type={"password"} size={"60"} className={"input-sm"}
                                           onChange={pwdChange} value={pwd}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={"2"} className={"text-center"}>
                                    <button className={"btn btn-sm btn-info"}
                                            onClick={writeClick}>수정</button>&nbsp;
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
export default BoardUpdate