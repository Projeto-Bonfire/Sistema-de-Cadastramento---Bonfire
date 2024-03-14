# Sistema de cadastramento de alunos

Este site foi criado para alimentar o banco de dados, permitindo que o aplicativo e o site do Polivalente tenham acesso a esses dados, a fim de realizar a validação das informações dos alunos logo no primeiro acesso. É crucial esse sistema para que o processo de cadastro de alunos seja o mais ágil possível.



## Link do projeto

[Replit](https://2c1d3c8f-4234-4d13-9777-42fb1403b2b6-00-dq042n9wqcl1.riker.replit.dev/](https://8d6a979a-01bb-476a-b12f-267314d7cd0b-00-ho2drbeq1pxr.picard.replit.dev/))

[Protótipo - Figma](https://www.figma.com/file/JKlsxdKRmYsjFLwdrXgDXD/projeto-polivalente?type=design&node-id=1265-74&mode=design&t=IQkNr402pWf03Oe1-0)




## Tecnologias

- react
- styled-components
- react-icons
- vite
- axios
- templete personalizado
- react-router-dom
- Replit



## Usado por

Esse projeto é usado pelas seguintes empresas:

- Bonfire

O projeto em questão representa uma iniciativa de natureza privada integrante da entidade empresarial previamente mencionada. Sua principal operação envolve a comercialização de aplicativos destinados a outras empresas que decidem adquirir tais soluções tecnológicas. Nesse contexto apresentado, esse sistema é direcionado para o ramo de instituições educacionais. E, nesse caso, o cadastramento inicial de alunos é de responsabilidade do Bonfire. Portanto, visando agilizar esse procedimento de cadastramento, foi criado este site que suporta o cadastramento em massa e simultâneo, tornando essa tarefa mais ágil.



## Funcionalidades

- Cadastrar usuários
- Checagem de alunos antes de cadastrar
- Cadastramento de vários alunos numa mesma input
- Cadastramento de alunos em massa
- Separação de nomes em linha
- Necessidade de tocken para acessar as páginas
- Redirecionamento para página de erro, em caso de url incorreta
- Barra de progresso para acompanhar o preenchimento o formulário
- Alertas especificos para guiar os usuários



## Como Utilizar
Este manual tem como objetivo fornecer instruções claras e detalhadas sobre como utilizar o sistema de cadastramento ágil. Este sistema foi desenvolvido com o propósito de tornar o processo de cadastramento de usuários o mais eficiente possível, permitindo o cadastro de múltiplos usuários simultaneamente.

### Passo 1: Cadastramento de Usuários

- Ao acessar o sistema, você será direcionado para a tela inicial de cadastramento.
- Na caixa de entrada fornecida, digite os nomes dos usuários que deseja cadastrar, separados por vírgula. Por exemplo: "João Silva, Maria Souza, Pedro Santos".
- Após digitar os nomes, pressione o botão "Avançar" para avançar para o próximo passo.

### Passo 2: Atribuição de Turmas

- Na próxima tela, você verá a lista de nomes dos usuários que deseja cadastrar.
- Ao lado da caixa com todos os nomes , haverá um campo para atribuir a turma correspondente a todos esses usuários.
- Verifique os nomes e atribua a turma a elas.
- Após atribuir a turma, pressione o botão "Avançar" para avançar para o último passo.
  
### Passo 3: Verificação e Cadastro Final

- Na última etapa, você verá um resumo dos dados que serão cadastrados, incluindo os nomes dos usuários e a turma atribuída.
- Analise cuidadosamente as informações apresentadas e verifique se tudo está correto.
- Certifique-se de preencher todos os campos obrigatórios.
- Após a verificação, clique no botão "Cadastrar" para finalizar o processo de cadastramento.
- Se houver campos não preenchidos ou qualquer erro, o sistema emitirá um aviso indicando o que precisa ser corrigido antes de prosseguir.

#### Observações Importantes:

- Certifique-se de preencher todos os campos obrigatórios em cada etapa do processo.
- O sistema não permite deixar campos sem preencher, garantindo a integridade dos dados cadastrados.



## Rotas do sistema de cadastramento

### Rota: /
Descrição: Essa rota é onde colocará o nome de todos os usuário da mesma sala ao mesmo tempo.

### Rota: /insert-class
Descrição: Nesta página, são exibidos todos os nomes dos alunos que você colocou na página anterior e nela você irá relacionar todos esses aluno à uma turma especifica.

### Rota: /finish
Descrição: Aqui, será possível vizualizar todos os alunos e a que turma eles fora relacionados, nisso você pode ver se há um erro e no fim clicar no botão para cadastra-los efim no banco de dados.



## Funcionalidades do templete 

- Vite configurado (build, port, .env, scripts)
- Theme Provider
- Global Styles
- Arquivo de configuração geral (title, baseURL)
- Rotas configuradas
- Rota de erro configurada
- Estrutura de pastas
- Instancia do axios
- 

## Autor do Template:

- [@darknx](https://github.com/darknx)



## Autores do sistema de cadastramento:

- [@Gabi-Viana](https://github.com/Gabi-Viana)
- [@adrianBonfire](https://github.com/adrianBonfire)



## Sistema de cadastramento pertencente à:

- [@Projeto-Bonfire](https://github.com/Projeto-Bonfire)