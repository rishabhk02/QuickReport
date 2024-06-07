// import styled from "@emotion/styled";
import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
const Img1 = new URL('../../Images/HomeCarouselImage/carouselImage1.jpg', import.meta.url);
const Img2 = new URL('../../Images/policecarousal2.jpeg', import.meta.url);
const Img3 = new URL('../../Images/policecarousal3.jpeg', import.meta.url);
const Img4 = new URL('../../Images/policecarousal4.jpeg', import.meta.url);
const Img5 = new URL('../../Images/policecarousal5.jpeg', import.meta.url);
const Img6 = new URL('../../Images/policecarousal6.jpeg', import.meta.url);

const carouselArr = [Img1, Img2, Img3, Img4, Img5, Img6];

export function SuccessStory() {
    const customStyle = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500
    };

    return (
        <>
            <div className="p-3" style={{ backgroundColor: "white" }}>
                <Container>
                    <h1 style={{ paddingInlineStart: "4px", paddingBottom: "8px" }} className="m-1">Success Story</h1>
                    <Paper elevation={6} className="p-5" style={{ backgroundColor: "#ffc1071c" }} >
                        <Slider {...customStyle}>
                            {carouselArr.map((item, index) => (
                                <div key={index}>
                                    <Card sx={{ maxWidth: 245 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={item}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Success Story
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto et, officia repellendus odit commodi quos deserunt eum consequatur dolores earum doloribus voluptatem provident quam autem sunt. Id saepe aut ratione?
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                            ))}
                        </Slider>
                    </Paper>
                </Container>
            </div>
        </>
    )
}