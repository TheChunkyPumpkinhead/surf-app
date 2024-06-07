import React, { Component } from "react";
import config from "../config";
import jotzimage2 from "../images/jotzimage2.jpeg";
import "./JotzForm.css";

class JotzForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      city: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const jotz = {
      title: this.state.title,
      content: this.state.content,
      city: this.state.city,
    };

    fetch(
      `${config.API_ENDPOINT}/jotz/`,

      {
        method: "POST",
        body: JSON.stringify(jotz),
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((results) => {
        this.props.history.push("/list");
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  render() {
    return (
      <section className="add-jotz">
        <main>
          <div className="jotz-form">
            <img src={jotzimage2} alt="man in  tube" />
          </div>
        </main>

        <form className="add-JotzForm" onSubmit={this.handleSubmit}>
          <label> Title of your entry</label>
          <input
            type="text"
            className="input-area centered-placeholder"
            justifyContent="center"
            placeholder="title"
            value={this.state.title}
            name="title"
            id="title"
            onChange={(event) => this.setState({ title: event.target.value })}
            required
          />

          <label> Note</label>
          <input
            type="text"
            className="input-area centered-placeholder"
            placeholder="Write here"
            value={this.state.content}
            name="note"
            id="note"
            onChange={(event) => this.setState({ content: event.target.value })}
            required
          ></input>
          <label> City </label>
          <input
            type="city"
            className="input-area centered-placeholder"
            placeholder="city"
            value={this.state.city}
            name="city"
            id="city"
            onChange={(event) => this.setState({ city: event.target.value })}
            required
          />

          <button className="note-button" type="submit">
            Add That Jot
          </button>
        </form>
      </section>
    );
  }
}

export default JotzForm;
