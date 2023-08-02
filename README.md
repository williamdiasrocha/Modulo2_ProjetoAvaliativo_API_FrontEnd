
Projeto Final do Módulo 02 do curso de Desenvolvimento Web FullStack, ministrado pelo Senai/SC e LAB365.

<h1>LabMedical API - Sistema de Automação Médica</h1>
<h3>WebAPI para Gerenciamento de Usuários, Pacientes, Consultas e Exames</h3>

<h2>Sistema:</h2>

<p>O LabAPI Software executa o gerenciamento dos cadastros de usuários, pacientes, consultas e exames através da insersão, busca e alteração no banco de dados. </p>
<p>O LabAPI Software fornece o registro de atendimento dos médicos e a atualização do status do paciente quando atendido.</p>
<p>_________________</p>

<h2>Tecnologias:</h2>

| Linguagem            | Documentação                                                      |
| -------------------- | ----------------------------------------------------------------- |
| JavaScript           | [https://www.javascript.com/] |

| Framework / Plugin   | Documentação                                                      |
| -------------------- | ----------------------------------------------------------------- |
| React JS             | [https://legacy.reactjs.org/docs/getting-started.html]            |
| Vite                 | [https://vitejs.dev/guide/]                                       |
| JSON Server          | [https://www.npmjs.com/package/json-server]                       |

| Bibliotecas          | Documentação                                                      |
| -------------------- | ----------------------------------------------------------------- |
| Ant Design           | [https://ant.design/docs/react/introduce]                         |
| Bootstrap            | [https://getbootstrap.com/docs/5.3/getting-started/introduction/] |
| Date-fns             | [https://date-fns.org/docs/Getting-Started]                       |
| Node-diacritics      | [https://www.npmjs.com/package/diacritics]                        |
| React Hook Form      | [https://www.react-hook-form.com/get-started]                     |
| Styled-Components    | [https://styled-components.com/docs]                              |
| React-Icons          | [https://react-icons.github.io/react-icons/]                      |
| React-Dom            | [https://www.npmjs.com/package/react-dom]                         |
| React-Input-Mask     | [https://www.npmjs.com/package/react-input-mask]                  |

<p>_________________</p>

<h2>Instalação </h2>

Para iniciar o aplicativo começamos pelo [Node.js] usando os comandos abaixo para a instalação das dependências e iniciar o servidor.

```sh
cd LABMedical
npm i
npm npm run dev
npm json-server --watch src/server/db.json
```

<p>_________________</p>

<h2>Padrões Utilizados</h2>

O projeto foi executado em pastas para oferecer uma melhor compreensão do código. Veja como está idealizado:

- [Public] - Imagens utilizadas no sistema;
- [src] - Assets, Components, Context, Layout, Pages, Services;
- [App.jsx] - Arquivo com as Rotas do sistema;
- [Global.Style] - Arquivos de estilização geral do App;
- [Main.jsx] - Arquivo com a renderização do App encapsulado pelo Provider para o ReactDOM;

Nas pastas os arquivos estão separados conforme a sua função.

<p>_________________</p>

<h2>Login, cadastros e Consulta</h2>

<h3>Login:</h3>

- Utilize os seguintes dados para acessar o sistema:
>E-mail: adm@adm.com;
>Senha: 12345678;

<h3>Homepage</h3>

<p>Consulte os Cards de Estatpisticas automatizadas e pode pesquisar o paciente para pesquisar as informações dele.</p>

<h3>Cadastro de Consulta:</h3>
<p>Pesquise o paciente pelo NOME e preencha todos os dados da consulta quando o formulário encontrar o paciente no banco de dados e clique em salvar</p>

<h3>Cadastro de Exames:</h3>
<p>Pesquise o paciente pelo E-MAIL e preencha todos os dados do exame quando o formulário encontrar o paciente no banco de dados e clique em salvar</p>

<h3>Prontuarios:</h3>
<p>Pesquise o paciente pelo NOME e receba o cartão resumido dele. Clique na seta para visualizar o Prontuário do Paciente com suas consultas e exames.</p>

<p>_________________</p>

<h2>Sugestões e Melhorias:</h2>

<p>Aprimorar o sistema de deleção de dados do banco de dados, pois como está não é possível excluir por não haver uma tela de consulta aprimorada de exames e consultas, principalmente.</p>

<p>Aprimorar a consulta ViaCEP.</p>

<p>Criação da página para cadastro de novos usuários.</p>

<p>Criação de sistema para recuperar senha de usuários.</p>
