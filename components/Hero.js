import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Hero = () => {
    return (
        <div style={{padding:"100px"}}>
            <Container>
            <Grid container spacing={2} alignItems="center" 
            columns={{ md: 12 }}
            >
                <Grid item md={6}>
                    <div>
                        <Typography variant="h2">An excellence <br /> center for education</Typography>
                        <p style={{color: '#7c7f87'}} >Besnik is the online learning platform that offers <br /> various courses for your development</p>
                        <input type="text" className="hero-input" />
                        <Button variant="contained" style={{padding: '16px', background: '#f1a501', borderRadius: '30px', left: '-25px'}}>Get Started</Button>

                    </div>
                </Grid>
                <Grid item md={6}>
                    <Image src="/hero.png"  width="256px" height="223px" objectFit='contain' alt="Hero-Banner" />
                </Grid>
            </Grid>
            </Container>
   
        </div>
    );
};

export default Hero;