import "./Dashboard.css"
import ModelGraph from "../graphvulne/modelencadgraph"
import Tab3 from "../data/grid/tab3"
const Dashboard = () => {
    return (
        <div className="bodypagevul">
            <div id="header-ownerp">Header</div>

            <div className="blockgraph"> <ModelGraph title="SEVERITY"/> <ModelGraph title="DETAILS"/> <ModelGraph title="SUMMARY"/> </div>
            


            <div className="tableauvuln"><Tab3/></div>
        
        </div>
    );
};

export default Dashboard;