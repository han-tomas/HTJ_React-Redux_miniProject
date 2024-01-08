function Footer(){
    return(
        <div className="wrapper row4">
            <footer id="footer" className="hoc clear">

                <div className="one_third first">
                    <h2  className="logoname"><span>Camping</span>React</h2>
                    <p className="btmspace-30">Sem nam et erat nec eros elementum gravida proin bibendum diam sed congue sagittis metus risus rutrum mauris sed euismod nisl purus vel leo phasellus nunc erat cursus aliquet [<a href="#">&hellip;</a>]</p>
                    <ul className="faico clear">
                        <li><a className="faicon-dribble" href="#"><i className="fab fa-dribbble"></i></a></li>
                        <li><a className="faicon-facebook" href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a className="faicon-google-plus" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a className="faicon-linkedin" href="#"><i className="fab fa-linkedin"></i></a></li>
                        <li><a className="faicon-twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a className="faicon-vk" href="#"><i className="fab fa-vk"></i></a></li>
                    </ul>
                </div>
                <div className="one_third">
                    <h6 className="heading">Massa hendrerit bibendum</h6>
                    <ul className="nospace linklist">
                        <li><a href="#">Tincidunt vel vulputate egestas</a></li>
                        <li><a href="#">Leo sed porttitor accumsan arcu</a></li>
                        <li><a href="#">Aenean ac urna et leo posuere</a></li>
                        <li><a href="#">Pretium suspendisse ac elit ut</a></li>
                    </ul>
                </div>
                <div className="one_third">
                    <h6 className="heading">Etiam auctor dignissim</h6>
                    <p className="nospace btmspace-15">Leo integer sem nisl mollis ut ornare eu lobortis eget ante mauris tempor.</p>
                    <form method="post" action="#">
                        <fieldset>
                            <legend>Newsletter:</legend>
                            <input class="btmspace-15" type="text" value="" placeholder="Name"/>
                                <input class="btmspace-15" type="text" value="" placeholder="Email"/>
                                    <button type="submit" value="submit">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </footer>
        </div>
    )
}
export default Footer