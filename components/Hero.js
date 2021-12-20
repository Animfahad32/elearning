import { Button, Container, Grid, TextField, Typography } from "@mui/material";
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
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"
                        className="hero-input" />
                        <Button variant="contained" className="heroBtn">Contained</Button>

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