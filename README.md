# 🚗 Landing Page Concessionária 🚗
Este é um projeto de landing page para uma concessionária , desenvolvido com o objetivo de praticar e aprimorar minhas habilidades em desenvolvimento front-end .

A página apresenta um design moderno, responsivo e funcional, com seções dedicadas ao estoque de veículos, serviços oferecidos e um formulário para agendamento de avaliações ou consignações.

## 🎯 Objetivo
O principal objetivo deste projeto foi exercitar o desenvolvimento front-end , aplicando boas práticas de organização, responsividade e segurança. Além disso, busquei explorar novas tecnologias e ferramentas para expandir meu conhecimento técnico.

## 🛠️ Tecnologias Utilizadas
- React.js : Framework JavaScript para criar interfaces dinâmicas e reutilizáveis.
- Tailwind CSS : Framework CSS utilitário para estilização rápida e eficiente.
- EmailJS : Biblioteca para integração de envio de e-mails diretamente pelo frontend.
- Swiper.js : Biblioteca para criação de carrosséis responsivos e interativos.
- Variáveis de Ambiente : Para armazenar dados sensíveis de forma segura.
- Create React App : Ferramenta para inicializar e configurar o projeto rapidamente.
## 📚 Aprendizados
Durante o desenvolvimento deste projeto, adquiri novos conhecimentos e refinei habilidades importantes:

- Organização de Componentes : Dividi o layout em componentes reutilizáveis, facilitando a manutenção e escalabilidade do código.
- Gerenciamento de Variáveis Sensíveis : Aprendi a usar variáveis de ambiente para proteger credenciais e configurações específicas.
- Responsividade : Explorei técnicas avançadas do Tailwind CSS para garantir que a página funcione perfeitamente em qualquer dispositivo.
- Integração de APIs : Implementei o EmailJS para enviar e-mails diretamente pelo formulário, melhorando a experiência do usuário.
- Atenção aos Detalhes : Desde modais até pequenas interações, cada elemento foi cuidadosamente planejado para proporcionar uma experiência fluida.
## 📂 Estrutura do Projeto
A estrutura do projeto segue as melhores práticas de organização, separando componentes, tipos, dados e assets. Aqui está uma visão geral:
```shell
meu-projeto/
├── public/               # Arquivos públicos (imagens, favicon, etc.)
├── src/
│   ├── components/       # Componentes React reutilizáveis
│   │   ├── ContactMap.tsx    # Mapa de contato
│   │   ├── ContactSection.tsx  # Seção de contato
│   │   ├── Footer.tsx    # Rodapé da página
│   │   ├── Header.tsx     # Cabeçalho da página
│   │   ├── HeroSection.tsx  # Seção principal (hero)
│   │   ├── InventorySection.tsx  # Seção de estoque de veículos
│   │   ├── ServiceSection.tsx   # Seção de serviços
│   │   └── VehicleCard.tsx   # Componente individual de veículo
│   ├── data/             # Dados mockados (ex.: veículos.json)
│   ├── types/            # Interfaces TypeScript
│   ├── App.tsx           # Componente principal da aplicação
│   ├── index.tsx         # Ponto de entrada da aplicação
│   └── assets/           # Imagens e outros recursos estáticos
├── .env                  # Variáveis de ambiente globais
├── .env.development      # Variáveis de ambiente para desenvolvimento
├── .env.production       # Variáveis de ambiente para produção
├── package.json          # Dependências e scripts do projeto
└── README.md             # Este arquivo :)
```
## 🚀 Como Executar o Projeto
Siga as etapas abaixo para clonar e executar o projeto localmente:

### 1. Clonar o Repositório:
```bash
git clone https://github.com/Drufontael/carshop-LP.git
cd carshop-lp
```
### 2. Instalar as Dependências
   
Certifique-se de ter o Node.js instalado em sua máquina. Em seguida, execute:
```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto e adicione suas credenciais do EmailJS:

```plaintext
REACT_APP_SERVICE_ID=seu_service_id_aqui
REACT_APP_TEMPLATE_ID=seu_template_id_aqui
REACT_APP_PUBLIC_KEY=sua_public_key_aqui
```
> Nota: Certifique-se de não compartilhar essas credenciais publicamente.

### 4. Executar o Projeto
Inicie o servidor de desenvolvimento:
```bash
npm start
```
A aplicação estará disponível em http://localhost:3000 .

## 🌟 Funcionalidades Principais
**1.Carrossel de Veículos :** Exibe o estoque de veículos com imagens, preços e informações adicionais.

**2.Modal de Informações :** Permite visualizar mais detalhes sobre cada veículo.

**3.Formulário de Contato :** Envio de e-mails para agendamento de avaliações ou consignações.

**4.Design Responsivo :** Funciona perfeitamente em dispositivos móveis, tablets e desktops.

**Faixa de Destaque :** Identifica veículos semi-novos com uma faixa destacada.

## 🤝 Contribuições
Se você quiser contribuir para este projeto, fique à vontade para abrir uma issue ou enviar um pull request. Toda ajuda é bem-vinda! 😊

## 📜 Licença
Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](/LICENSE) para mais detalhes.

## 🙌 Agradecimentos
- Ao EmailJS por simplificar a integração de envio de e-mails.
- Ao Tailwind CSS por tornar a estilização rápida e eficiente.
- A todos que me apoiaram durante o desenvolvimento deste projeto!
---
🚀 Pronto para dar uma volta no código? Clone o repositório e comece a explorar! 🚗✨
