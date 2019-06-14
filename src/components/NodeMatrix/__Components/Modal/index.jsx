import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from "react-responsive-modal";

import './styles.css';
import closeModalAction from '../../../../actions/Modal/closeModalAction';

export class ModalElement extends React.PureComponent {
    onCloseModal = () => {
        this.props.closeModal();
    };

    render() {
        const {
            open, detailsUrl, id,
        } = this.props;

        return (
            <Modal
                open={open}
                onClose={this.onCloseModal}
            >
                <div className="ModalElement__IframeContainer">
                    <iframe
                        className="ModalElement__Iframe"
                        src={detailsUrl + '/associate/info/' + id}>
                    </iframe>
                </div>
            </Modal>
        )
    }
}

export default connect(
    state => ({
        open: state.modal.open,
        detailsUrl: state.variables.detailsUrl,
        id: state.modal.content.enrolleeId,
    }),
    dispatch => ({
        closeModal: () => { dispatch(closeModalAction())}
    }),
)(ModalElement);

ModalElement.propTypes = {
    open: PropTypes.bool.isRequired,    
    detailsUrl: PropTypes.string,    
}