import React from 'react';
import Card from "./Card";

function Content(props) {

    return (
        <div className="content">
            {props.product.map((stuff) => {
            return <Card
                product={stuff}
                setBought={props.setBought}
                />
            }
            )
            }
        </div>
    );
}

export default Content;