📄 Documentação do Sistema: Gerador de Senhas

📌 Visão Geral
Este sistema web foi desenvolvido para ambientes de atendimento ao público — como cartórios, clínicas ou serviços de triagem — com o objetivo de gerar senhas de atendimento do tipo Normal (N) e Prioritária (P). Ele exibe a última senha gerada, mantém histórico das 3 últimas senhas chamadas, e gera automaticamente o PDF da senha pronta para impressão.

🌐 Acesso Online
Você pode acessar o sistema diretamente pela internet neste link:
🔗 https://adriano-novus.github.io/gera_senhas/
É recomendado utilizar navegadores modernos como Google Chrome ou Microsoft Edge para garantir a melhor experiência de impressão e compatibilidade.

🖥️ Componentes do Sistema
- index.html: Estrutura da página com botões, exibição das senhas e inclusão dos arquivos externos.
- estilo.css: Responsável pela aparência geral: cores, espaçamento, botões e layout visual.
- script.js: Controla os contadores das senhas, gera o conteúdo do PDF e atualiza a lista das últimas senhas.
- logo.png: Imagem localizada no topo central da página.

⚙️ Funcionalidades
- Geração automática de senhas prefixadas (ex: N001, P001, etc.)
- Impressão via PDF com layout personalizado.
- Exibição das 3 últimas senhas geradas para referência visual.
- Interface responsiva, com botões amigáveis e layout limpo.

🛠️ Requisitos
- Navegador com suporte a JavaScript (Chrome, Edge, Firefox)
- Conexão com a internet para carregar a biblioteca jsPDF

📌 Expansões Futuras (opcional)
- Painel externo com tela para visualização de chamadas
- Emissão de som ao gerar senhas prioritárias
- Integração com banco de dados ou registro de atendimentos
- Estimativa de tempo de espera por tipo de senha
