import { Button, Paper } from "@mui/material";
import { Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function ReportOnline() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const navigate = useNavigate();

    const handleNavigationVehicle = () => {
        if (!loggedInUser || !loggedInUser.token) {
            navigate("/login");
        }
        else {
            navigate("/vehicleFIR");
        }
    }

    const handleNavigationGeneral = () => {
        if (!loggedInUser || !loggedInUser.token) {
            navigate("/login");
        }
        else {
            navigate("/generalFIR");
        }
    }

    const handleNavigationKidnapping = () => {
        if (!loggedInUser || !loggedInUser.token) {
            navigate("/login");
        }
        else {
            navigate("/kidnappingFIR");
        }
    }

    return (
        <>
            <div className="p-3">
                <Container>
                    <Alert className="text-center">
                        Weloceme To E-FIR
                    </Alert>
                    <Paper elevation={2} className="p-5">
                        <hr></hr>
                        <h3 >E-FIR SERVICE</h3>
                        <hr></hr>
                        <p style={{ color: "black", fontSize: "16px", position: "relative", left: "60px" }}>
                            e-FIR, FIR दर्ज कराने की एक वैकल्पिक सुविधा है, जिसके माध्यम से नागरिक Online ही सम्बंधित थाने को चोरी की घटना के सम्बन्ध में e-FIR के माध्यम से स्वयं ही रिपोर्ट दर्ज कर सकते है|
                            इस सेवा का उपयोग केवल ऐसे वाहन चोरी एवं साधारण चोरी के मामलो में ही किया जा सकता है जिसमे :-
                        </p>
                        <div className="ps-3" style={{ position: "relative", left: "60px" }}>
                            <p style={{ color: "black", fontSize: "16px" }}>
                                1. वाहन चोरी (15 लाख से कम ) हो
                                <Button variant="outlined" className="ms-2 mb-2" onClick={handleNavigationVehicle}>Fir</Button>
                            </p>
                            <p style={{ color: "black", fontSize: "16px" }}>
                                2. सामान्य चोरी (1 लाख से कम ) हो
                                <Button variant="outlined" className="ms-2 mb-2" onClick={handleNavigationGeneral}>Fir</Button>
                            </p>
                            <p style={{ color: "black", fontSize: "16px" }}>
                                3. गुमशुदा व्यक्ति की रिपोर्ट करें
                                <Button variant="outlined" className="ms-2 mb-2" onClick={handleNavigationKidnapping}>Fir</Button>
                            </p>
                            <p style={{ color: "black", fontSize: "16px" }}>
                                4.आरोपी अज्ञात हो, एवं घटना में चोट/बल का प्रयोग न हुआ हो
                                <Button variant="outlined" className="ms-2 mb-2" onClick={handleNavigationGeneral} >Fir</Button>
                            </p>
                        </div>
                    </Paper>
                </Container>
            </div>
        </>
    )
}