import { faBookReader, faCertificate, faCommentDots, faPenSquare, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid, Typography } from "@mui/material";
const CTA = () => {
    return (
        <div>
            <Container>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <div className="cta">
                         <FontAwesomeIcon icon={faBookReader} style={{background: '#01957D', width: '50px', height: '50px', borderRadius: '50%', padding: '10px', color: '#fff',     marginRight: '20px' }}/>
                        <Typography variant="p" sx={{ fontWeight: 'bold' }}>1,000+ Free best <br /> online courses</Typography>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className="cta">
                         <FontAwesomeIcon icon={faUser} style={{background: '#FFA3A4', width: '50px', height: '50px', borderRadius: '50%', padding: '10px', color: '#fff',     marginRight: '20px' }}/>
                        <Typography variant="p" sx={{ fontWeight: 'bold' }}>100+ Experienced <br /> and expert mentor</Typography>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className="cta">
                         <FontAwesomeIcon icon={faCommentDots} style={{background: '#2b3847', width: '50px', height: '50px', borderRadius: '50%', padding: '10px', color: '#fff',     marginRight: '20px' }}/>
                        <Typography variant="p" sx={{ fontWeight: 'bold' }}>1M+ Student rate <br /> and review</Typography>
                    </div>
                </Grid>
                
            </Grid>
           
            <div style={{textAlign: 'center', padding: '40px'}}>
                    <h1>Why choose Besnik?</h1>
                    <p style={{ color: '#8E9198' }}>We offer a wide range of opportunity for you. See <br /> what you will get and your benefits </p>
            </div>
            <Grid container spacing={2}>
            <Grid item md={4}>
                <FontAwesomeIcon icon={faCertificate} style={{background: '#F0A502', width: '80px', height: '80px', borderRadius: '20%', padding: '15px', color: '#fff',     marginRight: '20px' }}/>
               <h3>Get certficate</h3>
               <p style={{ color: '#8E9198' }}>We are providing a certificate to <br /> you after completing your course <br /> and this will help you future</p>
            </Grid>
            <Grid item md={4}>
                <FontAwesomeIcon icon={faUsers} style={{background: '#01957D', width: '80px', height: '80px', borderRadius: '20%', padding: '15px', color: '#fff',     marginRight: '20px' }}/>
               <h3>Get membership</h3>
               <p style={{ color: '#8E9198' }}>We are providing a offer that you <br /> can join our membership club <br /> and you will get some extra </p>
            </Grid>
            <Grid item md={4}>
                <FontAwesomeIcon icon={faPenSquare} style={{background: '#FFA3A4', width: '80px', height: '80px', borderRadius: '20%', padding: '15px', color: '#fff',     marginRight: '20px' }}/>
               <h3>Become a Teacher</h3>
               <p style={{ color: '#8E9198' }}>We are giving you to become a<br /> teacher after completing your <br /> course and you can join freely</p>
            </Grid>
            </Grid>

          
            </Container>
        </div>
    );
};

export default CTA;