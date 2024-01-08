import {useSelector,useDispatch} from "react-redux";
import {fetchCampDetail} from "../../actions/campActions";
import React,{Fragment,useState,useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";
import {NavLink} from "react-router-dom";
const { kakao } = window;


function CampDetail(){
    const  {cno}=useParams()
    const nav=useNavigate();
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchCampDetail(cno))
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);

        axios.get('http://localhost/camp/camp_detail_react',{
            params:{
                cno:cno
            }
        }).then(response=>{
            var geocoder = new kakao.maps.services.Geocoder();

            geocoder.addressSearch(response.data.address, function(result, status) {

                if (status === kakao.maps.services.Status.OK) {

                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // Place a marker
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    // Display an infowindow with the name of the place
                    var infowindow = new kakao.maps.InfoWindow({
                        content: '<div style="width:150px;text-align:center;padding:6px 0;">' + response.data.name + '</div>'
                    });

                    infowindow.open(map, marker);

                    // Move the center of the map to the position of the result
                    map.setCenter(coords);
                }
        })


        });


    }, [cno])
    const campDetail=useSelector((state)=>state.camps.camp_detail)
    let image=String(campDetail.image)
    const img=image.split("^")
    const html = img.map((m)=>
        <tr className={"text-center"}>
            <td><img src={m} style={{"width":"700px","height":"auto"}}/> </td>
        </tr>
    )
    return(
        <Fragment>
        <div className={"wrapper bgded overlay"} style={{"backgroundImage":"url('/images/demo/backgrounds/camping2.jpg')"}}>
            <div id="breadcrumb" className="hoc clear">

            </div>
        </div>
        <div className={"row"}>
            <div className={"col-md-7"} style={{"height":"1000px","overflowY":"auto"}} >
                <div style={{"height":"10px"}}></div>
                <h2 style={{"marginLeft":"70px"}}>Photos</h2>
                <table className={"table"} >
                    <tbody>

                    {html}

                    </tbody>
                </table>
            </div>
            <div className={"col-md-5"}>
                <div style={{"height":"10px"}} className={"text-right"}>
                    <a href={"#"}  onClick={()=>nav(-1)} className={"btn btn-sm btn-secondary"}>목록</a>
                </div>
                <h2>Information</h2>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <th width={"15%"}>이름</th>
                        <td width={"85%"}>{campDetail.name}</td>
                    </tr>
                    <tr>
                        <th width={"15%"}>주소</th>
                        <td width={"85%"}>{campDetail.address}</td>
                    </tr>
                    <tr>
                        <th width={"15%"}>전화</th>
                        <td width={"85%"}>{campDetail.phone}</td>
                    </tr>
                    <tr>
                        <td colSpan={"2"} className={"text-center"} >
                            <pre style={{"whiteSpace":"pre-wrap","backgroundColor":"white","border":"none"}}>{campDetail.msg}</pre>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div id='myMap' style={{
                    width: '600px',
                    height: '300px'
                }}></div>
            </div>
        </div>
        </Fragment>
    )
}
export default CampDetail