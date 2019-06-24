import React from 'react';
import { Transition, animated, Spring } from 'react-spring/renderprops';

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
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        config={{ duration: 1000 }}
                    >
                        { props => (
                            <div style={props}>
                                <div className="EmptyNode__SVGContainer">
                                    <svg viewBox={"0 0 100% 100%"} preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
                                        <line x1="0" y1="0" x2="0" y2="100%" className="SVG_Line" />
                                    </svg>
                                </div>
                            </div>
                            )}
                    </Spring>        
                );
                break;
            case "line":
                symbol = (
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        config={{ duration: 1000 }}
                    >
                        { props => (
                            <div style={props}>
                                <div className="EmptyNode__SVGContainer" >
                                    <svg viewBox={"0 0 100% 100%"} preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
                                        <line x1="0" y1="0" x2="0" y2="100%" className="SVG_Line"/>
                                        <line x1="0" y1="50%" x2="90%" y2="50%" className="SVG_Line" />
                                     </svg>
                                </div>
                            </div>
                        )}
                    </Spring>  
                );
                break;
            case "last-line":
                symbol = (
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        config={{ duration: 1000 }}
                    >
                        { props => (
                            <div style={props}>
                                <div className="EmptyNode__SVGContainer" >
                                    <svg viewBox={"0 0 100% 100%"} preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
                                        <line x1="0" y1="0" x2="0" y2="50%" className="SVG_Line" />
                                         <line x1="0" y1="50%" x2="90%" y2="50%" className="SVG_Line" />
                                    </svg>
                                </div>
                            </div>
                        )}
                    </Spring>  
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

