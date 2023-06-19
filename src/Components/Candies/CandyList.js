// import Card from "../UI/Card";
// import classes from './CandyList.module.css'
// const CandyList = props => {
//     return (
//          <Card className={classes.CandyData}>
//             <ul>
//                 {props.CandyData.map((candyData) => {
//                     return (
//                         <li key={candyData.id}>
//                             {candyData.Name} {candyData.Description} {candyData.Price}                   
//                         </li>
//                     );
//                 })}
//             </ul>
//          </Card>
//     );
// }

// export default CandyList;
import Card from "../UI/Card";
import classes from './CandyList.module.css';

const CandyList = (props) => {
    return (
        <Card className={classes.CandyData}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.CandyData.map((candyData) => (
                        <tr key={candyData.id}>
                            <td>{candyData.Name}</td>
                            <td>{candyData.Description}</td>
                            <td>{candyData.Price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}

export default CandyList;
