import React from "react";
import Layout from "../../components/Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "../../components/UI/input";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Signup = () => {
  return (
    <Layout>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs={5}>
            <Form>
              <Row>
                <Col>
                  <Input
                    label="First Name"
                    type="text"
                    placeholder="enter your first name"
                    value=""
                    onChange={""}
                  />
                </Col>
                <Col>
                  <Input
                    label="Last Name"
                    type="text"
                    placeholder="enter your last name"
                    value=""
                    onChange={""}
                  />
                </Col>
              </Row>

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

export default Signup;
