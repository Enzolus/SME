import Graph from './graph/Graph'
export default function() {
    
    try {
        return(
        <Graph/>);
    }
    catch {
        return <p>yes</p>;
    }
}