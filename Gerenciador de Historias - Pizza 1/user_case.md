# User case:

Como usuário, eu gostaria de ter um aplicativo que me permita armazenar e gerenciar as  histórias dos testes em um arquivo JSON. Para isso, eu preciso de um serviço com uma série de funções que me permitam ler e escrever no arquivo, listar todas as histórias, adicionar novas histórias, buscar histórias por título e remover histórias por título.

Com base nas minhas necessidades, essas funções me permitirão manter uma lista atualizada das minhas histórias dos testes, para que eu possa acessá-las quando quiser ou adicionar novas histórias de testes à minha coleção. Além disso, essas funções me permitirão gerenciar facilmente essas histórias, buscando por título ou removendo histórias que não são mais interessantes para os casos de testes.

Para criar esse aplicativo, eu precisarei usar as funções fs.readFile() e fs.writeFile() do módulo "fs" do Node.js para ler e escrever no arquivo JSON, bem como criar as minhas próprias funções para listar, adicionar, buscar e remover histórias. Espero que essas funções me ajudem a manter as minhas histórias favoritas organizadas e acessíveis para que eu possa acessá-las quando quiser.

# Critério de Aceite: 

Para avaliar se o usercase que utiliza o script foi bem-sucedido, você deve concluir os seguintes critérios de aceite:

- O usuário consegue listar todas as histórias do arquivo JSON.
- O usuário consegue adicionar uma nova história ao arquivo JSON.
- O usuário consegue buscar uma história pelo título no arquivo JSON. Se a história existir, ela é exibida para o usuário. Se a história não existir, é exibida uma mensagem de erro.
- O usuário consegue remover uma história pelo título do arquivo JSON. Se a história existir, ela é removida e uma mensagem de sucesso é exibida. Se a história não existir, é exibida uma mensagem de erro.
- O usuário não consegue fazer alterações no arquivo JSON de maneira indevida. Por exemplo, ele não consegue alterar o conteúdo do arquivo JSON manualmente, apagar o arquivo ou adicionar histórias com campos faltantes ou inválidos.
- O usuário consegue entender a funcionalidade de cada uma das funções e utilizá-las de maneira adequada. Isso inclui a exibição de instruções claras e precisas para o usuário, bem como a utilização de mensagens de erro e sucesso para orientar o usuário.


# Dica para testar: 

Para testar as funções do gerenciador de histórias, crie um arquivo app.js e importar as funções implementadas por você no `gerenciador-historias.js`. Em seguida, chame cada uma das funções e verifique se elas estão funcionando corretamente.
