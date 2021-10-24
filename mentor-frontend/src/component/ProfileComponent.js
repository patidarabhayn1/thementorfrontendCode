import React, { useState } from 'react';
import Header from './HeaderComponent';
import styled, { css } from "styled-components";
import '../styles/profile.css';
import ProfileUi from 'react-profile-card';
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import TabSection from './TabComponent';
import NavigationBar from './NavbarComponent';

function Profiles() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [profileClick, setprofileClick] = React.useState(false);
    const handleProfileClick = () => setprofileClick(!profileClick);
    return (
        <div className="app">
            <div className="navss">
                <Header />
            </div>
            <div className="containers">
                <NavigationBar/>
                <div className="contents">

                    <div className="profiles">
                        <div className="profile1">
                            <ProfileUi
                                imgUrl='https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg'
                                name='Rohan Patidar'
                            />
                        </div>
                        <div className="profile2">
                            <Card style={{ width: '100%', height: '100%' }}>
                                <Card.Body>
                                    <Card.Title>Details of student</Card.Title>

                                    <div class="card-collection ">
                                        <div class="row-1 infotable">
                                            <div className="info">
                                                <p class="row-p">Enrollment Number</p>
                                                <p><strong>EN19CS306041</strong></p>
                                            </div>
                                            <div className="info">
                                                <p class="row-p">Admission Date</p>
                                                <p><strong>Feb 24th,2001</strong></p>
                                            </div>
                                            <div className="info">
                                                <p class="row-p">Phone Number</p>
                                                <p><strong>9039392092</strong></p>
                                            </div>
                                        </div>
                                        <div class="infotable"><hr /></div>
                                        <div class="row-1 infotable">
                                            <div className="info">
                                                <p class="row-p">Email</p>
                                                <p><strong>rohanpatidar@gmail.com</strong></p>
                                            </div>
                                            <div className="info">
                                                <p class="row-p" >Degree</p>
                                                <p><strong>Bachelor of technology</strong></p>
                                            </div>
                                            <div className="info">
                                                <p class="row-p">Branch</p>
                                                <p><strong>CSBS</strong></p>

                                            </div>
                                        </div>

                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="content1">
                        <TabSection />
                    </div>
                </div>
            </div>
            <div className="footer">
                <span>@copyright ROHAN PATIDAR</span>
            </div>
        </div>
    );
}

export default Profiles;