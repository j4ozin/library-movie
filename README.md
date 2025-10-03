# 🎬 Library Movie - Angular Movie Search App

> 🚀 **Aplicação Angular responsiva para busca de filmes com integração à API OMDB**

![Angular](https://img.shields.io/badge/Angular-17+-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![Responsive](https://img.shields.io/badge/Design-Responsive-green?style=for-the-badge)

## ✨ **Funcionalidades**

- 🔍 **Busca inteligente** de filmes por nome
- 📱 **Design responsivo** (Mobile, Tablet, Desktop)
- 🎭 **Detalhes completos** do filme (sinopse, elenco, diretor)
- ⚡ **Estados de loading** com animações suaves
- 🛡️ **Tratamento robusto** de erros
- 🎨 **Interface moderna** com background customizado
- 📦 **Modal interativo** para detalhes do filme
- 🌟 **Animações fluidas** e efeitos visuais

## 🖼️ **Preview**

### 💻 Interface Principal
- Design moderno com background "THE MACHINE"
- Cards responsivos para filmes
- Sistema de busca intuitivo

### 📱 Responsividade
- **Mobile First**: Otimizado para dispositivos móveis
- **Breakpoints**: 320px, 480px, 768px, 1200px
- **Grid Adaptativo**: Colunas se ajustam automaticamente

## 🚀 **Como Executar**

### **📋 Pré-requisitos:**
- Node.js 18+
- Angular CLI 17+
- Chave da API OMDB (gratuita)

### **⚡ Instalação:**
```bash
# 1. Clonar o repositório
git clone https://github.com/j4ozin/library-movie.git
cd library-movie

# 2. Instalar dependências
npm install

# 3. Configurar API (ver seção abaixo)

# 4. Executar a aplicação
ng serve
# ou
npm start

# 5. Abrir no navegador
http://localhost:4200
```

## 🔧 **Configuração da API**

### **🔑 Obter Chave da API:**
1. Acesse: [OMDB API](http://www.omdbapi.com/apikey.aspx)
2. Registre-se gratuitamente
3. Obtenha sua chave da API

### **⚙️ Configurar no Projeto:**
```typescript
// src/app/services/movie.service.ts
private apiKey = 'SUA_CHAVE_AQUI'; // 🔑 Substitua pela sua chave
```

## 🛠️ **Tecnologias Utilizadas**

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| ![Angular](https://img.shields.io/badge/-Angular-red?logo=angular) | 17+ | Framework principal |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?logo=typescript) | 5+ | Linguagem tipada |
| ![RxJS](https://img.shields.io/badge/-RxJS-purple?logo=reactivex) | 7+ | Programação reativa |
| ![CSS3](https://img.shields.io/badge/-CSS3-blue?logo=css3) | 3 | Estilos e animações |
| ![HTML5](https://img.shields.io/badge/-HTML5-orange?logo=html5) | 5 | Estrutura semântica |

## 📁 **Estrutura do Projeto**

```
📂 src/app/
├── 📄 models/movie.model.ts      # 📊 Interfaces TypeScript
├── 📄 services/movie.service.ts  # 🔧 Comunicação com API
├── 📄 app.component.html         # 🖥️ Template principal
├── 📄 app.component.css          # 🎨 Estilos responsivos
├── 📄 app.component.ts           # 🧠 Lógica da aplicação
└── 📁 assets/images/             # 🖼️ Recursos visuais
```

## 🎯 **Funcionalidades Detalhadas**

### **🔍 Sistema de Busca**
- ✅ Validação de entrada em tempo real
- ✅ Busca por tecla Enter
- ✅ Estados de loading animados
- ✅ Tratamento de erros amigável

### **📱 Design Responsivo**
- ✅ **Mobile First** (320px+)
- ✅ **Tablet** (768px+) 
- ✅ **Desktop** (1200px+)
- ✅ **Grid flexível** com auto-fill

### **🎭 Detalhes do Filme**
- ✅ Modal overlay full-screen
- ✅ Sinopse completa
- ✅ Informações técnicas
- ✅ Poster em alta qualidade
- ✅ Animações de abertura/fechamento

### **🎨 Interface Visual**
- ✅ Background customizado "THE MACHINE"
- ✅ Overlay semi-transparente
- ✅ Gradientes nos botões
- ✅ Sombras e elevações
- ✅ Animações CSS suaves

## 🎨 **Design System**

### **🎨 Paleta de Cores:**
```css
--primary-color: #e69020;    /* Laranja principal */
--secondary-color: #ec7b11;  /* Laranja escuro */
--accent-color: #f093fb;     /* Rosa/Roxo */
--text-dark: #2d3748;        /* Cinza escuro */
--text-light: #ffffff;       /* Branco */
```

### **📐 Breakpoints:**
- **Mobile**: 320px - 479px
- **Mobile Large**: 480px - 767px  
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

## 🚀 **Deploy**

### **🌐 Vercel (Recomendado):**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Build e deploy
ng build --prod
vercel --prod
```

### **🌍 Netlify:**
```bash
# Build para produção
ng build --prod

# Arrastar pasta dist/ para Netlify
```

## 🤝 **Contribuição**

### **🔄 Como Contribuir:**
1. **Fork** o projeto
2. **Crie** uma branch (`git checkout -b feature/nova-funcionalidade`)
3. **Commit** suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
5. **Abra** um Pull Request

### **🐛 Reportar Issues:**
- Use as [Issues](../../issues) do GitHub
- Inclua **screenshots** quando relevante
- Descreva **passos para reproduzir**
- Mencione **versão do browser/sistema**

## 📊 **Roadmap**

### **🔮 Próximas Features:**
- [ ] 🔖 Sistema de favoritos persistente
- [ ] 🎭 Filtros por gênero/ano
- [ ] 🌙 Modo escuro/claro
- [ ] 📊 Paginação de resultados
- [ ] 🎬 Integração com trailers
- [ ] 📱 PWA (Progressive Web App)
- [ ] 🔍 Busca avançada
- [ ] 📈 Analytics de uso

## 📄 **Licença**

Este projeto está sob a licença **MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👤 **Autor**

**João Basante** - *A Besta Enjaulada* 🦁
- GitHub: [@j4ozin](https://github.com/j4ozin)
- Email: [seu-email@exemplo.com](mailto:seu-email@exemplo.com)

---

## ⭐ **Star o Projeto**

Se este projeto te ajudou ou achou interessante, deixe uma ⭐!

## 🙏 **Agradecimentos**

- [OMDB API](http://www.omdbapi.com/) - Pela API gratuita de filmes
- [Angular Team](https://angular.io/) - Pelo framework incrível
- Comunidade Open Source - Por tornar tudo isso possível

---

**🎬 Happy Coding!** 🚀

*Desenvolvido com ❤️ e ☕ por João Basante*
