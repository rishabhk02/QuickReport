import { Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { registerVehicleComplain } from "../ApiServices";
import Select from 'react-select';

const vehicleTypeOptions = [
    { label: '2-Wheeler', value: '2-Wheeler' },
    { label: '3-Wheeler', value: '3-Wheeler' },
    { label: '4-Wheeler', value: '4-Wheeler' },
    { label: 'Bus', value: 'Bus' },
    { label: 'Truck', value: 'Truck' },
    { label: 'Other', value: 'Other' }
];

export function VehicleFIR() {
    const [formData, setFormData] = useState({});

    const handleFieldChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let reqData = { ...formData };
            reqData['vehicleType'] = reqData['vehicleType']?.value;

            const formDataToSend = new FormData();
            for (const key in reqData) {
                formDataToSend.append(key, reqData[key]);
            }

            const response = await registerVehicleComplain(formDataToSend);
            if (response.status == 201) {
                setFormData({});
                alert("Complain Registered Successfully!")
            }
        }
        catch (error) {
            console.log(error);
            alert('Failed to register complain');
        }
    };

    return (
        <>
            <Container className="mt-5">
                <Alert className="d-flex text-center justify-content-center"><h2 className="text-center">Welcome To BhawarKua PoliceStation</h2></Alert>
                <Paper elevation={2} className="p-5">
                    <h4 style={{ color: "green", paddingLeft: "100px" }}> Fill Correct Details</h4>
                    <form onSubmit={handleSubmit}>
                        <Row >
                            <Col lg={1}></Col>
                            <Col lg={6} sm={1}>
                                <h5 className="mt-3">Vehicle Information</h5>
                                <TextField
                                    type="text"
                                    name="vechicleName"
                                    label="Vehicle Name*"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    onChange={handleFieldChange}
                                />
                                <TextField
                                    type="text"
                                    name="vehicleModelNo"
                                    label="Vehicle Model Number*"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    onChange={handleFieldChange}

                                />
                                <div style={{ "width": "500px", 'zIndex': '10' }}>
                                    <Select
                                        options={vehicleTypeOptions}
                                        value={formData?.vehicleType}
                                        onChange={(e) => {
                                            setFormData((prevData) => ({
                                                ...prevData,
                                                ['vehicleType']: e
                                            }));
                                        }}
                                    >
                                    </Select>
                                </div>
                                <TextField
                                    type="number"
                                    name="vehiclePrice"
                                    label="Vechicle Price*"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    onChange={handleFieldChange}
                                />
                                <TextField
                                    type="file"
                                    name="vehicleImg"
                                    // label="Vehicle Image*"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    accept="image/*"
                                    onChange={handleFieldChange}
                                />
                                <TextField
                                    type="text"
                                    name="ownerName"
                                    label="Owner Name*"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    onChange={handleFieldChange}
                                />
                                <TextField
                                    type="text"
                                    name="ownerContact"
                                    label="Mobile Number*"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    onChange={handleFieldChange}
                                />
                                <h5 className="mt-3">Location</h5>
                                <TextField
                                    type="text"
                                    name="areaOfMissing"
                                    label="Area of Missing*"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    onChange={handleFieldChange}
                                />
                                <TextField
                                    type="time"
                                    name="missingTime"
                                    label="Missing Time"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    onChange={handleFieldChange}
                                />
                                <TextField
                                    type="date"
                                    name="missingDate"
                                    // label="Missing Date*"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    onChange={handleFieldChange}
                                />
                                <TextField
                                    type="text"
                                    name="description"
                                    label="Description"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    onChange={handleFieldChange}

                                />
                                <br></br>
                                <div className="ms-2"><Button variant="contained" type="submit"> Submit</Button> </div>
                            </Col>
                            <Col lg={4}>
                                <h4 className="mt-3">Process</h4>
                                <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>1. Provide accurate details about the stolen vehicle.</Typography>
                                <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>2. Attach a clear image of the stolen vehicle.</Typography>
                                <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>3. Include information about the location and time of the incident.</Typography>
                                <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>4. Provide a detailed description of the incident.</Typography>
                                <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>5. Submit the report for further processing.</Typography>
                                <hr></hr>
                                <h4 className="mt-3" style={{ color: "red" }}>प्रक्रिया</h4>
                                <Typography style={{ fontSize: "15px", color: "red" }}>1. चोरी हुए वाहन के बारे में सटीक विवरण प्रदान करें।</Typography>
                                <Typography style={{ fontSize: "15px", color: "red" }}>2. चोरी हुए वाहन का स्पष्ट चित्र अटैच करें।</Typography>
                                <Typography style={{ fontSize: "15px", color: "red" }}>3. घटना के स्थान और समय के बारे में जानकारी शामिल करें।</Typography>
                                <Typography style={{ fontSize: "15px", color: "red" }}>4. घटना का विस्तृत विवरण प्रदान करें।</Typography>
                                <Typography style={{ fontSize: "15px", color: "red" }}>5. रिपोर्ट को और प्रोसेसिंग के लिए सबमिट करें।</Typography>
                            </Col>
                        </Row>
                    </form>
                </Paper>
            </Container>
        </>
    )
}