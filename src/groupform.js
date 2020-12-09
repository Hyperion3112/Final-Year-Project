import React from "react";
import { Form, Message, Popup, Button, Container } from "semantic-ui-react";
import "./signin.css";
import User1 from "./user1";

const options = [
  { key: "Al", text: "Algorithm", value: "Algorithm" },
  {
    key: "AI",
    text: "Artificial Intelligence",
    value: "Artificial Intelligence",
  },
  { key: "ML", text: "Machine Learning", value: "Machine Learning" },
  {
    key: "EA",
    text: "Evolutionary Algorithms",
    value: "Evolutionary Algorithms",
  },
  { key: "Db", text: "Database", value: "Database" },
  {
    key: "DWM",
    text: "Data Warehousing and Mining",
    value: "Data Warehousing and Mining",
  },
  { key: "BI", text: "Business Intelligence", value: "Business Intelligence" },
  { key: "Bd", text: "Bigdata", value: "Bigdata" },
  { key: "SN", text: "Social Networking", value: "Social Networking" },
  { key: "IOT", text: "IOT", value: "IOT" },
  { key: "DS", text: "Data Science", value: "Data Science" },
  { key: "Bl", text: "Blockchain", value: "Blockchain" },
  { key: "ES", text: "Embedded System", value: "Embedded System" },
  { key: "SP", text: "Signal Processing", value: "Signal Processing" },
  { key: "OS", text: "Operating Systems", value: "Operating Systems" },
  { key: "Gr", text: "Graphics", value: "Graphics" },
  { key: "IP", text: "Image Processing", value: "Image Processing" },
  { key: "VR", text: "Virtual Reality", value: "Virtual Reality" },
  { key: "AR", text: "Augmented Reality", value: "Augmented Reality" },
  { key: "N", text: "Networking", value: "Networking" },
  { key: "WN", text: "Wireless Networks", value: "Wireless Networks" },
  {
    key: "CNS",
    text: "Cryptography and Network Security",
    value: "Cryptography and Network Security",
  },
  { key: "CS", text: "Cyber Security", value: "Cyber Security" },
  { key: "WT", text: "Web Technology", value: "Web Technology" },
  { key: "MA", text: "Mobile App", value: "Mobile App" },
  {
    key: "NLP",
    text: "Natural Language Processing",
    value: "Natural Language Processing",
  },
];

const options1 = [
  { key: "1", text: "Prof. 1", value: "Prof1" },
  { key: "2", text: "Prof. 2", value: "Prof2" },
  { key: "3", text: "Prof. 3", value: "Prof3" },
  { key: "4", text: "Prof. 4", value: "Prof4" },
  { key: "5", text: "Prof. 5", value: "Prof5" },
  { key: "6", text: "Prof. 6", value: "Prof6" },
  { key: "7", text: "Prof. 7", value: "Prof7" },
  { key: "8", text: "Prof. 8", value: "Prof8" },
  { key: "9", text: "Prof. 9", value: "Prof9" },
  { key: "10", text: "Prof. 10", value: "Prof10" },
  { key: "1", text: "Prof. 11", value: "Prof11" },
  { key: "12", text: "Prof. 12", value: "Prof12" },
  { key: "13", text: "Prof. 13", value: "Prof13" },
  { key: "14", text: "Prof. 14", value: "Prof14" },
  { key: "15", text: "Prof. 15", value: "Prof15" },
  { key: "16", text: "Prof. 16", value: "Prof16" },
  { key: "17", text: "Prof. 17", value: "Prof17" },
  { key: "18", text: "Prof. 18", value: "Prof18" },
];

class GroupForm extends React.Component {
  constructor() {
    super();
    this.state = {
      Roll1: "",
      Roll2: "",
      Roll3: "",
      Code1: "",
      Code2: "",
      Code3: "",
      Domain: "",
      Guide: "",
      user: {
        id: "",
        name: "",
        roll: "",
        password: "",
        percode: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        roll: data.roll,
        percode: data.percode,
      },
    });
  };

  onRoll1Change = (event) => {
    this.setState({ Roll1: event.target.value });
  };

  onRoll2Change = (event) => {
    this.setState({ Roll2: event.target.value });
  };

  onRoll3Change = (event) => {
    this.setState({ Roll3: event.target.value });
  };

  onCode1Change = (event) => {
    this.setState({ Code1: event.target.value });
  };

  onCode2Change = (event) => {
    this.setState({ Code2: event.target.value });
  };

  onCode3Change = (event) => {
    this.setState({ Code3: event.target.value });
  };

  onDomainChange = (event) => {
    this.setState({ Domain: event.target.value });
  };

  onGuideChange = (event) => {
    this.setState({ Guide: event.target.value });
  };

  onSubmit = () => {
    console.log(this.state);
    fetch("http://localhost:3000/groupform", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roll1: this.state.Roll1,
        roll2: this.state.Roll2,
        roll3: this.state.Roll3,
        code1: this.state.Code1,
        code2: this.state.Code2,
        code3: this.state.Code3,
        domain: this.state.Domain,
        guide: this.state.Guide,
      }),
    }).then((response) => response.json());
  };

  render() {
    return (
      <body>
        <legend className="fw7 lh-copy f1 ph0 mh0 center mt5">
          Group Formation Form
        </legend>
        <Message info>
          <p className="fw7 lh-copy f5">
            Contact your group members for the permission code
          </p>
        </Message>
        <article className="pb5">
          <Popup
            trigger={<Button icon="add" content="Add a member" />}
            content="Make sure you have the member's permission code"
            on="hover"
          />
          <Form>
            <p classname="fw7 lh-copy f4">Student 1</p>
            <p className="fw7 lh-copy f5">
              <User1
                name={this.state.user.name}
                roll={this.state.user.roll}
                percode={this.state.user.percode}
              />
            </p>
            <p className="fw7 lh-copy f4 inaline">Enter Details of Student 1</p>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Roll Number"
                placeholder="Roll Number"
                type="text"
                name="Roll1"
                id="Roll1"
                onChange={this.onRoll1Change}
              />
              <Form.Input
                fluid
                label="Permission Code"
                placeholder="Permission Code"
                type="text"
                name="Code1"
                id="Code1"
                onChange={this.onCode1Change}
              />
            </Form.Group>
            <p className="fw7 lh-copy f4 inaline">Enter Details of Student 2</p>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Roll Number"
                placeholder="Roll Number"
                type="text"
                name="Roll2"
                id="Roll2"
                onChange={this.onRoll2Change}
              />
              <Form.Input
                fluid
                label="Permission Code"
                placeholder="Permission Code"
                type="text"
                name="Code2"
                id="Code2"
                onChange={this.onCode2Change}
              />
            </Form.Group>
            <p className="fw7 lh-copy f4 inaline">Enter Details of Student 3</p>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Roll Number"
                placeholder="Roll Number"
                type="text"
                name="Roll3"
                id="Roll3"
                onChange={this.onRoll3Change}
              />
              <Form.Input
                fluid
                label="Permission Code"
                placeholder="Permission Code"
                type="text"
                name="Code3"
                id="Code3"
                onChange={this.onCode3Change}
              />
            </Form.Group>
            <p className="fw7 lh-copy f4 inaline">
              Select your Domain & Project Guide
            </p>
            <Form.Select
              fluid
              multiple
              selection
              label="Domain"
              options={options}
              placeholder="Domain"
              name="Domain"
              id="Domain"
              onChange={this.onDomainChange}
            />
            <Form.Select
              label="Project Guide"
              placeholder="Project Guide"
              fluid
              multiple
              selection
              options={options1}
              name="Guide"
              id="Guide"
              onChange={this.onGuideChange}
            />
            <Form.Button
              fluid
              className="pt3"
              type="submit"
              value="submit"
              onClick={this.onSubmit}
            >
              Submit
            </Form.Button>
          </Form>
        </article>
      </body>
    );
  }
}

export default GroupForm;
