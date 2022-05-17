import react from "react";
import '../Styles/Filter.scss'
import ComboBox from "../Component/Search";
import CategoriesBox from "../Component/Categories";

const Filter = () => {
    return (
        <div className="filtreContainers">
           
                 <ComboBox /> 
                 <CategoriesBox/>
         
        </div>
    )
}

export default Filter;