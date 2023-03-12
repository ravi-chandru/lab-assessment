import Schema from './schema.js'

const SchemaList = ({schemaArray,handleChange,value }) => {

   
    // const schemas = schemaCount.map(() => <Schema options={options} />)

    const s = schemaArray.map((e) => <div> {e} </div> );

    return (
        <div className="schema-list">
            { s }
        </div>
    )
}

export default SchemaList;