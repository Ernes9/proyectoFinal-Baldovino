import { RotateLoader } from "react-spinners";

export default function Loader(){
    return(
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <RotateLoader color="#0056b3" margin={50} size={50}/>
        </div>
    )
};