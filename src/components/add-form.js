import React from 'react';

import './add-form.css';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(text);
        }
        this.textInput.value = '';
    }

    setEditing(event, editing) {
        event.preventDefault();
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className="add-button"
                    onClick={(e) => this.setEditing(e, true)}>
                    <a href="/">Add a {this.props.type}...</a>
                </div>
            );
        }

        return (
            <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
                <input type="text" ref={input => this.textInput = input} />
                <button>Add</button>
                <button type="button" onClick={(e) => this.setEditing(e, false)}>
                    Cancel
                </button>
            </form>
        );
    }
}
