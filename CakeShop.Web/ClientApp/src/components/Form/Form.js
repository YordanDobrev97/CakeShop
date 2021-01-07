import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
    }

    handler(event) {
        event.preventDefault();

        const name = event.target.name;
        const value = event.target.value;
        this.props.getInputValue(name, value);
    }

    render() {
        return (
            <form onSubmit={this.handler} className="justify-content-center">
                {this.props.children.map(child => {
                    const { type, className, placeholder, name } = child.props;
                    return (
                        <div className="mb-2">
                            <input type={type} name={ name } onChange={this.handler.bind(this)} className={className} placeholder={placeholder} />
                        </div>
                    )
                })}
            </form>
        )
    }
}