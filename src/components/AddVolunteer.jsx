import { useState } from "react";
import axios from "axios";

const AddVolunteer = () => {

    const [input, changeInput] = useState({

        volunteerId: "",
        volunteerName: "",
        gender: "",
        department: "",
        semester: "",
        phone: "",
        email: "",
        bloodGroup: "",
        activityName: "",
        activityDate: "",
        hoursCompleted: "",
        coordinatorName: "",
        certificateStatus: ""

    })

    const [message, setMessage] = useState("")

    const inputHandler = (event) => {

        changeInput({

            ...input,
            [event.target.name]: event.target.value

        })

    }

    const readValues = () => {

        axios.post("http://localhost:3000/add-volunteer", input).then(

            (response) => {

                setMessage(response.data.message)

                changeInput({

                    volunteerId: "",
                    volunteerName: "",
                    gender: "",
                    department: "",
                    semester: "",
                    phone: "",
                    email: "",
                    bloodGroup: "",
                    activityName: "",
                    activityDate: "",
                    hoursCompleted: "",
                    coordinatorName: "",
                    certificateStatus: ""

                })

            }

        ).catch(

            () => {

                setMessage("Something went wrong")

            }

        )

    }

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-success text-white">

                    <h3 className="text-center">
                        Add Volunteer
                    </h3>

                </div>

                <div className="card-body">

                    {
                        message !== "" &&
                        <div className="alert alert-info">
                            {message}
                        </div>
                    }

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label>Volunteer ID</label>
                            <input type="text" className="form-control" name="volunteerId" value={input.volunteerId} onChange={inputHandler} />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Volunteer Name</label>
                            <input type="text" className="form-control" name="volunteerName" value={input.volunteerName} onChange={inputHandler} />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Gender</label>
                            <input type="text" className="form-control" name="gender" value={input.gender} onChange={inputHandler} />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Department</label>
                            <input type="text" className="form-control" name="department" value={input.department} onChange={inputHandler} />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Semester</label>
                            <input type="text" className="form-control" name="semester" value={input.semester} onChange={inputHandler} />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Phone</label>
                            <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Blood Group</label>
                            <input type="text" className="form-control" name="bloodGroup" value={input.bloodGroup} onChange={inputHandler} />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Activity Name</label>
                            <input type="text" className="form-control" name="activityName" value={input.activityName} onChange={inputHandler} />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Activity Date</label>
                            <input type="date" className="form-control" name="activityDate" value={input.activityDate} onChange={inputHandler} />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Hours Completed</label>
                            <input type="number" className="form-control" name="hoursCompleted" value={input.hoursCompleted} onChange={inputHandler} />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Coordinator Name</label>
                            <input type="text" className="form-control" name="coordinatorName" value={input.coordinatorName} onChange={inputHandler} />
                        </div>

                        <div className="col-md-12 mb-3">
                            <label>Certificate Status</label>
                            <input type="text" className="form-control" name="certificateStatus" value={input.certificateStatus} onChange={inputHandler} />
                        </div>

                        <div className="col-md-12 text-center">

                            <button
                                className="btn btn-success me-2"
                                onClick={readValues}
                            >
                                Register Volunteer
                            </button>

                            <button
                                className="btn btn-secondary"
                                onClick={() => window.location.reload()}
                            >
                                Reset
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default AddVolunteer