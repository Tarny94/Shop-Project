import react from "react";
import '../Styles/Filter.scss'
import Input from "../Component/Input";
import Select from "../Component/Select";

const Filter = () => {
    return (
        <div className="filtreContainers">
           
                 <Input/> 
                 <Select/>
         
        </div>
    )
}

export default Filter;