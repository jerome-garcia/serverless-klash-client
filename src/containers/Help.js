import React, { useRef, useState } from "react";
import { FormGroup, FormControl, ControlLabel, PageHeader } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./Help.css";

export default function Help(props) {
  const file = useRef(null);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
          1000000} MB.`
      );
      return;
    }

    setIsLoading(true);
  }

  return (
    <div className="Help">
      <form onSubmit={handleSubmit}>
        <div class="container">
          <div class="row">
            <div class="col">
              <h1>How can we help?</h1>
            </div>
            <br/>
          </div>
          <div class="row">
            <div class="col-md-12">
                <FormGroup controlId="content">
                  <FormControl
                    value={content}
                    componentClass="textarea"
                    onChange={e => setContent(e.target.value)}
                    placeholder="Enter your message here..."
                  />
                </FormGroup>
                <FormGroup controlId="file">
                  <ControlLabel>Attachment</ControlLabel>
                  <FormControl onChange={handleFileChange} type="file" />
                </FormGroup>
                <LoaderButton
                  block
                  type="submit"
                  bsSize="large"
                  bsStyle="primary"
                  isLoading={isLoading}
                  disabled={!validateForm()}
                >
                  Submit
                </LoaderButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}