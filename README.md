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
```bash
── .gitignore
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── public
    ├── FEED.png
    ├── assets
    │   └── images
    │   │   ├── facebook-icon.svg
    │   │   ├── gas-station-petrol-station-svgrepo-com.svg
    │   │   ├── gearshift-shift-svgrepo-com (1).svg
    │   │   ├── gearshift-shift-svgrepo-com.svg
    │   │   ├── img1.jpeg
    │   │   ├── img2.jpeg
    │   │   ├── img3.jpeg
    │   │   ├── img4.jpeg
    │   │   ├── img5.jpeg
    │   │   ├── img6.jpeg
    │   │   ├── img7.jpeg
    │   │   ├── img8.jpeg
    │   │   ├── information-button-svgrepo-com.svg
    │   │   ├── instagram-icon.svg
    │   │   ├── odometer-svgrepo-com.svg
    │   │   └── whatsapp-icon.svg
    ├── index.html
    ├── logo-mm.png
    ├── manifest.json
    └── robots.txt
├── src
    ├── App.css
    ├── App.test.tsx
    ├── App.tsx
    ├── assets
    │   └── images
    │   │   ├── FEED.png
    │   │   ├── logo-mm.png
    │   │   └── whatsapp-icon.svg
    ├── components
    │   ├── ContactMap.tsx
    │   ├── ContactSection.tsx
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   ├── HeroSection.tsx
    │   ├── InventorySection.tsx
    │   ├── ServiceSection.tsx
    │   └── VehicleCard.tsx
    ├── data
    │   └── vehicles.json
    ├── index.css
    ├── index.tsx
    ├── logo.svg
    ├── react-app-env.d.ts
    ├── reportWebVitals.ts
    ├── setupTests.ts
    └── types
    │   └── types.ts
├── tailwind.config.js
└── tsconfig.json        # Este arquivo :)
```
## 🚀 Como Executar o Projeto
Siga as etapas abaixo para clonar e executar o projeto localmente:

### 1. Clonar o Repositório:
```bash
git clone https://github.com/Drufontael/carshop-LP.git
cd carshop-LP
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

**5.Faixa de Destaque :** Identifica veículos semi-novos com uma faixa destacada.

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
