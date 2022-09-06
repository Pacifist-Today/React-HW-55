import React from "react";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }

    changeHandler = ({target}) => {
        const collection = [...this.state.arr]

        if (!collection.length) {
            collection.push({
                id: 0,
                num: 0
            })
        }
        if (target.name === "plus") {
            const number = collection[collection.length - 1].num + 1
            const data = {
                id: collection.length,
                num: number
            }
            collection.push(data)
            this.setState({arr: collection})
        }   else if (target.name === "minus") {
            const number = collection[collection.length - 1].num - 1
            const data = {
                id: collection.length,
                num: number
            }
            collection.push(data)
            this.setState({arr: collection})
        }
    }

    removeHandler = ({target}) => {
        const data = [...this.state.arr]
        const filteredData = data.filter(index => {
            return index.id !== +target.id
        })
        this.setState({arr: filteredData})
    }

    render() {
        return(
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button name="plus" type="button" className="btn btn-outline-success" onClick={this.changeHandler}>+</button>
                    <button name="minus" type="button" className="btn btn-outline-danger" onClick={this.changeHandler}>-</button>
                </div>
                <div className="list-group">
                    {
                        this.state.arr
                        .sort((a, b) => a < b ? 1 : -1)
                        .map((i, index) => {
                        if (i.id === 0) return
                        return <button key={index} id={i.id} type="button" className="list-group-item list-group-item-action" onClick={this.removeHandler}>{i.num}</button>
                    })}
                </div>
            </div>
        )
    }
}

export default Component