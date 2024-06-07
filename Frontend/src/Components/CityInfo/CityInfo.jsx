import '../../App.css';
import { Button, Card, CardActions, CardMedia, Icon, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getDepartementData } from "../ApiServices";
import { useNavigate } from "react-router-dom";

const eve1 = new URL("../../Images/CityInfoImages/eve1.jpg", import.meta.url);
const eve2 = new URL("../../Images/CityInfoImages/eve2.png", import.meta.url);
const eve3 = new URL("../../Images/HomeCarouselImage/carouselImage3.jpg", import.meta.url);
const eve4 = new URL("../../Images/CityInfoImages/eve4.jpg", import.meta.url);
const eve5 = new URL("../../Images/CityInfoImages/eve5.png", import.meta.url);
const IAS = new URL("../../Images/CityInfoImages/IASIndore.jpg", import.meta.url);

export function CityInfo() {
  const [index, setIndex] = useState(0);
  const [cityData, setCityData] = useState([]);
  const [noticedata, setnoticeData] = useState([]);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  
  const handleNotice = (cityData) => {
    navigate("/notice", { state: { cityData: cityData } })
    console.log(cityData);

  }
  return (
    <>
      <div className="homeDiv" style={{ width: "100%", backgroundColor: "white" }}>
        <div>
          <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            <CarouselItem>
              <img src={eve1}
                className="d-block w-100"
                height="350"
                alt="#"
              />
            </CarouselItem>
            <CarouselItem>
              <img src={eve2}
                className="d-block w-100"
                height="350"
                alt="#"
              />
            </CarouselItem>
            <CarouselItem>
              <img src={eve3}
                className="d-block w-100"
                height="350"
                alt="#"
              />
            </CarouselItem>
            <CarouselItem>
              <img src={eve4}
                className="d-block w-100"
                height="350"
                alt="#"
              />
            </CarouselItem>
            <CarouselItem>
              <img src={eve5}
                className="d-block w-100"
                height="350"
                alt="#"
              />
            </CarouselItem>
          </Carousel>
        </div>

        <Container className="mt-5">
          <Row>
            <Col lg={5} className="ms-5 m-2">
              <div>
                <h1 className="mt-4">About District</h1>
                <div style={{ border: "1px solid grey" }} className="p-3">
                  <p style={{ fontSize: "14px", color: "black" }}>{cityData.dis}</p>
                  <Button className="pe-4 pb-4">View More About District</Button>
                </div>
                <h1 className="mt-4">AT A GLANCE</h1>
                <div className="p-3">
                  <Row>
                    <Col lg={6}>
                      <div className="d-flex">
                        <h4>Area :</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{cityData.area}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Language :</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{cityData.language}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Male :</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{cityData.totalMale}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Muncipal Corporation -</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{cityData.muncipalco}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Tehsil -</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{cityData.totaltehsil}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Police Stations -</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{49}</p>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="d-flex">
                        <h4>Population :</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{cityData.population}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Villages :</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{cityData.totalvillages}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Female :</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{cityData.totalfemale}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Nagar Parisad -</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{cityData.totalnagarparisad}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Blocks -</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{cityData.totalblocks}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col lg={3} className="m-2">
              <div>
                <h1 className="mt-4">Events</h1>
                <Paper elevation={2} className="p-3">
                  <h6 className="text-center mt-2" >There is No event</h6>
                </Paper>
                <Paper className="p-3 mt-2">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.90924712364!2d75.7237618214095!3d22.72422842990438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                            1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1595490364420!5m2!1sen!2sin"
                    height="350" sandbox title="Distict Map"
                    allowFullScreen aria-hidden="false" tabIndex="0"
                  ></iframe>
                </Paper>
              </div>
            </Col>

            <Col lg={3} className="m-2">
              <div>
                <h1 className="text-center mt-4">Find Services</h1>
                <div className="ps-3">
                  <h6 style={{ fontSize: "15px" }} className="p-1">
                    <CoronavirusIcon style={{ fontSize: '30px', color: "#0972a8", margin: "5px" }} />
                    Social Security Pension

                  </h6>
                  <h6 style={{ fontSize: "15px" }} className="p-1">
                    <WorkspacePremiumIcon style={{ fontSize: '30px', color: "#0972a8", margin: "5px" }} />
                    Certificates
                  </h6>
                  <h6 style={{ fontSize: "15px" }} className="p-1">
                    <CurrencyRupeeIcon style={{ fontSize: '30px', color: "#0972a8", margin: "5px" }} />
                    Bills
                  </h6>
                  <h6 style={{ fontSize: "15px" }} className="p-1">
                    <AddLocationAltIcon style={{ fontSize: '30px', color: "#0972a8", margin: "5px" }} />
                    LICENCE
                  </h6>
                  <h6 style={{ fontSize: "15px" }} className="p-1">
                    <LocalHospitalIcon style={{ fontSize: '30px', color: "#0972a8", margin: "5px" }} />
                    Hospital Online Services
                  </h6>
                </div>
              </div>
            </Col>
          </Row>

        </Container>
        <div style={{ backgroundColor: '#f2f2f2' }} className="mt-4 p-3">
          <Container>
            <Row>
              <Col lg={4}>
                <Paper elevation={2} style={{ backgroundColor: "#f2f2f2" }} className="p-4">
                  <h3>Notice</h3>
                  <ul style={{ display: "inline-block", listStyleType: "disc", paddingLeft: "10px" }}>
                    {noticedata.map((cityData) => (
                      <li
                        key={cityData.id} // Add a unique key for each list item
                        style={{
                          fontSize: '13px',
                          color: 'black',
                          padding: '5px 10px',
                          cursor: 'pointer',
                          transition: 'background-color 0.3s ease', // Apply a smooth transition
                          backgroundColor: 'f2f2f2', // Initial background color
                        }}
                        onClick={() => handleNotice(cityData)}
                        onMouseEnter={(e) => { e.target.style.backgroundColor = 'skyblue'; }} // Change background on hover
                        onMouseLeave={(e) => { e.target.style.backgroundColor = '#f2f2f2'; }} // Restore background on hover out
                      >
                        <ArrowForwardIosIcon style={{ fontSize: '15px', color: 'black', margin: '5px' }} /> {cityData.title}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outlined">More...</Button>
                </Paper>
              </Col>

              <Col lg={4}>
                <Paper elevation={2} style={{ backgroundColor: "#f2f2f2" }} className="p-4">
                  <h3>INFORMATION</h3>
                  <div>
                    <Button style={{ fontSize: '10px', color: "black" }}>Aadhaar Center operated by MPSEDC in Indore District</Button>
                    <Button style={{ fontSize: '10px', color: "black" }}>Public Relations Department Indore News</Button>
                    <Button style={{ fontSize: '10px', color: "black" }}>Directorate Of Employment</Button><br></br>
                    <Button style={{ fontSize: '10px', color: "black" }}>Helpline</Button><br></br>
                    <Button style={{ fontSize: '10px', color: "black" }}>Nic Service Desk</Button><br></br>
                    <Button style={{ fontSize: '10px', color: "black" }}>District Environmental Plan</Button><br></br>
                    <Button style={{ fontSize: '10px', color: "black" }}>Child Crime</Button><br></br>
                  </div>
                </Paper>
              </Col>

              <Col lg={4}>
                <Card style={{ backgroundColor: "#e9ecef52" }}>
                  <div className="d-flex justify-content-center">
                    <CardMedia
                      component="img"
                      style={{
                        borderRadius: '50%',
                        height: "172px",
                        width: "167px",
                      }}
                      className="img-fluid"
                      image={IAS}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button variant="outlined" style={{ backgroundColor: "bisque", width: "200px", color: "black", position: "relative", bottom: "25px" }}>Shri Asheesh Singh (IAS)</Button>
                  </div>
                  <hr />
                  <CardActions className="d-flex justify-content-center" style={{ position: "relative", bottom: '10px' }}>
                    <Button variant="outlined" style={{ borderColor: "#ee8406e8", width: "300px", color: "#ee8406e8" }}>
                      Profile
                      <Icon style={{ overflow: "visible" }}><SkipNextIcon style={{ position: "relative", bottom: "7px", left: "15px" }} /></Icon>
                    </Button>
                    <Button variant="outlined" style={{ borderColor: "#ee8406e8", width: "300px", color: "#ee8406e8" }}>
                      Contact
                      <Icon style={{ overflow: "visible" }}><SkipNextIcon style={{ position: "relative", bottom: "7px", left: "15px" }} /></Icon>
                    </Button>
                  </CardActions>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ width: "100%", backgroundColor: "black" }} className="p-4"><h3 className="text-center" style={{ color: "white" }}>@copyRight</h3></div>
      </div>
    </>
  )
}