Repositório: https://github.com/brunolcsbc/blog-backend/

O backend do blog que desenvolvi é baseado em NodeJs, express e typescript. Se trata de uma API que responde com JSON às requisições recebidas pelo frontend. A aplicação foi dividida em controller, repository (responsável em lidar com as querys no banco de dados), routes e public (onde são armazenadas as imagens dos avatares dos usuários).

O banco de dados utilizado é postgresql. Para lidar com o banco de dados, foi utilizado o ORM Prisma. Criei na pasta “prisma” uma classe com o padrão de projeto singleton, onde é criada apenas uma instancia do cliente do cliente prisma para toda a aplicação. Esse singleton é chamado em cada classe dentro do repository para realizar as querys ao banco de dados.

Foi utilizada também a biblioteca ZOD para filtrar e validar os dados recebidos pelo frontend, além da biblioteca sanitizeHtml para sanitizar os dados recebidos. Para recepcionar os avatares dos usuários do frontend, foi utilizada a biblioteca multer.

O login foi implementado utilizando jwt. O token é validado nas requisições, onde é recebido por meio do cabeçalho “Authorization”: “Bearer token”. Os dados do usuário logado são armazenados no token (apenas os dados essenciais).

Criei também um um arquivo .ENV para guardar as senhas do token e etc.

Todas as funções solicitadas pelo professor foram implementadas no backend.

A dificuldade que encontrei é na organização da aplicação para que fique compreensível e escalável no futuro. Eu dividi as tarefas do controller com o repository com o objetivo de organizar melhor o código. Assim, o controller fica mais conciso, com código mais enxuto e visualmente mais intuitivo. Além disso, caso eu decida alterar o banco de dados, basta alterar apenas o repository com a lógica do novo banco.

Iniciei o desenvolvimento do frontend utilizando o nextjs com as principais funções solicitadas pelo professor. Porém ainda está incompleto.

Repositório frontend: https://github.com/brunolcsbc/blog-frontend 

