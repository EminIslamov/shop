import React from 'react';
import Card from "./Card";

function Content(dataBase) {

    return (
        <div className="content">
            {dataBase.dataBase.map((stuff) => {
            return <Card product={stuff} dataBase={dataBase}/>
            }
            )
            }
        </div>
    );
}

export default Content;