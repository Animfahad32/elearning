import { AppBar, Button, Container, Grid, Toolbar } from "@mui/material";
import Link from "next/link";
const Navbar = () => {
    return (
      <div>
      <Container>
      <AppBar position="static" color="default" elevation={0} style={{ background: '#fff' }} >
          <Grid  item >
            <Toolbar>
              <Grid md={2}>
               <Link href="/"><h2>Besnik</h2></Link>
              </Grid>
                <Grid md={8}>  
                <Link href="/"><Button color="inherit" sx={{ fontWeight: 'bold' }}>Home</Button></Link>
                <Link href="/Services"><Button color="inherit"sx={{ fontWeight: 'bold' }} >Services</Button></Link>
                <Link href="/About"><Button color="inherit"sx={{ fontWeight: 'bold' }} >About</Button></Link>
                <Link href="/Courses"><Button color="inherit"sx={{ fontWeight: 'bold' }} >Courses</Button></Link>
                <Link href="/Contact"><Button color="inherit" sx={{ fontWeight: 'bold' }}>Contact us</Button></Link>
                </Grid>
                <Grid sm={2}>  
                <Button style={{ fontWeight: 'bold', color: '#f1a501' }}  >Login</Button>
                <Button style={{ fontWeight: 'bold',background: '#f1a501', color: '#fff', borderRadius: '20px' }} className="signupBtn">Sign Up</Button>
                
                </Grid>
            </Toolbar>
          </Grid>
        </AppBar>
      </Container>        
      </div>
    );
};

export default Navbar;