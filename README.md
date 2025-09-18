# 🏋️‍♂️ BE220 - teste prático

## � Tecnologias Utilizadas

- **Ionic 7.2.1** - Framework mobile híbrido
- **Angular 18** - Framework frontend com componentes standalone
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **Swiper.js** - Biblioteca para carrosséis
- **Ionicons** - Biblioteca de ícones

## � Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes)
- **Ionic CLI** - Instalar globalmente:
  ```bash
  npm install -g @ionic/cli
  ```

## 📦 Como Executar

### 1. Clonar o Repositório
```bash
git clone https://github.com/cristian-santos/be220-test.git
cd be220-test
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Executar o Projeto
```bash
# Iniciar servidor de desenvolvimento
ionic serve

# Ou usando npm
npm start
```

O aplicativo será aberto automaticamente no navegador em `http://localhost:8100`

## 📁 Estrutura do Projeto

```
be220/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizáveis
│   │   │   ├── header/          # Cabeçalho com perfil do usuário
│   │   │   ├── personal-online/ # Seção de personal training
│   │   │   ├── programs/        # Componente de programas
│   │   │   └── contents/        # Biblioteca de conteúdos
│   │   ├── home/               # Página principal
│   │   └── app.component.ts    # Componente raiz com navegação
│   ├── assets/                 # Arquivos estáticos (imagens, ícones)
│   ├── global.scss            # Estilos globais e temas
│   └── main.ts               # Bootstrap da aplicação
├── package.json              # Dependências do projeto
└── README.md                # Este arquivo
```

## 🎨 Principais Componentes

### Header Component
Cabeçalho personalizado com perfil do usuário, menu de navegação e botões de ação.

### Personal Online Component  
Seção com carrossel de treinos disponíveis para personal training online.

### Programs Component
Listagem de programas de exercícios com cards interativos.

## 🛠️ Comandos Úteis

```bash
# Build para mobile
ionic capacitor build android
ionic capacitor build ios
```

## 🔧 Configurações

### Ícones
Os ícones são registrados em `src/main.ts`. Para adicionar novos ícones, importe de `ionicons/icons` e adicione na função `addIcons()`.

### Estilos
- **Estilos globais**: `src/global.scss`
- **Tema**: Dark theme com variáveis CSS customizadas
- **Fonte**: Roboto (Google Fonts)

## 👨‍� Autor

**Cristian Santos** - Desenvolvedor Mobile

---

*Projeto desenvolvido para demonstrar habilidades em Ionic/Angular*