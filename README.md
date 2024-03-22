# App Entregas

Aplicação de entregas de comida utilizando Node.JS, MySQL, Socket.io, Knex e Express.

Composto por 3 aplicações:
    - Painel de Controle para controlar Empresas/Restaurantes e Entregadores
    - App de Restaurantes para solicitação de entregas
    - App de Entregadores para aceitar e realizar as entregas

**Lembrando que o App apenas terá versão Web (PWA), não será feito versão Mobile.**


# Funcionalidades

Cadastros
    # Usuários
        - Criar
        - Busca por ID
        - Busca por Login
        - Verificar se o Login já esta sendo usado

    # Entregadores
        - Criar
        - Busca por ID
        - Busca por Login
        - Verificar se o CPF/CNPJ já esta sendo usado
        - Verificar se o email já esta sendo usado
        - Relacionamento com usuário
        - Lista de entregas disponíveis

    # Empresas/Restaurantes
        - Criar
        - Busca por ID
        - Busca por Login
        - Verificar se o CPF/CNPJ já esta sendo usado
        - Verificar se o email já esta sendo usado
        - Relacionamento com usuário
        - Lista de entregadores ativos e disponíveis

    # Entregas
        - Solicitação de entrtegador
        - Cancelamento de entregas
