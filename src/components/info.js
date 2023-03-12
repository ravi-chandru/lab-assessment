const Info = () => {

    return (
        <div className="info-segment">
            <h4 className="info-segment-title"> To save your segment , you need to add the schemas to build the query.</h4>
            <div className="info-segment-traits">
              <div className="traits-box">
                    <div className="traits-box-green">
                    </div>
                    <div>
                            User Traits
                    </div>
              </div>
               <div className="traits-box" >
                    <div className="traits-box-red">
                    </div>
                    <div>
                            Group Traits
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Info;