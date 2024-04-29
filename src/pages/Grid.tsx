import DataGrid from "./data/grid/tableau"
import DataGrid2 from "./data/grid/DataGrid2"
import './serverowner.css'
import {Button} from "@mui/material"
import { useState } from "react"


export default function Grid() {
  const [npage,setnpage] = useState(false);
  return(
<div> 
  <div className="title-owner"><p className="paratit-owner">Tracking from MS Defender</p></div>

    <hr className="ligneh-owner"/>

    <div className="pagecontrol-owner"><p>control</p></div>

    <div style={{height: "250px", backgroundColor: "#959595"}}>
    Menu
    <Button variant="contained" onClick={()=>setnpage(!npage)}>changement</Button>

    </div>

    {npage ? <DataGrid /> : <DataGrid2 />}
</div>
  );
}