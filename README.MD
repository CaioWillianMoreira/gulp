## CURSO DE GULP JS

#### O que é gulp?
Gulp.js é uma ferramenta de automação de tarefas em JavaScript, ele te ajuda com minificação e compilação de arquivos que muitas vezes são repetitivas no nosso fluxo de trabalho.

#### Plataforma Agnóstica
As integrações são incorporadas em todas as principais IDEs, ele pode ser usado com PHP, .NET, Java e outras plataformas.

#### Forte Ecossistema
Use os módulos do NPM para fazer o que quiser, com mais de 2000 plugins para transmissão de arquivos em fluxo contínuo.

#### Simples
Ao fornecer apenas uma superfície mínima da API, o Gulp é fácil de aprender e simples de usar.

#### NodeJs
É necessário ter instalado o NodeJs para que o Gulp funcione.

### Criando o ambiente de trabalho.
__Crie um diretório__
- mkdir gulp
__Entre dentro do diretório__
- cd .. gulp

#### Testando o Node eo NPM.
No terminal digite o comando
- Node -v
- NPM -v

#### Para instalar o Global
- npm i gulp -g

#### Criando o package.json
- npm init -y

#### Instalando o Gulp localmente
- npm i gulp --save-dev

#### package.json
Este arquivo é responsável por criar um registro de todas as dependências do projeto.

#### Criando o arquivo gulp
Insira o comando para criar o arquivo físico
__cat > gulpfile.js__

#### Segunda parte
Na segunda parte do curso sará necessário baixar e congigurar alguns programas para nosso workflow

- Editor de textos
- Plugins NPM

#### Instalando dependências do gulp
gulp-sass, gulp-htmlmin, gulp-notify, del.

#### Desenvolvimento e produção
Criação dos diretórios
__src__
__dest__

### Tarefas do gulp
- task() -> Define tarefas no gulp;

- src() -> Arquivos que entram no fluxo de tarefas para serem tratados ou manipulados;

- dest() -> Destino dos arquivos que ja passaram pelo fluxo de tarefas;

- watch() -> Assite/Observa os arquivos e faz alguma tarefa quando esses são alterados;

- pipe() -> Concatena tarefas no gulp;

#### Para executar o gulp
__Gulp no da task__
- Ex: gulp html

#### Browser sync
- npm i browser-sync --save-dev
