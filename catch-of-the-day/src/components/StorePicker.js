import React from 'react';

class StorePicker extends React.Component {
    render() {
        return  (
            <React.Fragment> 
            { /* Fragment Allows sibling HTML elements */ }
            <form action="" className="store-selector">
                    <h2>Please Enter A Store!</h2> 
                    <input type="text" required placeholder="Store Name"/>
                    <button type="submit"> Visit Store >> </button>
                </form>
            </React.Fragment>
        ) 
    }
}

export default StorePicker;