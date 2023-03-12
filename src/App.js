import Title  from "./components/title";
import Segment from "./components/segment";
import Info from './components/info'
import SchemaList from "./components/schemaList";
import { useState } from "react";
import NewSchema from "./components/newSchema";
import Schema from "./components/schema";
const App = () => {

    const [schemaCount, setSchemaCount] = useState([])

    const [options,setOptions] = useState(["First Name","Last Name", "Gender", "Age", "Account Name","City","State"])

    const [filteredOptions,setFilteredOptions] = useState(["First Name","Last Name", "Gender", "Age", "Account Name","City","State"]);

    const [value,setValue] = useState(filteredOptions[0])

    const handleChange = (event) => {
        setValue(event.target.value);
        const fo = [...filteredOptions].filter((x)=> x!== event.target.value);
        console.log(fo);
        setFilteredOptions(fo);
       
     }


    const [schemaArray,setSchemaArray] = useState([<Schema options={options} value={value} handleChange={handleChange}/>])
    
    // const schemaArray  = [<Schema options={options}/>];
    // const options = ["First Name","Last Name", "Gender", "Age", "Account Name","City","State"]
   
    const  handleCreateSchema = () => {
        const count = [...schemaCount];
        count.push(1);
        setSchemaCount(count);
        const newOptions = [...schemaArray];
        // const filteredOptions = [...options].slice(1,options.length)
        newOptions.push(<Schema options={filteredOptions}/>)
        console.log(newOptions)
        setSchemaArray(newOptions);
    }

    const filterOption = () => {

        if(options.length === filterOption.length){
            
        }
    }

   
    return (
        <div className="outer-container">
             <Title/>
             <Segment/>
             <Info/>
             <SchemaList  schemaArray={schemaArray}/>
             <NewSchema handleClick={handleCreateSchema}/>
        </div>
    )
}

export default App