"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export default function Homes() {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [captionVisible, setCaptionVisible] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startSequence = () => {
      setCaptionVisible(true); // Hide captions initially
      interval = setInterval(() => {
        setShowFirstImage((prev) => !prev); // Toggle images
        setTimeout(() => setCaptionVisible(true), 1500); // Show captions after 500ms
      }, 6000); // Switch images every 5 seconds
    };

    startSequence();

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const services = [
    {
      id: 1,
      title: "Low Code Development",
      imgSrc: "/images/bg/low code.png",
      description:
        "Accelerate application development with low-code platforms for rapid deployment and scalability....",
      link: "~/home/Outsystems",
    },
    {
      id: 2,
      title: "Cloud Services",
      imgSrc: "/images/bg/cloud services.png",
      description:
        "In today's fast-paced digital landscape, businesses need to be agile, scalable, and secure. Our Cloud & DevOps services are ....",
      link: "~/home/CloudService",
    },
    {
      id: 3,
      title: "Application Services",
      imgSrc: "/images/bg/application services.png",
      description:
        "In an era where digital transformation is key, our Application Services are designed to deliver robust...",
      link: "~/home/AppService",
    },
    {
      id: 4,
      title: "Product Engineering",
      imgSrc: "/images/bg/platform service.png",
      description:
        "In today’s fast-paced market, the ability to innovate, develop, and deliver high-quality products is crucial to staying competitive.....",
      link: "#",
    },
    {
      id: 5,
      title: "Data Analytics & AI",
      imgSrc: "/images/bg/data analytics & ai.png",
      description:
        "Harness the power of data and automation to drive smarter decision-making and operational efficiency...",
      link: "~/home/AppService",
    },
    {
      id: 6,
      title: "IT Consulting",
      imgSrc: "/images/bg/it_consulting.png",
      description:
        "Expert advice to help you leverage technology for business growth and digital transformation....",
      link: "#",
    },
  ];

  const data = [
    {
      icon: "icon-gGaLLZ01",
      number: "01",
      title: "Accelerate Development",
      description:
        "OutSystems’ low-code platform significantly reduces the time required to develop applications. With a visual development environment, pre-built templates, and reusable components, your team can focus on solving business problems rather than writing and debugging code.",
    },
    {
      icon: "icon-local_7-1",
      number: "02",
      title: "Enhance Collaboration",
      description:
        "OutSystems promotes collaboration between IT and business teams through its intuitive platform. Consulting partners facilitate this collaboration by providing strategic guidance, aligning development with business goals, and ensuring that all stakeholders are involved in the development process.",
    },
    {
      icon: "icons-analytics",
      number: "03",
      title: "Optimize Costs",
      description:
        "Low-code development with OutSystems reduces the need for extensive coding, which lowers development and maintenance costs. Consulting partners help you maximize ROI by optimizing resource allocation and minimizing time-to-market. They also assist in identifying cost-saving opportunities throughout the development lifecycle.",
    },
    {
      icon: "icons-analytics",
      number: "04",
      title: "Drive Digital Transformation",
      description:
        "We provide strategic insights and innovative solutions tailored to your industry and business needs. By partnering with them, you can effectively drive digital initiatives, streamline operations, and deliver exceptional customer experiences.",
    },
  ];
  return (
    <Fragment>
    <div className={styles.div}>
    
    <div className={styles.slideshowHeader}>
      <div className={styles.imageContainer}>
        {/* First Image */}
        <div
          className={`${styles.imageWrapper} ${
            showFirstImage ? styles.imageFromTop : styles.hidden
          }`}
        >
          <Image
            src="/images/slider/22.png"
            alt="Accelerate Digital Transformation"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div
            className={`${styles.caption} ${
              showFirstImage && captionVisible ? styles.visible : styles.hidden
            }`}
          >
            <h1>
              Strategic OutSystems Partner
              <br />
              With a Decade of Low-Code Expertise.
            </h1>
            <p>
              With ten years of low-code experience, we leverage our strategic
              partnership with OutSystems
              <br />
              to deliver innovative, efficient solutions. Our expertise ensures rapid
              digital transformation,
              <br />
              seamless integration, and enhanced operational efficiency.
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div
          className={`${styles.imageWrapper} ${
            !showFirstImage ? styles.imageFromBottom : styles.hidden
          }`}
        >
          <Image
            src="/images/slider/11.png"
            alt="Strategic OutSystems Partner"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div
            className={`${styles.caption} ${
              !showFirstImage && captionVisible ? styles.visible : styles.hidden
            }`}
          >
            <h1>
              Accelerate Digital Transformation
              <br />
              Through OutSystems Low Code Platform.
            </h1>
            <p>
              OutSystems low-code platform accelerates digital transformation by
              streamlining application
              <br />
              development, enhancing collaboration, and integrating seamlessly with
              existing systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
 <section className={styles.section1}>
        <div className={styles.s1grid}>
            <Typography
              variant="h4"className={styles.s1span}  >
              Harness rapid application development to transcend inertia and move
              at the speed of thought
            </Typography>
            <Typography>
              Every day, with OutSystems low-code development platform we help our
              clients engage with new technology paradigms, creatively building
              solutions that solve their most pressing business challenges and move
              them to the forefront of their industry.
            </Typography>
          </div>
 </section>

 <section className={styles.section2}>
    <div className={styles.row}>
    <div className={styles.leftside}>
    <div className={styles.subTitle}>
      <span className={styles.bleft}></span>Global Experience
    </div>
    <h2 className={styles.secTitle}>
      Transforming Businesses with Low Code Solutions using <span style={{color:"rgb(116,40,148)"}}>OutSystems</span>
    </h2>
    <p className={styles.secDesc}>
      We have successfully delivered customized low-code solutions to clients across diverse industries worldwide, driving impactful digital transformations. Our expertise ensures each solution is tailored to meet specific business needs, resulting in enhanced efficiency, productivity, and innovation in today's fast-paced digital landscape.
    </p>
    <p style={{ marginTop: "5%" }}className={styles.secDesc}>
      From consulting to implementation and support, our comprehensive suite of
      services ensures a seamless journey from concept to deployment and beyond.
      Leverage our extensive knowledge and experience in low code platforms to
      accelerate your digital transformation.
    </p>
  </div>
  <div className={styles.globe}>
    {/* <canvas width="700px" height="550px" className=""></canvas>*/} 
   </div> 
    </div>
    </section>

    <section className={styles.section3}>
  <Container maxWidth="lg" sx={{ py: 5 }}>
    <Grid container spacing={4}>
      {/* Section Title */}
      <Grid item xs={12} md={6}>
        <Box className={styles.s3img}>
          <Typography variant="h6" color="rgb(116,40,148)">
            <Box component="span" ><span className={styles.bleft}></span>
              What we do
            </Box>
          </Typography>
          <Typography variant="h4" gutterBottom>
            We combine the logic, creativity, and curiosity to{" "}
            <Box component="span" color="rgb(116,40,148) " fontWeight="bold">
              build, solve, and create
            </Box>
          </Typography>
        </Box>
      </Grid>
      
      {/* Grid items: 6 items in the same size */}
      {services.map((service, index) => (
  <Grid item xs={12} sm={6} md={3} key={service.id} >
    <Box className={styles.gridItem}
      sx={{
        p: 3,
        mx: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 1,
        width: "200px",
        height: "310px",
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" }, // Slight scale increase on hover
      }}
    >
      {/* Image and Title */}
      <Box sx={{ mb: 2, textAlign: "center" }}>
        <img
          src={service.imgSrc}
          alt={service.title}
          style={{ width: "80px", borderRadius: "5px" }}
        />
      </Box>

      <Typography variant="h6" className={styles.s3Title}>
        <a href={service.link} className={styles.s3Title}>
          {service.title}
        </a>
      </Typography>

      <Typography variant="body2" color="text.secondary" className={styles.s3desc}>
        {service.description}
      </Typography>

      {/* Read More Button */}
      <Button className={styles.button}
        href={service.link}
        variant="contained"
        size="small"
        sx={{
          mt: 2,
          textTransform: "none",
          "&:hover i": { marginLeft: "5px", transition: "margin 0.3s" },
        }}
      >
        Read More <i className="twi-arrow-right1" style={{ marginLeft: "5px" }}></i>
      </Button>
    </Box>
  </Grid>
))}

    </Grid>
  </Container>
</section>
<section className={styles.section4}>
  <Box component="section" sx={{ py: 6, backgroundColor: "#f8f9fa"}}>
    <Container maxWidth="lg">
      <Grid container sx={{ alignItems: "stretch" }} spacing={4}>
        {/* Left Grid for Background Image */}
        <Grid
        item
        xs={12}
        md={4}
        className={styles.backgroundBox}
        sx={{
          position: "relative",
          overflow: "hidden",
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          paddingLeft: 0, // Padding set to 0 for the left side
          marginLeft: 0,
           // Margin set to 0 for the left side
        }}
      >
        <Box 
          sx={{
            position: "relative",
            flexGrow: 1,
          }}
        ></Box>
      </Grid>

        {/* Right Grid for Content */}
        <Grid item xs={12} md={8} >
          <Box>
            {/* Section Header */}
            <Typography
              variant="h6"
              sx={{
                color: "rgb(116,40,148)",
                fontWeight: 500,
                mb: 2,
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  flexGrow: 1,
                  height: "2px",
                  background: "#000",
                  marginRight: "8px",
                }}
              ></span>
              Outsystems
              <span
                style={{
                  flexGrow: 1,
                  height: "2px",
                  background: "#000",
                  marginLeft: "8px",
                }}
              ></span>
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, lineHeight: 1.3 }}>
              Enhance Your Low-Code Innovation with OutSystems
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              In the fast-paced world of digital transformation, businesses need to innovate quickly
              and efficiently to stay competitive. OutSystems provides a powerful low-code platform
              that enables organizations to rapidly develop, deploy, and manage complex applications
              with ease. Here’s how partnering with OutSystems Consulting Partners can enhance your
              low-code innovation:
            </Typography>

            {/* Data Mapping */}
            {data.map((item, index) => (
              <Box
                key={item.number}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  mb: 3,
                  "&:hover .image-circle": {
                    backgroundColor: "rgb(116,40,148)", // Change image circle background to blue
                  },
                  "&:hover .number-circle": {
                    backgroundColor: "white", // Change number circle background to white
                    color: "rgb(116,40,148)", // Change number text color to blue
                  },
                }}
              >
                {/* Image Circle */}
                <Box
                  className="image-circle"
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    backgroundImage: `url('/images/bg/3.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  {/* Number Circle */}
                  <Box
                    className="number-circle"
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      backgroundColor: "rgb(116, 40, 148)",
                      color: "white",
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: 5,
                      left: 5,
                      boxShadow: "0px 2px 4px rgba(0,0,0,0.3)",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                    }}
                  >
                    {item.number}
                  </Box>
                </Box>

                {/* Content */}
                <Box sx={{ ml: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
</section>


</Fragment>
  );
}
