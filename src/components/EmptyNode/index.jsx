import React from 'react';

import './styles.css';

export default class EmptyNode extends React.PureComponent {
    render() {
        const { type } = this.props;
        let symbol = "";
        switch (type) {
            case "space":
                symbol = " ";
                break;
            case "pipe":
                symbol = (
                <div className="EmptyNode__SVGContainer">
                    <svg viewBox={"0 0 100% 100%"} preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
                        <line x1="0" y1="0" x2="0" y2="100%" className="SVG_Line" />
                    </svg>
                </div>
                );
                break;
            case "line":
                symbol = (
                    <div className="EmptyNode__SVGContainer" >
                        <svg viewBox={"0 0 100% 100%"} preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
                            <line x1="0" y1="0" x2="0" y2="100%" className="SVG_Line"/>
                            <line x1="0" y1="50%" x2="100%" y2="50%" className="SVG_Line" />
                        </svg>
                    </div>
                );
                break;
            case "last-line":
                symbol = (
                    <div className="EmptyNode__SVGContainer" >
                        <svg viewBox={"0 0 100% 100%"} preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
                            <line x1="0" y1="0" x2="0" y2="50%" className="SVG_Line" />
                            <line x1="0" y1="50%" x2="100%" y2="50%" className="SVG_Line" />
                        </svg>
                    </div>
                );
                break;
            default:
                symbol = "-";
                break;
        }

        return (
            <div className="EmptyNode__Container">
                {symbol}
            </div>
        );
    }
}

