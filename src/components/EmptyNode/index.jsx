import React from 'react';

export default class EmptyNode extends React.PureComponent {
    render() {
        const { type } = this.props;
        let symbol = "";
        switch (type) {
            case "space":
                symbol = " ";
                break;
            case "pipe":
                symbol = "|";
                break;
            case "line":
                symbol = "|---------------------------->";
                break;
            default:
                symbol = "-";
                break;
        }
        return (

            <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', height: '20px'}}>
                <div>{symbol}</div>
            </div>
        );
    }
}

