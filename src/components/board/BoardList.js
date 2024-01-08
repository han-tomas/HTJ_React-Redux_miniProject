import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function BoardList(){
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
    const [boardList,setBoardList]=useState([])
    const [startPage,setStartPage]=useState(0)
    const [endPage,setEndPage]=useState(0)
    useEffect(()=>{
        axios.get('http://localhost/board/board_list_react',{
            params:{
                page:curpage
            }
        }).then(response=>{
            setBoardList(response.data)
        }).catch(error=>{
            console.log(error.response)
        })

        //페이지
        axios.get('http://localhost/board/board_page_react',{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setCurpage(response.data.curpage)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        }).catch(error=>{
            console.log(error.response)
        })
    },[])
    const html=boardList.map((c)=>
        <tr key={c.no}>
            <td className={"text-center"} style={{"color":"black"}}>{c.no}</td>
            <td style={{"color":"black"}}><NavLink to={"/board/board_detail/"+c.no}>{c.subject}</NavLink></td>
            <td className={"text-center"} style={{"color":"black"}}>{c.name}</td>
            <td className={"text-center"} style={{"color":"black"}}>{c.regdate}</td>
            <td className={"text-center"} style={{"color":"black"}}>{c.hit}</td>
        </tr>
    )
    const pages=(page)=>{
        axios.get('http://localhost/board/board_list_react',{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setBoardList(response.data)
        }).catch(error=>{
            console.log(error.response)
        })
        axios.get('http://localhost/board/board_page_react',{

            params:{

                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setCurpage(response.data.curpage)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        }).catch(error=>{
            console.log(error.response)
        })
    }

    const pageChange=(page)=>{
        pages(page)
    }
    const pagePrev=()=>{
        pages(startPage-1)
    }
    const pageNext=()=>{
        pages(endPage+1)
    }

    let row=[]
    if(startPage>1)
    {
        row.push(<li><a href={"#"} onClick={()=>pagePrev(startPage>1?startPage-1:startPage)}>&laquo; Previous</a></li>)
    }
    for(let i=startPage;i<=endPage;i++)
    {
        if(i===curpage)
        {
            row.push(<li className={"current"}><a href={"#"} onClick={()=>pageChange(i)}>{i}</a> </li>)
        }
        else
        {
            row.push(<li><a href={"#"} onClick={()=>pageChange(i)}>{i}</a> </li>)
        }
    }
    if(endPage<totalpage)
    {
        row.push(<li><a href={"#"} onClick={()=>pageNext(endPage<totalpage?endPage+1:endPage)}>Next &raquo;</a></li>)
    }
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
                            <td className={"text-right"}>
                                <NavLink to={"/board/board_insert"} className={"btn btn-sm btn-info"}>새글</NavLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <thead>
                        <tr>
                            <th width="10%" className="text-center">번호</th>
                            <th width="45%" className="text-center">제목</th>
                            <th width="15%" className="text-center">이름</th>
                            <th width="20%" className="text-center">작성일</th>
                            <th width="10%" className="text-center">조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {html}
                    </tbody>
                </table>
                <nav className="pagination">
                    <ul>
                        {row}
                    </ul>
                </nav>
                <div className="clear"></div>
            </main>
        </div>

        </Fragment>
    )
}
export default BoardList