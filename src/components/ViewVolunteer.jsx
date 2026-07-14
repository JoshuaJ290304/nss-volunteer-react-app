import { useEffect, useState } from "react";
import axios from "axios";

const ViewVolunteer = () => {

    const [volunteers, setVolunteers] = useState([]);

    const fetchData = () => {

        axios.post("http://localhost:3000/view-volunteer", {})
        .then((response) => {

            setVolunteers(response.data);

        })
        .catch((error) => {

            console.log(error);

        });

    };

    useEffect(() => {

        fetchData();

    }, []);

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3 className="text-center">
                        View Volunteers
                    </h3>

                </div>

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-bordered table-striped table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>Volunteer ID</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Department</th>
                                    <th>Semester</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Blood Group</th>
                                    <th>Activity</th>
                                    <th>Activity Date</th>
                                    <th>Hours</th>
                                    <th>Coordinator</th>
                                    <th>Certificate</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    volunteers.map(

                                        (value, index) => {

                                            return (

                                                <tr key={index}>

                                                    <td>{value.volunteerId}</td>
                                                    <td>{value.volunteerName}</td>
                                                    <td>{value.gender}</td>
                                                    <td>{value.department}</td>
                                                    <td>{value.semester}</td>
                                                    <td>{value.phone}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.bloodGroup}</td>
                                                    <td>{value.activityName}</td>
                                                    <td>{value.activityDate}</td>
                                                    <td>{value.hoursCompleted}</td>
                                                    <td>{value.coordinatorName}</td>
                                                    <td>{value.certificateStatus}</td>

                                                </tr>

                                            )

                                        }

                                    )

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ViewVolunteer;