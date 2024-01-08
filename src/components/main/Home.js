import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCampHome} from "../../actions/campActions";

function Home(){
    const dispatch =useDispatch()

    // 데이터 읽기
    useEffect(()=>{
       dispatch(fetchCampHome)
    },[])
    const campList=useSelector((state)=>state.camps.camp_list)
    const html=campList.slice(0, 6).map((c)=>

            <li className="one_third">
                <figure><NavLink to={"/camp/camp_detail/"+c.cno}><img src={c.image} alt="" style={{"width":"400px","height":"250px"}}/></NavLink>
                    <figcaption>
                        <h6 className="heading">{c.name}</h6>
                        <p>{c.address}</p>
                    </figcaption>
                </figure>
            </li>

    )
    return(
        <Fragment>
        <div className="wrapper bgded overlay" style={{"backgroundImage":"url('images/demo/backgrounds/camping.jpg')"}}>
            <div id="pageintro" className="hoc clear">
                <article>
                    <p>자연과 함께하는 휴식</p>
                    <h3 className="heading">최상의 캠핑 경험을 선사합니다</h3>
                    <p>탁 트인 하늘 아래, 즐거운 추억을 만들어보세요.</p>
                    <footer><NavLink className="btn" to={"/camp/camp_list"}>캠핑장 검색 바로가기</NavLink></footer>
                </article>
            </div>
        </div>
        <div className="wrapper row3" style={{"backgroundColor":"#A0522D"}}>
            <main className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading">Let's Go Camping !</h6>
                    <p>캠핑장에 대한 상세한 정보를 한눈에 확인해보세요</p>
                </div>
                <ul className="nospace group overview">
                    {html}
                </ul>
                <div className="clear"></div>
            </main>
        </div>
    </Fragment>
    )
}
export default Home