import { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../ApiServices";

export function Login() {
    const navigate = useNavigate();
    const [formData, setformData] = useState({});

    const handleFieldChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData);
            if (response.status == 200) {
                alert('Logged In Successfully');
                let data = JSON.stringify({
                    token: response.data.token,
                    userId: response.data.userId,
                    email: response.data.email,
                    name: response.data.name,
                });
                localStorage.setItem('loggedInUser', data);
                navigate('/');
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
            alert("Failed to login. Try again!");
        }
    }

    return (
        <>
            <Container className="d-flex justify-content-center" style={{ position: "relative", top: 100 }}>
                <Paper elevation={6} className="p-3">
                    <h4 className="ms-3">Login</h4>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            className="p-2 mt-1"
                            style={{ width: "250px" }}
                            id="outlined-error"
                            label="Mobile Number"
                            name="mobileNumber"
                            type="number"
                            onChange={handleFieldChange}
                        /><br></br>
                        <TextField
                            className="p-2 mt-1"
                            style={{ width: "250px" }}
                            id="outlined-error"
                            label="Password"
                            name="password"
                            type="password"
                            onChange={handleFieldChange}
                        /><br></br>
                        <Button type="submit" fullWidth variant="contained">Login</Button>
                    </form>
                    <Button fullWidth variant="outlined" className="mt-2" onClick={() => navigate("/register")}>Register</Button>
                </Paper>
            </Container>

        </>
    )
}