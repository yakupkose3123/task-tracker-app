/* import PropTypes from "prop-types";//prop type nı belirlemek için kuallnılır */


import Button from "./Button";



const Header = ({title,handleClickHeader,buttonText}) => { // buranın içine deafult props  {title = "task default şeklindede tanımlayabilrisin "}
  

 

  return (
    <div className="header">
        <h1>{title}</h1>      
        <Button 
        handleClick={handleClickHeader}
        color = {buttonText==="Show Add Task Bar" ? "purple": "red"}
        text = {buttonText}
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