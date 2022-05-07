import React, { Component } from 'react'

export default class MemoryData extends Component {
    //constructor
    constructor(props){
        //kalıtım aldığım classdaki verileri almak için yazdım
        super(props)
        this.propsDataShow=this.propsDataShow.bind(this);
    }
    //method
    propsDataShow(){
        console.log(this);
        console.log(this.props);
        console.log(this.props.dataBind)
        console.log(this.props.dataChange)
        console.log(this.props.dataInMemory)
    }
    render() {
        console.log(this.props)
    return (
        <div>
            <button
                className="btn btn-success shadow mt-5"
                onClick={this.propsDataShow}
            >
        memory data
            </button>
        </div>
    )
    }
}
