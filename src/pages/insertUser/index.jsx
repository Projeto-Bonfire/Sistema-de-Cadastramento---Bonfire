import React, { useState, useEffect } from "react";

import ProgressBar from "../../components/progressBar";
import Layout from "../../components/layout";
import Button from "../../components/button";

import setAuthToken from "../../services/setAuthToken";
import api from "../../services/api";

import { Container, Form, TextArea, Logo } from "./styles";

const InsertUser = () => {
  const user = { email: "carlosjosep@gmail.com", password: "12345678" };
	const [userText, setUserText] = useState("");
	const [status, setStatus] = useState(false);

  const setToken = async () => {
    try {
				if (!localStorage.getItem('token') && !status){
				      var response = await api.post("/user/signin", user);
				      response = response.data;
				      setAuthToken(response.token);
							setStatus(true);
				      alert("Token armazenado com sucesso")
				} else {
					setStatus(true)
				}
			localStorage.setItem('users', [])
    } catch (error) {
      alert(error);
    }
  };

	useEffect(() => {
		setToken()
	}, [])

  async function sendUsers(usersText) {
    if (usersText.length > 0) {
      const users = userText
        .split(/[,\t]+/)
        .map((user) => user.trim())
        .filter((user) => user !== "");
      const List = JSON.stringify(users);
      localStorage.setItem("users", List);
      location.assign("/insert-class");
    } else {
      alert("Não há usuários para inserir!");
    }
  }



	if (!status) return <Layout><Container>Loading...</Container> </Layout>
		/*
		<button className="token" onClick={() => Login}>
			Token
		</button>
		*/
  return (
    <Layout onLayout={(x) => x.setBackgroundPadding(false)}>
      <Container>
        <ProgressBar currentStep="0" />


        <Form>
          <Logo />
          <section>
            <label>Nome do(s) Usuário(s):</label>
            <TextArea
              onChange={(e) => setUserText(e.target.value)}
              placeholder="
    Anthony Lima,
    Benjamin Viana,
    Gabriel da Silva Costa,
    João Felipe Dutra,
    Pedro Sampaio da Silveira,
    "
            />
          </section>
          <Button name="avançar" onAction={() => sendUsers(userText)} />
        </Form>
      </Container>
    </Layout>
  );
};

export default InsertUser;
