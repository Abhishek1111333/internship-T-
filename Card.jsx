import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
const Card = () => {
    return (
        <>
           <div className="text-primary text-center"><h1>The India's Cricket Stadium</h1></div>
            <div className="container-fluid mt-10">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card text-center mt-5">
                            <div className="card-header"><h2>Wankhede</h2></div>
                            <div className="card-body"><img src="https://th.bing.com/th/id/OIP.TYLvkbVN2awfEFVaKZPFxQHaE7?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="wankhade"  align="center" height="250px" width="300px"/>
                                <hr />
                                <br />
                                <p className="justify-content-center">Wankhede Stadium is an international cricket stadium in Mumbai, India. It is owned and operated by Mumbai Cricket Association (MCA) and is the home ground of the Mumbai Indians. It houses the headquarters of MCA, the Board of Control for Cricket in India (BCCI), and the Indian Premier League (IPL).</p></div>

                        </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="card text-center mt-5">
                        <div className="card-header"><h2>ChinnaSwamy</h2></div>
                        <div className="card-body"><img src="https://th.bing.com/th/id/OIP.wKkH5JS-8C5OxgAdyOj6KwHaDg?w=317&h=165&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="ChinnaSwamy" height="250px" width="300px"/>
                        <hr/>
                        <br/>
                        <p className="justify-content-center">The M. Chinnaswamy Stadium is a cricket stadium in Bangalore, Karnataka, India. It is owned by Government of Karnataka and operated by Karnataka State Cricket Association (KSCA). Flanked by the picturesque Cubbon Park, Queen's Road, Cubbon and uptown MG Road, this five-decade-old stadium is situated</p></div>

                    </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="card text-center mt-5">
                        <div className="card-header"><h2>M A Chidambaram</h2></div>
                        <div className="card-body"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/MA_Chidambaram_Stadium_In_the_Night_during_a_CSK_Game.jpg/525px-MA_Chidambaram_Stadium_In_the_Night_during_a_CSK_Game.jpg" alt="M_A_C" height="250px" width="300px"/>
                        <hr/>
                        <br/>
                        <p className="justify-content-center">The stadium is located at Chepauk, a few hundred meters from Marina beach along the Bay of Bengal. The stadium can be accessed from Wallajah Road in the north, Babu Jagjivanram Road in the west and Pycrofts Road in the south. The stadium is connected through the Chennai Metro by the Government Estate station.</p></div>

                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;
