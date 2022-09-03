import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Container style={{margin: '5rem'}} className="text-center">
        <h1>Welcome to Admin Dashboard</h1>
        <div >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit,
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
