import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Container, Grid } from "@mui/material";
import Link from 'next/link';
import styles from "../styles/Home.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container>
             <Grid container spacing={2}>
                    <Grid item sm={3}>
                    <div>
                        <h2>Besnik</h2>
                        <p>We are giving our students the best and suitable services for building their bright future.</p>
                        <FacebookIcon></FacebookIcon>
                        <TwitterIcon></TwitterIcon>
                        <InstagramIcon></InstagramIcon>
                    </div>
                    </Grid>
                    <Grid item sm={3}>
                    <div>
                        <h3>Company</h3>
                        <div className={styles.footerLinks}>
                        <Link href="#" >About</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Mobile</Link>
                        <Link href="#">How it Works</Link>
                        <Link href="#">Contact Us</Link>
                        
                        </div>
                    </div>
                    </Grid>
                    <Grid item sm={3}>
                    <div>
                        <h3>Support</h3>
                        <div className={styles.footerLinks}>
                        <Link href="#" >Support Carrer</Link>
                        <Link href="#">24h Service</Link>
                        <Link href="#">Quick Chat</Link>
                        <Link href="#">Blog</Link>
                        
                        </div>
                    </div>
                    </Grid>
                    <Grid item sm={3}>
                    <div>
                        <h3>Contact Us</h3>
                        <div className={styles.footerLinks}>
                        <Link href="#" >Our Office</Link>
                        <Link href="#">Our Center</Link>
                        <Link href="#">Press</Link>
                        <Link href="#">Resources</Link>
                        
                        </div>
                    </div>
                    </Grid>
        
            </Grid>
        </Container>
        </div>
       
    );
};

export default Footer;