import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Grid } from "@mui/material";
import Image from "next/image";

const Stats = () => {
    return (
        <div>
             <Container>
                <Grid container spacing={2} sx={{ mt: 20, mb:20 }}>
                <Grid item md={6} container alignContent="center">
                        <div>
                            <h1>Analytics your daily, <br /> Weekly abd monthly activity</h1>
                            <p style={{ color: '#6D7079' }}>We help you to track your study in lesson <br />and task as well as other thing</p>
                            <div style={{display: 'flex', alignItems: 'center'}}> 
                            <FontAwesomeIcon icon={faCheck} style={{marginRight:'5px'}}/>
                            <p style={{ color: '#6D7079' }}>Get Updates</p>
                            <FontAwesomeIcon icon={faCheck} style={{marginRight:'5px',marginLeft:'10px'}}/>
                            <p style={{ color: '#6D7079' }}>Track activity</p>
                            </div>
                            <Button style={{ background: '#F1A501', color: '#fff', borderRadius: '25px', padding: '10px', marginTop:'20px'}}>Learn More</Button>
                        </div>
                    </Grid>
                    <Grid item md={6}>
                    <Image src="/stats.png"  width="300px" height="300px" objectFit='contain' alt="Hero-Banner" />
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
    );
};

export default Stats;