import React from 'react';
import Card from "./Card";

function Content(props) {

    return (
        <div className="content">
            {props.dataBase.map((stuff) => {
            return <Card
                product={stuff}
                dataBase={props.dataBase}
                setBought={props.setBought}
                />
            }
            )
            }
        </div>
    );
}

export default Content;