import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    // Properties
    myInput = React.createRef();
    // Making methods into properties allow access to this method using "this"
    goToStore = (event) => {
        // 1. Stop Form from submitting
        event.preventDefault(); 
        // 2. Get the text from that input
        const storeName = this.myInput.value.value;
        console.log(storeName);
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
        
    }
    
    
    render() {
        return  (
            <React.Fragment> 
            { /* Fragment Allows sibling HTML elements */ }
            <form onSubmit={this.goToStore} className="store-selector">
                    <h2>Please Enter A Store!</h2> 
                    <input 
                        type="text" 
                        ref={this.myInput}
                        required placeholder="Store Name" 
                        defaultValue={getFunName()} />
                    <button type="submit"> Visit Store >> </button>
                </form>
            </React.Fragment>
        ) 
    }
}

export default StorePicker;