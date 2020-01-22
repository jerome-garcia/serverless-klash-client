import React, { useRef, useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./ContactUs.css";

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

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try{
      if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
        alert(
          `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
            1000000} MB.`
        );
        
        return;
      }
      await sleep(1000);
      setIsLoading(false);
	} catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="ContactUs">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Send us a message!</h1>
            </div>
            <br/>
          </div>
          <div className="row">
            <div className="col-md-12">
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
                  Send
                </LoaderButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}