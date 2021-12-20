import { Container } from "@mui/material";
import Image from "next/image";

 
const AppCollection = () => {
    return (
        <div>
            <Container>
                <div style={{ backgroundColor:'#01957D',padding: '20px', borderRadius: '10px'}}>
                    <h1 style={{textAlign: 'center', color:'#fff'}}>Fit more learning into your day</h1>
                    <div style={{textAlign: 'center'}}>
                        <Image src='/google.png' width="100px" height="100px" objectFit='contain' alt="Hero-Banner" ></Image>
                        <Image src='/appstore.png' width="80px" height="100px" objectFit='contain' alt="Hero-Banner" ></Image>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AppCollection;