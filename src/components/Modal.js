import React, { Component } from "react";
import Modal from "react-modal";
import "../style/modal.css";

export default class ModalToggle extends Component {
  state = {
    modalIsOpen: false
  };

  recipeDetails = () => {
    const ingredient = this.props.recipe.ingredients.map((items, index) => {
      return (
        <ul key={index}>
          <li style={{ listStyle: "none", color: "white" }}>{items.text}</li>
        </ul>
      );
    });
    return ingredient;
  };
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const customStyles = {
      content: {
        background: "#c0392b"
      }
    };
    return (
      <div>
        <button className="btn btn-primary" onClick={this.openModal}>
          View Details
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
          style={customStyles}
        >
          <h2
            className="modal-title"
            ref={subtitle => (this.subtitle = subtitle)}
          >
            Recipe
          </h2>
          {/* <button onClick={this.closeModal}>close</button> */}

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <h1 style={{ textAlign: "center" }} className="modal-name">
                  {this.props.recipe.label}
                </h1>
                <h1
                  style={{
                    color: "white",
                    fontFamily: "Oswarld, sans-serif",
                    marginTop: "20px"
                  }}
                >
                  Ingredients
                </h1>
                {this.recipeDetails()}
              </div>

              <div className="col-sm-6">
                <img
                  style={{ border: "20px white solid" }}
                  src={this.props.recipe.image}
                  alt="meal"
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
