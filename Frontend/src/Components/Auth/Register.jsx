import { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { register } from "../ApiServices";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const mppolice = new URL("../../Images/mppolice.png", import.meta.url);

export function Register() {
  const navigate = useNavigate();
  const [formData, setformData] = useState({});

  const handleFieldChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData);
      if (response.status == 201) {
        alert("Otp sent to your registered mobile number");
        navigate("/verify", { state: { mobileNumber: formData.mobileNumber } });
      }
    }
    catch (error) {
      console.log(error);
      alert(error);

    }
  }
  return (
    <>
      <div className="my-4 d-flex justify-content-center" style={{ position:"relative", top: 40, width: "100%" }} >
        <Container>
          <Row>
            <Col lg={2}></Col>
            <Col lg={5} className="ps-0 pe-0">
              <Paper elevation={6} className="ps-0 pe-0">
                <img src={mppolice}
                  alt="#"
                  width="100%"
                  height="620"
                />
              </Paper>
            </Col>
            <Col lg={5} className="ps-0">
              <Paper elevation={6} className="p-3" style={{ backgroundColor: "rgb(108 78 78 / 24%)" }}>
                <div className="ms-3">
                  <h1>Register</h1>
                  <p>Please enter your details...</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <TextField
                    className="p-2"
                    fullWidth
                    id="outlined-error"
                    label="Full Name"
                    name="name"
                    type="text"
                    onChange={handleFieldChange}
                  />

                  <TextField
                    className="p-2"
                    fullWidth
                    id="outlined-error"
                    label="Mobile Number"
                    name="mobileNumber"
                    type="number"
                    onChange={handleFieldChange}
                  />

                  <TextField
                    className="p-2"
                    fullWidth
                    id="outlined-error"
                    label="Email"
                    name="email"
                    type="email"
                    onChange={handleFieldChange}
                  />

                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Female"
                      name="gender"
                      onChange={handleFieldChange}
                    >
                      <FormControlLabel value="Female" control={<Radio />} label="Female" />
                      <FormControlLabel value="Male" control={<Radio />} label="Male" />
                      <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                  </FormControl>

                  <TextField
                    className="p-2"
                    fullWidth
                    id="outlined-error"
                    label="Age"
                    name="age"
                    type="number"
                    onChange={handleFieldChange}
                  />

                  <TextField
                    className="p-2"
                    fullWidth
                    id="outlined-error"
                    label="Address"
                    name="address"
                    type="text"
                    onChange={handleFieldChange}
                  />

                  <TextField
                    className="p-2"
                    fullWidth
                    id="outlined-error"
                    label="City"
                    name="city"
                    type="text"
                    onChange={handleFieldChange}
                  />

                  <TextField
                    className="p-2"
                    fullWidth
                    id="outlined-error"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={handleFieldChange}
                  />
                  <Button type="submit" className="ms-2" variant="contained">Submit</Button>
                  <Button className="ms-2" variant="outlined" onClick={() => navigate('/login')}>Login</Button>
                </form>
              </Paper>
            </Col>

            <Col lg={2}></Col>


          </Row>



        </Container>
      </div>
    </>
  )
}