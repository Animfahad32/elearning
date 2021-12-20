import { useRouter } from "next/router";
import { useEffect } from "react";


const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        }, 3000)
    },[])
    return (
        <div className="not-found">
            <h1>Opps..!!</h1>
            <h2>That Page Cannot Be Found</h2>
        </div>
    );
};

export default NotFound;