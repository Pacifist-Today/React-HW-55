import React from "react";
import Item from "./Item";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterArr: []
        }
    }

    changeHandler = ({target}) => {
        const collection = [...this.state.counterArr]

        if (!collection.length) {
            collection.push({
                id: 0,
                num: 0
            })
        }

        let data = {}
        let number = null

        if (target.name === "plus") number = collection[collection.length - 1].num + 1
        else if (target.name === "minus") number = collection[collection.length - 1].num - 1

        data = {
            id: collection[collection.length - 1].id + 1,
            num: number
        }

        collection.push(data)
        this.setState({counterArr: collection})
    }

    removeHandler = ({target}) => {
        const data = [...this.state.counterArr]
        const filteredData = data.filter(index => index.id !== +target.id)
        this.setState({counterArr: filteredData})
    }

    render() {
        return(
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button
                        name="plus"
                        type="button"
                        className="btn btn-outline-success"
                        onClick={this.changeHandler}
                    >
                        +
                    </button>
                    <button
                        name="minus"
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.changeHandler}
                    >
                        -
                    </button>
                </div>
                <div className="list-group">
                    {
                        this.state.counterArr
                        .sort((a, b) => a < b ? 1 : -1)
                        .map((item, index) => {
                            return <Item
                                        key={index}
                                        item={item}
                                        removeHandler={this.removeHandler}
                                    />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Counter