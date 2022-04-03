/* import PropTypes from "prop-types";//prop type nı belirlemek için kuallnılır */

import Button from "./Button";



const Header = ({title}) => { // buranın içine deafult props  {title = "task default şeklindede tanımlayabilrisin "}

  const handleClickHeader = ()=>{
    alert("clickOn header")
}

  return (
    <div className="header">
        <h1>{title}</h1>
        <Button 
        handleClick={handleClickHeader}
        color = "purple"
        text = "Show Add Task Bar"
         />
    </div>
  )
};


/*  Header.propTypes = {
    title: PropTypes.string.isRequired
} */


//defult props tanımlamak

/* Header.defaultProps = {
    title: "Task Tracker"
}
 */
export default Header