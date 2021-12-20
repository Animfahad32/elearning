import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Grid } from "@mui/material";
import Image from "next/image";

const Mentor = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={2} sx={{ mt: 20 }}>
                    <Grid item md={6}>
                    <Image src="/feedback.png"  width="300px" height="300px" objectFit='contain' alt="Hero-Banner" />
                    </Grid>
                    <Grid item md={6} container alignContent="center">
                        <div>
                            <h1>Get trained by the <br /> worlds best teachers </h1>
                            <p style={{ color: '#6D7079' }}>Here guiding and teaching some experienced <br />and profilic bunch of teachers</p>
                            <div style={{display: 'flex', alignItems: 'center'}}> 
                            <FontAwesomeIcon icon={faCheck} style={{marginRight:'5px'}}/>
                            <p style={{ color: '#6D7079' }}>Get in touch</p>
                            <FontAwesomeIcon icon={faCheck} style={{marginRight:'5px',marginLeft:'10px'}}/>
                            <p style={{ color: '#6D7079' }}>Sharing Experiences</p>
                            </div>
                            <Button style={{ background: '#F1A501', color: '#fff', borderRadius: '25px', padding: '10px',marginTop:'20px'}}>Learn More</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Mentor;