# configuração d TypeScript

1. Inicializar um projeto Node.js ("npm init")

2. Instalar o TypeScript
   2.1 Instalar globalmente("npm install -g typescript")
   2.2 Instalar local (dentro do projeto) ("npm install typescript -D "), (o "-D serve para deixar funcionando apenas no momento do desenvolvimento")

3. Utilizar o TypeScript já instaldo para converter em JavaScript em um arquivo ("npx tsc (nome_do_arquivo)")
   3.1 Para n ter que a todo momento compilar o arquivo .ts novamente use `--watch` no final : `npx tsc nome_arquivo --watch` , assim n sera preciso mais compilar o arquivo a cada mudança

4. Usar `npx tsc --init` para iniciar um arquivo `.tsconfig`, assim será possivel alterar as configurações do TypeScript
   4.1 Para compilar todos os arquivos `.ts em .js`, poderá ser omitido o nome do arquivo : `npx tsc` (obs: isso apenas funciona após usar o comando citado no (4))

5. no `.tsconfig` configure da sua própria maneira
   5.1 Sugestões: `habilitar outDir` -> cria uma pasta separada com o arquivo compilado `.js` de acordo o nome que foi criado por você mesmo
   5.2 Sugestões: `Habilitar noEmitOnError` -> não deixa que o arquivo que contêm erro seja compilado
