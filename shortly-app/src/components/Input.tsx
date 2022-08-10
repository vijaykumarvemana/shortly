import { ChangeEvent, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Background from "../assets/bg-boost-desktop.svg";



function Input() {
  const [link, setLink] = useState("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setLink(event.target.value);
  };

  const handleClick = async () => {
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <Container
      className="bg-dark style position-absolute top-100 start-50  translate-middle"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="d-flex flex-start mx-5">
        <Form.Group
          className="flex-grow-1 m-auto my-5"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="email"
            placeholder="Shorten a link here..."
            onChange={handleInput}
          />
        </Form.Group>
        <Button
          variant="info"
          className="my-5 text-white fw-bold  mx-2"
          type="submit"
          onClick={handleClick}
        >
          Shorten It!
        </Button>
      </div>
    </Container>
  );
}

export default Input;
