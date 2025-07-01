import { Col, Row, Form, Button } from "react-bootstrap";

const Login = () => {
  console.log(import.meta.env.VITE_API_EMAIL);
  console.log(import.meta.env.VITE_API_PASSWORD);
  return (
    <section className="container my-3">
      <h1 className="text-center">Formulario</h1>
      <Row sm={1} md={2}>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ej: juanperez@mail.com" />
              <Form.Text className="text-danger">
                este es un mensaje de error
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
              <Form.Text className="text-danger">
                este es un mensaje de error
              </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
        <Col>
          <img
            src="https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg"
            alt="cafesito"
            className="w-100"
          />
        </Col>
      </Row>
    </section>
  );
};

export default Login;
