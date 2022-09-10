import React from "react";

const Item = props => {
    const {item, removeHandler} = props

    return (
            <button
                id={item.id}
                type="button"
                className="list-group-item list-group-item-action"
                onClick={removeHandler}
            >
                {item.num}
            </button>
    )
}

export default Item