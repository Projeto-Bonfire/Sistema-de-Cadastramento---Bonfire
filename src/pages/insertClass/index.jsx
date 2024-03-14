import React, { useState } from "react";

import ProgressBar from "../../components/progressBar";
import Layout from "../../components/layout";
import Button from "../../components/button";

import { Container, Users, Form, Input, Logo } from "./styles";

const InsertClass = () => {
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     window.location.href = "/";
  //   }
  // }, []);

  const [classText, setClassText] = useState("");
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  function sendClass(classText) {
    if (classText.length > 0) {
      localStorage.setItem("class", classText);
      window.location.assign("/finish");
    } else {
      alert("Não há uma classe inserida");
    }
  }

  return (
    <Layout onLayout={(x) => x.setBackgroundPadding(false)}>
      <Container>
        <ProgressBar currentStep="1" />
        <div>
          <Users>
            <label>Usuários:</label>
            {users.map((user, index) => (
              <p key={index}>{user}</p>
            ))}
          </Users>

          <Form>
            <Logo />
            <section>
              <label>Turma dos Usuários:</label>
              <Input onChange={(e) => setClassText(e.target.value)} />
            </section>
            <Button name="avançar" onAction={() => sendClass(classText)} />
          </Form>
        </div>
      </Container>
    </Layout>
  );
};

export default InsertClass;
