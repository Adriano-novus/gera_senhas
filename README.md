# gera_senhas
Programa para gerar senhas de atendimento
Documentação do Sistema: Gerador de Senhas
📌 Visão Geral
Este sistema web foi desenvolvido para facilitar o atendimento presencial em ambientes como cartórios, clínicas ou serviços públicos, permitindo a geração e impressão de senhas do tipo Normal (N) e Prioritária (P), além de exibir as 3 últimas senhas geradas.

🌐 Acesso Online
O sistema está disponível publicamente na web e pode ser acessado diretamente pelo navegador:
🔗 Acesse aqui: https://adriano-novus.github.io/gera_senhas/
Recomenda-se utilizar o Google Chrome ou Microsoft Edge para melhor compatibilidade com impressão via PDF.

📁 Estrutura de Arquivos
/sistema-senhas/
├── index.html         # Interface principal
├── estilo.css         # Estilos visuais personalizados
├── script.js          # Lógica para geração e impressão das senhas
├── logo.png           # Logo exibida no topo da página

🖥️ index.html
- Contém a estrutura da interface: título, logo, botões para gerar senha, e área para exibição das senhas atuais.
- Os botões chamam a função gerarSenha(tipo) com os parâmetros 'N' ou 'P'.

🎨 style.css
- Aplica cores suaves, botões com sombreamento, layout responsivo e visual limpo.
- Estiliza o título, botões, lista de senhas e a logo centralizada.

🧠 script.js
- Controla os contadores de senha normal e prioritária.
- Gera o número da senha no padrão N001, P002 etc.
- Exibe a senha atual e armazena até 3 últimas senhas chamadas.
- Gera automaticamente um PDF com layout pré-formatado e imprime via janela do navegador, usando a biblioteca jsPDF.

🛠️ Requisitos Técnicos
- Navegador moderno com suporte a JavaScript.
- Conexão com a CDN do jsPDF (já incluída no <head>).
- Todos os arquivos devem estar na mesma pasta para pleno funcionamento.

🔍 Possíveis Expansões Futuras
- Painel externo de visualização das senhas.
- Toque de som ao imprimir.
- Contador visual por tipo de senha.
- Armazenamento local ou em servidor das senhas emitidas.
