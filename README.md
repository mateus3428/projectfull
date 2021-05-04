Projeto Python Full Stack Developer
Mateus Mussa Malvezzi

# Feedback sobre a atividade #

# Parte 1:
- Conhecimento inicial: programação em Python
- Conhecimento adquirido: Criação de um novo projeto utilizando Django, criando um espaço para uma pequena API CRUD.
    Utilização do Django Rest Framework para serialização dos dados, possibilitando a comunicação com outras APIs.
- Gargalo: entender um pouco mais a fundo o conceito de serialização e sua aplicabilidade.
    Após implementações e vários testes pude compreender a flexibilidade de aplicações rest.

# Parte 2:
- Conhecimento inicial: templates do próprio Django, aprendidos em testes da etapa anterior.
- Conhecimento adquirido: Implementação de um frontend utilizando a stack ReactJS.
- Gargalo: aprender ReactJS do zero. A partir desta etapa foi realmente desafiador. Acredito ter conseguido apresentar um resultado aceitável
    para uma primeira viagem. Adorei a plataforma, pretendo mergulhar fundo em seus conceitos.

# Parte 3:
- Conhecimento inicial: nenhum.
- Conhecimento adquirido: conhecimento básico sobre implementações do Docker e Docker compose para criação de três containers
    que consigam se comunicar. Plataforma incrível.
- Gargalo: comunicação entre os servidores frontend e backend. Depois de muito estudar as documentações consegui compreender o básico para uma
    conexão plena. Também não consegui ir mais a fundo para organizar corretamente a sequência de inicialização dos containers, 
    sendo necessário criar o container com o db e depois o resto da aplicação.

Realmente me diverti e aprendi muito com o desafio.


### Orientações para inicializção: ###

- Clone o repositório do github em um diretório de preferência;
- Com o Docker e Docker Compose instalados, abra o prompt de comando no mesmo diretório de onde encontra-se o arquivo `docker-compose.yml`
- Digite: `docker-compose build`
- Aguarde
- Obs.: Como o docker não entende que um container está "pronto" apenas ao finalizar sua inicialização, o seguinte acontece:
    O container mysql não termina sua inicialização completa. O container backend inicia sem conseguir se conectar ao db.
A solução que encontrei:
- Digite: `docker-compose up mysql` (isso garante a construção do container)
- Após a inicialização completa do mysql, aperte ctrl+c
- Aguarde
- Quando a linha de comando estiver disponível, digite `docker-compose up`
- Aguarde a inicialização do servidor frontend e acesse: [http://localhost:3000]

- Será necessário criar um login 
- A página ainda não recarrega ao criar um novo login, então após clicar em "Registrar" clique em "Login" e acesse com as mesmas credenciais.
- Autenticação baseada em token.