# Gaurav Kushwaha — Portfolio

A responsive personal portfolio presenting my experience as a Software
Engineer across Java backend development and quality engineering.

## Highlights

- Backend-focused introduction and technical skills
- Professional experience with measurable achievements
- Featured development and machine-learning projects
- Responsive layouts for desktop, tablet, and mobile
- Accessible navigation and reduced-motion support
- Contact form powered by EmailJS
- Dark, low-glare visual theme

## Built With

- React 18
- React Router
- Sass
- Font Awesome
- EmailJS
- Create React App

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/gauravkkush/react-portfolio.git
cd react-portfolio
npm install
npm start
```

The development server runs at
[http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm start                 # Start the development server
npm test                  # Run tests in watch mode
npm test -- --watchAll=false  # Run tests once
npm run build             # Create an optimized production build
```

## Project Structure

```text
src/
├── componants/
│   ├── About/
│   ├── Contact/
│   ├── Experience/
│   ├── Home/
│   ├── Layout/
│   ├── Projects/
│   └── Sidebar/
├── App.js
├── App.scss
└── index.js
```

## Contact Form

The form configuration is located in
`src/componants/Contact/index.js`. Before deploying your own copy, replace the
EmailJS service ID, template ID, and public key with your own credentials.

## Production Build

```bash
npm run build
```

The deployable output is generated in the `build/` directory.

## Contact

- [LinkedIn](https://www.linkedin.com/in/gauravkkush)
- [GitHub](https://github.com/gauravkkush)
- [Email](mailto:kkushgaurav@gmail.com)
