'use client';
import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Layout(){
    const [servicesMenuAnchor, setServicesMenuAnchor] = React.useState(null);
  const [industriesMenuAnchor, setIndustriesMenuAnchor] = React.useState(null);

  const openServicesMenu = (event :any) => {
    setServicesMenuAnchor(event.currentTarget);
  };

  const closeServicesMenu = () => {
    setServicesMenuAnchor(null);
  };

  const openIndustriesMenu = (event : any) => {
    setIndustriesMenuAnchor(event.currentTarget);
  };

  const closeIndustriesMenu = () => {
    setIndustriesMenuAnchor(null);
  };

  return(
    <div style={{position :"sticky"}}  color="default">
      <Toolbar>
        <Grid container alignItems="center" spacing={2}>
          {/* Logo */}
          <Grid item xs={4} md={3}>
            <Link href="/home/index">
                <img src="/images/logonew.png" alt="solverines" className="transparent-logo" style={{ height: '40px' }} />
            </Link>
          </Grid>

          {/* Navigation Menu */}
          <Grid item xs={8} md={6}>
            <Box display="flex" justifyContent="center" gap={2}>
              <Button component={Link} href="/home/index">
                Home
              </Button>
              <Button component={Link} href="/home/Outsystems">
                OutSystems
              </Button>
              <Button onMouseEnter={openServicesMenu}>
                Our Services
              </Button>
              <Menu
                anchorEl={servicesMenuAnchor}
                open={Boolean(servicesMenuAnchor)}
                onClose={closeServicesMenu}
              >
                <MenuItem component={Link} href="/home/Outsystems">Low Code Development</MenuItem>
                <MenuItem component={Link} href="/home/AppService">Cloud Services</MenuItem>
                <MenuItem component={Link} href="/home/AppService">Application Services</MenuItem>
                <MenuItem component={Link} href="/home/AppService">Platform Services</MenuItem>
                <MenuItem component={Link} href="/home/AppService">Data Analytics & AI</MenuItem>
                <MenuItem component={Link} href="/home/AppService">IT Consulting</MenuItem>
              </Menu>
              <Button onClick={openIndustriesMenu}>
                Industries
              </Button>
              <Menu
                anchorEl={industriesMenuAnchor}
                open={Boolean(industriesMenuAnchor)}
                onClose={closeIndustriesMenu}
              >
                <MenuItem>Automotive</MenuItem>
                <MenuItem>Consumer Goods</MenuItem>
                <MenuItem>Financial Services</MenuItem>
                <MenuItem>Healthcare</MenuItem>
                <MenuItem>Logistics</MenuItem>
                <MenuItem>Real Estates</MenuItem>
              </Menu>
              <Button component={Link} href="/home/Contact">
                Contact
              </Button>
            </Box>
          </Grid>

          {/* Contact Info and Search */}
          <Grid item xs={12} md={3}>
            <Box display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
              <Box display="flex" alignItems="center">
                <PhoneIcon />
                <Typography variant="body2" ml={1}>
                  +91 7550042242
                </Typography>
              </Box>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <Box>
                <form action="#" method="post">
                  <TextField
                    size="small"
                    placeholder="Search Here..."
                    variant="outlined"
                    name="s"
                    sx={{ width: 200 }}
                  />
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
};


// 'use client';
// import Link from 'next/link';
// import styles from './layout.module.css';
// import Image from 'next/image';
// import { useEffect } from 'react';
// import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
// import SearchIcon from '@mui/icons-material/Search';
// import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

// export default function Layout() {
//   return (
//     <div >
//       <header className={${styles.header03}}>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className={styles.navbar01}>
//                 <div className={styles.logo}>
//                   <Link href="/index">
//                     <Image
//                       src="/images/logonew1.png"
//                       alt="Quera"
//                       width={250}
//                       height={50}
//                       className={styles.transparentLogo}
//                     />
//                   </Link>
//                 </div>

//                <nav className={styles.mainMenu}>
//                  <ul className={styles.mainMenuList}>  
//                    <li className={styles.mainMenuItem}>
//                    <Link style={{ fontSize: "20px",color: "white"}} className={styles.mainMenuLink} href="/home/index">Home</Link>
//                    </li>
//                    <li className={styles.mainMenuItem}>
//                      <Link style={{ fontSize: "20px",color: "white"}} className={styles.mainMenuLink} href="/home/Outsystems">OutSystems</Link>
//                    </li>
//                    <li className={${styles.menuItemHasChildren} ${styles.mainMenuItem}}>
//                      <Link style={{ fontSize: "20px",color: "white"}} className={styles.mainMenuLink} href="#">Our Services<span><ExpandMoreOutlinedIcon /></span></Link>
//                    <ul className={styles.subMenu}>
//                     <li><a href="~/home/Outsystems">Low Code Development</a></li>
//                     <li><a href="~/home/AppService">Cloud Services</a></li>
//                     <li><a href="~/home/AppService">Application Services</a></li>
//                     <li><a href="~/home/AppService">Platform Services</a></li>
//                     <li><a href="~/home/AppService">Data Analytics &amp; AI</a></li>
//                     <li><a href="~/home/AppService">IT Consulting</a></li>
//                   </ul>
//                    </li>
//                    <li className={${styles.menuItemHasChildren} ${styles.mainMenuItem}}>
//                      <Link style={{ fontSize: "20px",color: "white"}} className={styles.mainMenuLink} href="#">Industries<span><ExpandMoreOutlinedIcon /></span></Link>
//                      <ul className={styles.subMenu1}>
//                      <li><a href="#">Automotive</a></li>
//                      <li><a href="#">Consumer Goods</a></li>
//                      <li><a href="#">Financial Services</a></li>
//                      <li><a href="#">Healthcare</a></li>
//                      <li><a href="#">Logistics</a></li>
//                      <li><a href="#">Real Estates</a></li>
//                   </ul>
//                    </li>
//                    <li className={styles.mainMenuItem}>
//                      <Link style={{ fontSize: "20px",color: "white"}} className={styles.mainMenuLink} href="/home/Contact">Contact</Link>
//                    </li>
//                  </ul>
//                </nav>
              
//             <div className={styles.navleft}>
//               <div className={styles.chart}>
//               <ChatOutlinedIcon style={{ fontSize: "55px",color: "white" }}/>
//               </div>
//               <div className={styles.iconBox04}>
//                 <p style={{color: "white",fontWeight:"bolder",fontSize: "18px"}}>Phone: +91 7550042242</p>
//                 <a style={{ textDecoration: "none",color: "white",fontWeight:"bolder",fontSize: "20px"}} href="mailto:info@solverines.com">Email: info@solverines.com</a>
//               </div>
//               <div className={styles.searchBtn}>
//                 <a href="#">
//                   <i className="twi-search2"></i>
//                 </a>
//                 <div className={styles.header01SearchBar}>
//                   <SearchIcon style={{ fontSize: "40px",color: "white" }} />
//                 </div>
//               </div>
//              </div>
//            </div>
//          </div>
//         </div>
//       </div>
//     </header>
//   </div>
//   );
// }