import React, { useState } from 'react';
import '../../styles/profile.css';
import ProfileUi from 'react-profile-card';
import { Card } from 'react-bootstrap';
import TabSection from './TabComponent';
import { useParams } from'react-router';
import LoadingComponent from '../LoadingComponent';
import demoImage from '../../images/demo-user.jpg';

function LoadProfile({student}) {
   if(student.profile != null){
    return (
        <div className="contents">
            <div className="profiles">
                <div className="profile1">
                    <ProfileUi
                        imgUrl= {demoImage}
                        name={student.profile.name}
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
                                        <p><strong>{student.profile.username}</strong></p>
                                    </div>
                                    <div className="info">
                                        <p class="row-p">Admission Date</p>
                                        <p><strong>{student.profile.admissionDate}</strong></p>
                                    </div>
                                    <div className="info">
                                        <p class="row-p">Phone Number</p>
                                        <p><strong>{student.profile.phoneNumber}</strong></p>
                                    </div>
                                </div>
                                <div class="infotable"><hr /></div>
                                <div class="row-1 infotable">
                                    <div className="info">
                                        <p class="row-p">Email</p>
                                        <p><strong>{student.profile.email}</strong></p>
                                    </div>
                                    <div className="info">
                                        <p class="row-p" >Degree</p>
                                        <p><strong>{student.profile.degree}</strong></p>
                                    </div>
                                    <div className="info">
                                        <p class="row-p">Branch</p>
                                        <p><strong>{student.profile.branch}</strong></p>

                                    </div>
                                </div>

                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="content1">
                <TabSection student = {student} />
            </div>
        </div>
    );
   } 
   else if(student.errMess){
       return(
           <h2>{student.errMess}</h2>
       );
   }
   else {
       return(
            <LoadingComponent />
       );
   }
}

function Profiles(props) {
    var { studentId } = useParams();
    if (!props.student.errMess && !props.student.isLoading) {
        if(props.student.profile == null)
            props.loadStudentProfile(studentId);
        else if(props.student.profile._id != studentId)
            props.loadStudentProfile(studentId);
    }
    const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);

    const [profileClick, setprofileClick] = React.useState(false);
    // const handleProfileClick = () => setprofileClick(!profileClick);
    return (
            <LoadProfile student = {props.student} />
    );
}

export default Profiles;