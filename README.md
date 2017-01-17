# Template para Projetos Angular da Celular Direto

## Início

Antes de tudo vocês precisam instalar o [Node JS](https://nodejs.org/en/) e o [Bower](https://bower.io/). O primeiro [vocês precisam entrar no site](https://nodejs.org/en/) e baixar a última versão e instalar. Para usuários Linux e Mac o procedimento é mais fácil usando apt-get ou Brew.

Depois que o Node JS estiver instalado, rode o comando abaixo:

```
npm install -g bower && npm install -g gulp-cli
```

Feito isso o NPM e o Bower estarão prontos para uso. Depois faça o clone do projeto:

```
git clone git@bitbucket.org:celulardireto/base-template-angular.git
```

## Nome do Projeto

Percebam que no package.json e bower.json possuem um nó chamado name com o valor "nameapplication". Altere esse nome para o projeto que vocês criarem. Lembrando que o Bower não gosta de nenhum caracter como acentuação, espaços, etc.

## Instalação

Depois de fazer o clone, copie o conteúdo e cole numa pasta diferente. Crie o repositório no Bitbucket e depois commite tudo. Após isso, rode o comando a seguir no cmd, Gitbash ou Terminal:

```
npm install && bower install
```

Isso fará com que as dependências mínimas sejam instaladas. Cada projeto pode ter uma dependência específica que pode ser instalada pelo bower ou npm, isso vai depender do projeto e suas versões.

### Observação FAQ

Caso tenham problemas com a instalação por causa do FAQ, [veja no README do FAQ](https://bitbucket.org/celulardireto/faq) como resolver isso.

## Gulp

O Gulp estará disponível após a instalação. Nele conterá um start default para o projeto, com isso, os projetos em Angular não dependerão mais do Visual Studio, podendo rodar tanto em Linux quanto em Mac. Só ficará dependente das API's backend, como o Cubo e afins.

### Startando o projeto

Rode o comando abaixo:

```
gulp
```

### Build do projeto

Depois que o projeto estiver pronto para subir para homologação, rode o build do projeto, que fará com que os arquivos CSS's e JS's fiquem todos concatenados e minificados. O comando é o abaixo:

```
gulp build
```

Ele vai gerar uma pasta chamada **dist/** que deve ser zipada e enviada para o responsável fazer o deploy.

## Web.config

Prestem atenção nesse arquivo pois é necessários para o IIS rodar corretamente o Angular e suas rotas SPA:

```
<system.web>
    <compilation debug="true" targetFramework="4.5.2"/>
    <httpRuntime targetFramework="4.5.2"/>
</system.web>
```

Esse targetFramework é fixo, porém, fiquem atentos caso mudem a versão, pois terão que alterar aqui também.

## Services

Todos os projetos terão os dois services nesse base template, o de configuração e o de storage (session e local storage). Todas as URLs que forem utilizadas pelos services do projeto, fora outras variáveis, devem ser adicionadas nesse configuration.service.js para serem reutilizadas.

Cada componente (páginas, etc) podem ter um service em específico que serão adicionados nessa pasta. Assim como podem existir services que serão utilizados em diferentes páginas.

## Fontes

Adicionar as fontes dentro da pasta /fonts e não esquecer de colocar o font-face dentro do arquivo /sass/components/_fonts.sass seguindo o exemplo abaixo:

```
@font-face
	font-family: "NOMEDAFONTE"
	src: url("../fonts/NOMEDAFONTE.eot") format("eot")
	src: url("../fonts/NOMEDAFONTE.woff2") format("woff2"), url("../fonts/NOMEDAFONTE.woff") format("woff"), url("../fonts/NOMEDAFONTE.svg#NOMEDAFONTE") format("svg")
```

## Componentes e Diretivas

Existe já um padrão de diretiva e de componente criada, prestem muita atenção. Elas foram criadas a partir do modelo criado pelo [John Papa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md). Prestar atenção principalmente nas dependências que são diferentes dentro de uma diretiva e num componente. É só editar o arquivo de exemplo que tem no projeto e alterar o nome.

### Update

Lançaram a [versão em português do manual do John Papa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/pt-BR.md).

## Filtros

Existe já um padrão de filtro, prestem muita atenção. Segue o mesmo padrão anterior do [John Papa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md). Geralmente os filtros não possuem dependências.

## Controllers e estrutura

Os Controllers ficarão dentro da estrutura do projeto, dentro da feature. Por exemplo, se tiver uma feature chamada **search**, ela será uma pasta que vai conter os seguintes arquivos:

```
search/search.controller.js
search/search.html
```

Lembrando sempre de colocar a view corretamente nas rotas do projeto.

## Rotas

Usaremos o [ui-route](https://github.com/angular-ui/ui-router). Ele trabalha com states, com isso, não precisamos alterar as rotas caso a url mude. Olhem a documentação e prestem muita atenção nisso.

## Idiomas

Adicionamos também o [componente de idiomas](https://bitbucket.org/celulardireto/lp-i18n) que foi criado. Ele sempre para preparar as Landing Pages a suportar multi idiomas. PRESTAR MUITA ATENÇÃO quanto a isso, pois o template não precisa desse componente caso não tenha multi-idiomas no projeto.

Veja mais [detalhes no página do repositório](https://bitbucket.org/celulardireto/lp-i18n).
