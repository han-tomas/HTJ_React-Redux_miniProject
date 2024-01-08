import {NavLink} from "react-router-dom";

function Header(){
    return(
        <div className="wrapper row1">
            <header id="header" className="hoc clear">
                <div id="logo" className="one_half first">
                    <h1 className="logoname"><NavLink to={"/"}><span>Camping</span>React</NavLink></h1>
                </div>
                <div className="one_half">
                    <ul className="nospace clear">
                        <li className="one_half first">
                            <div className="block clear"><i className="fas fa-phone"></i> <span><strong className="block">Call Us:</strong> +00 (123) 456 7890</span> </div>
                        </li>
                        <li className="one_half">
                            <div className="block clear"><i className="far fa-clock"></i> <span><strong className="block"> Mon. - Sat.:</strong> 08.00am - 18.00pm</span> </div>
                        </li>
                    </ul>
                </div>
            </header>
            <nav id="mainav" className="hoc clear">
                <ul className="clear">
                    <li className="active"><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/camp/camp_list"}>캠핑 검색</NavLink></li>
                    <li><NavLink to={"/news/news_find"}>뉴스 검색</NavLink></li>
                    <li><NavLink to={"/board/board_list"}>게시판</NavLink></li>

                    
                </ul>
            </nav>
        </div>
    )
}
export default Header