import { ChangeEvent, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import isURL from "validator/lib/isURL";
import Background from "../assets/bg-boost-desktop.svg";

function Input() {
  const [validated, setValidated] = useState(false);
  const [link, setLink] = useState("");
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
    if (isURL(link)) {
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      const localStorage = window.localStorage;
      const localStorageContent = localStorage.getItem("shortlinks");
      let shortlinks;
      if (localStorageContent === null) {
        shortlinks = [];
      } else {
        shortlinks = JSON.parse(localStorageContent);
      }
      shortlinks.push(data.result);
      localStorage.setItem("shortlinks", JSON.stringify(shortlinks));
      window.location.reload();
    } else {
      setValidated(true);
    }
  };

  return (
    <Container
      className="bg-dark style position-absolute top-100 start-50  translate-middle input-field-container"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="mx-5">
        <Form
          noValidate
          validated={validated}
          className="d-flex form-div"
          onSubmit={handleSubmit}
        >
          <Form.Group
            className="flex-grow-1 m-auto "
            controlId="formBasicText"
          >
            <Form.Control
              type="text"
              placeholder="shorten a link here..."
              onChange={handleInput}
              required
            />
            <Form.Control.Feedback type="invalid" className="h-0">
              Please enter a valid url.
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            variant="info"
            className="my-5 text-white fw-bold  mx-2"
            type="submit"
          >
            Shorten It!
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Input;
