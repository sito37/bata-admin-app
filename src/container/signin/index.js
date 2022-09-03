import React from "react";
import Layout from "../../components/Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "../../components/UI/input";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Signin = () => {
  return (
    <Layout>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs={5}>
            <Form>
              <Input
                label="Email"
                type="email"
                placeholder="enter your email"
                value=""
                onChange={""}
              />
              <Input
                label="Password"
                type="password"
                placeholder="enter your password"
                value=""
                onChange={""}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
