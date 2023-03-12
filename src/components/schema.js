import { useState } from "react";

const Schema = ({options, value, handleChange}) => {

    // const [value,setValue] = useState(options[0])

    const opt = options.map((e)=> <option value={e}>{e}</option>)


  

    return (
        <div className="schema-container">
           
            <select value={value} onChange={(e) => handleChange(e)} className="schema-dropdown">
                {opt}
            </select>
        </div>
    )
}

export default Schema;