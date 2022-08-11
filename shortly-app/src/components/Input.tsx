import { ChangeEvent, useState } from "react";
import { Button, Container, Form, Placeholder } from "react-bootstrap";
import isURL from "validator/lib/isURL";
import { useDispatch, useSelector } from "react-redux";
import Background from "../assets/bg-boost-desktop.svg";
import { setShortlinks } from "../slices/links";
import { TStore } from "../store";

function Input() {
  const dispatch = useDispatch();
  const shortenLinks = useSelector(
    (state: TStore) => state.linksReducer.shortlinks
  );
  console.log(shortenLinks);
  const [validated, setValidated] = useState(false);
  const [link, setLink] = useState("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
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
      console.log(data);
      const links = data.result;
      dispatch(setShortlinks({ shortlinks: links }));
    } else {
      setValidated(true);
    }
  };

  return (
    <Container
      className="bg-dark style position-absolute top-100 start-50  translate-middle"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className=" mx-5">
        <Form
          noValidate
          validated={validated}
          className="d-flex"
          onSubmit={handleSubmit}
        >
          <Form.Group
            className="flex-grow-1 m-auto my-5"
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
