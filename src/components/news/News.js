import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import {fetchNews} from "../../actions/campActions";

function News(){
    const dispatch=useDispatch()
    const [fd,setFd]=useState('캠핑')

    useEffect(() => {
        dispatch(fetchNews(fd))
    }, []);
    const findBtn=()=>{
        dispatch(fetchNews(fd))
    }
    const newsChange=(e)=>{
        setFd(e.target.value)
    }
    const newsList=useSelector((state)=>state.camps.news_data)
    let html=newsList.map((news)=>

        <table className={"table"}>
            <tbody>
            <tr>
                <td><a href={news.link} target={"_blank"}><h3 style={{"color":"orange"}} dangerouslySetInnerHTML={{__html:news.title}}></h3></a> </td>
            </tr>
            <tr>
                <td dangerouslySetInnerHTML={{__html:news.desc}} style={{"color":"black"}}></td>
            </tr>
            <tr>
                <td className={"text-right"}>{news.pubdate}</td>
            </tr>
            </tbody>
        </table>
    )
    return(
        <Fragment>
            <div className={"wrapper bgded overlay"} style={{"backgroundImage":"url('/images/demo/backgrounds/camping2.jpg')"}}>
                <div id="breadcrumb" className="hoc clear">

                </div>
            </div>
            <div className="wrapper row3">
                <main className="hoc container clear">
                    <h1 style={{"color":"black"}}>뉴스 검색</h1>
                    <div className={"row"}  style={{"width":"1000px","margin":"auto 0px"}}>
                        <table className={"table"}>
                            <tr>
                                <td >
                                    <input type="text" style={{ color: 'black' }} size={25} value={fd} onChange={newsChange}/>
                                    <input type={"button"} style={{"backgroundColor":"#E2921A","borderColor":"#E2921A"}} value={"검색"}
                                           onClick={findBtn} />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div style={{"height":"10px"}}></div>
                    <div className={"row"}  style={{"width":"1000px","margin":"auto 0px"}}>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <td>
                                    {html}
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
export default News