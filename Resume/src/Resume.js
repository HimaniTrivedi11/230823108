import React from "react";
import pic1 from './images/pic1.jpg';
function Resume(props)
{
    return(
        <>
            <div className="container">
                <div className="row">
                     {/* Left column */}
                    <div className="col-8">
                        <h1 style={{"fontSize":"30px","color":"#24435c","marginTop":"20px"}}>JAMES MOORE</h1>
                        <h3 style={{"fontSize":"22px","color":"#5dbbff","marginTop":"-12px"}}>Experienced Project Manager</h3>
                        <p style={{"fontSize":"13px","marginTop":"-5px"}}>&#128222; +1000 *** *** |  @jamesmoore@gmail.com</p>
                        <p style={{"fontSize":"13px","marginTop":"-15px"}}>&#128279; https://www.linkedin.com/james-moore  |  &#x1F4CD; New York City, NY</p>
                
                        <h3 style={{"marginTop":"35px"}}>SUMMARY</h3>
                        <hr style={{"marginTop":"5px"}}></hr>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <div>
                        <h3 style={{"marginTop":"25px"}}>EXPERIENCE</h3>
                        <hr style={{"marginTop":"-5px"}}></hr>

                        <div>
                            <h3 style={{"color":"#24435c","fontSize":"25px","marginTop":"-8px"}}>Senior IT Product Manager</h3>
                            <p style={{"float":"right","marginTop":"-30px","marginRight":"20px"}}>02/2019 - Ongoing</p>
                            <h4 style={{"fontSize":"22px","color":"#5dbbff","marginTop":"-5px"}}>Rover Games</h4>
                            <p style={{"float":"right","marginTop":"-30px","marginRight":"20px"}}>San Francisco, CA</p>
                            <p style={{"marginTop":"10px"}}>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <ul style={{"marginTop":"-13px"}}>
                                <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </li>
                                <li>1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </li>
                                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </li>
                            </ul>
                        </div>

                        <div>
                            <h3 style={{"color":"#24435c","fontSize":"25px"}}>Project Manager</h3>
                            <p style={{"float":"right","marginTop":"-30px","marginRight":"20px"}}>2012 - 2019</p>
                            <h4 style={{"fontSize":"22px","color":"#5dbbff","marginTop":"-2px"}}>Tesla</h4>
                            <p style={{"float":"right","marginTop":"-35px","marginRight":"20px"}}>Los Angeles, CA</p>
                            <p style={{"marginTop":"-5px"}}>Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                            <ul style={{"marginTop":"-15px"}}>
                                <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </li>
                                <li>1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </li>
                            </ul>
                        </div>

                        <div>
                            <h3 style={{"color":"#24435c","fontSize":"25px"}}>Project Coordinator</h3>
                            <h4 style={{"fontSize":"22px","color":"#5dbbff","marginTop":"-3px"}}>Wolf Industry</h4>
                            <p style={{"marginTop":"-8px"}}>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                            <ul style={{"marginTop":"-15px"}}>
                                <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </li>
                                <li>1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </li>
                                <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 style={{"marginTop":"30px","fontSize":"25px"}}>EDUCATION</h3>
                        <hr style={{"marginTop":"5px"}}></hr>

                        <p style={{"fontSize":"20px","color":"#24435c"}}>Industrial Engineering. MSc</p>
                        <p style={{"float":"right","marginTop":"-40px","marginRight":"20px"}}>2000 - 2002</p>
                        <p style={{"fontSize":"20px","color":"#5dbbff","marginTop":"-15px","fontWeight":"bold"}}>University of California, Berkeley</p>
                        <p style={{"fontSize":"20px","color":"#24435c"}}>Industrial Engineering. BSc</p>
                        <p style={{"float":"right","marginTop":"-40px","marginRight":"20px"}}>1996 - 2000</p>
                        <p style={{"fontSize":"20px","color":"#5dbbff","marginTop":"-15px","fontWeight":"bold"}}>University of California, Berkeley</p>
                    </div>

                    <div>
                        <p style={{"marginTop":"100px"}}>Powered by  &#x221e; Enhancv</p>
                        <p style={{"float":"right","marginTop":"-40px","marginRight":"20px"}}>www.enhancv.com</p>
                    </div>
                </div>
            </div>
                    {/* Right column */}
                    <div className="col-4" style={{"backgroundColor":"#013A63", "height": "1550px","marginTop":"-1547px","float":"right","marginRight":"-3px"}}>
                            <div>
                                <img src={pic1} style={{"borderRadius":"50%","backgroundColor":"white","width":"150px","height":"150px","marginLeft":"108px","marginTop":"25px"}}/>

                                <h5 style={{"color":"white","marginTop":"35px","marginLeft":"32px"}}>STRENGTHS</h5>
                                <hr style={{"border":"2px solid white","marginTop":"3px","width":"70%","marginLeft":"32px"}} className="hr-70-percent"></hr>

                                <div className='row'>
                                    <div className='col-11'>
                                        <h4  style={{"color":"white","fontSize":"23px","marginLeft":"32px"}}>&#x2605;	 Strategic Planner</h4>
                                        <p style={{"color":"white","marginLeft":"32px","fontSize":"15px"}}> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </p>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-11'>
                                        <h4  style={{"color":"white","fontSize":"23px","marginLeft":"32px"}}>&#x2606;	 Flexible</h4>
                                        <p style={{"color":"white","marginLeft":"32px","fontSize":"15px"}}> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </p>
                                    </div>
                                </div>

                                <h5 style={{"color":"white","marginTop":"3px","marginLeft":"32px"}}>ACHIEVEMENTS</h5>
                                <hr style={{"border":"2px solid white","marginTop":"3px","width":"70%","marginLeft":"32px"}} className="hr-70-percent"></hr>

                                <div className='row'>
                                    <div className='col-11'>
                                        <h5  style={{"color":"white","fontSize":"20px","marginLeft":"32px"}}>&#128142;	 Cost Saving of $100M</h5>
                                        <p style={{"color":"white","marginLeft":"32px","fontSize":"15px"}}> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </p>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-11'>
                                        <h5  style={{"color":"white","fontSize":"20px","marginLeft":"32px"}}>📈	 Exceeded throughput target by 90%</h5>
                                        <p style={{"color":"white","marginLeft":"32px","fontSize":"15px"}}> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </p>
                                    </div>
                                </div>

                                <h5 style={{"color":"white","marginTop":"-5px","marginLeft":"32px"}}>SKILLS</h5>
                                <hr style={{"border":"2px solid white","marginTop":"3px","width":"70%","marginLeft":"32px"}} className="hr-70-percent"></hr>

                                <p style={{"color":"white","marginTop":"15px","marginLeft":"32px","marginTop":"-12px"}}>Product Development | Scrum | SQL </p>

                                <p style={{"color":"white","marginTop":"15px","marginLeft":"32px","marginTop":"-12px"}}>Tableau | JIRA |</p>

                                <p style={{"color":"white","marginTop":"15px","marginLeft":"32px","marginTop":"-12px"}}>Stakeholder Management</p>

                                <h5 style={{"color":"white","marginTop":"35px","marginLeft":"32px"}}>LANGUAGES</h5>
                                <hr style={{"border":"2px solid white","marginTop":"3px","width":"70%","marginLeft":"32px"}} className="hr-70-percent"></hr>
                                
                                <h4 style={{"color":"white","marginTop":"1px","marginLeft":"32px","fontSize":"17px"}}>English</h4>
                                
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} style={{ "height": "5px","width":"70%","marginLeft":"32px" }}>
                                    <div className="progress-bar" style={{ "width": "55%" }} />
                                </div><br/>

                                <h4 style={{"color":"white","marginTop":"-12px","marginLeft":"32px","fontSize":"17px"}}>Spanish</h4>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} style={{ "height": "5px" ,"width":"70%","marginLeft":"32px"}}>
                                    <div className="progress-bar" style={{ "width": "35%" }} />
                                </div><br/>

                                <h4 style={{"color":"white","marginTop":"-12px","marginLeft":"32px","fontSize":"17px"}}>German</h4>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} style={{ "height": "5px","width":"70%","marginLeft":"32px" }}>
                                    <div className="progress-bar" style={{ "width": "65%" }} />
                                </div>

                                <h5 style={{"color":"white","marginTop":"35px","marginLeft":"32px"}}>PASSIONS</h5>
                                <hr style={{"border":"2px solid white","marginTop":"3px","width":"70%","marginLeft":"32px"}} className="hr-70-percent"></hr>

                                <p  style={{"color":"white","fontSize":"16px","marginLeft":"32px"}}>&#10084;	Family</p>
                                <p  style={{"color":"white","fontSize":"16px","marginLeft":"32px","marginTop":"10px"}}>&#127939;	Runner</p>
                                <p  style={{"color":"white","fontSize":"16px","marginLeft":"32px","marginTop":"10px"}}>&#127900;	Composing music</p>
                            </div>
                    </div>
            </div>
        </>
    );
}

export default Resume;
