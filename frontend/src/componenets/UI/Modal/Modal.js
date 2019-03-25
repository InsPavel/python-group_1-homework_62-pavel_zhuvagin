import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import UserUpdateForm from "../../../containers/UserUpdateForm/UserUpdateForm";

class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Редактировать данные</ModalHeader>
          <ModalBody>
            <UserUpdateForm
                state={this.props.state}
                toggle={this.toggle}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;