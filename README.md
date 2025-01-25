# Garuda UI

Garuda UI is a React-based user interface for the Garuda API monitoring and management service. This project uses Vite for fast development and build processes, along with Tailwind CSS for styling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with Garuda UI, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/garuda-ui.git
cd garuda-ui
npm install
```

## Usage

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server and open the application in your default browser.

## Project Structure

```
garuda-ui/
├── src/
│   ├── api/
│   ├── components/
│   ├── hooks/
│   ├── Pages/
│   ├── redux/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── garuda.svg
│   └── index.html
├── .gitignore
├── jsconfig.json
├── netlify.toml
├── package.json
├── README.md
└── tailwind.config.js
```

- **src/**: Contains the source code for the application.
  - **api/**: API service functions.
  - **components/**: Reusable UI components.
  - **hooks/**: Custom React hooks.
  - **Pages/**: Page components for different routes.
  - **redux/**: Redux slices and store configuration.
  - **App.jsx**: Main application component.
  - **main.jsx**: Entry point for the application.
  - **index.css**: Global CSS file.
- **public/**: Contains static assets.
- **.gitignore**: Specifies files to be ignored by Git.
- **jsconfig.json**: Configuration for JavaScript project.
- **netlify.toml**: Configuration for Netlify deployment.
- **package.json**: Project dependencies and scripts.
- **README.md**: Project documentation.
- **tailwind.config.js**: Tailwind CSS configuration.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run serve`

Serves the production build from the `dist` folder.

## Configuration

### Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```
VITE_API_BASE_URL=https://api.yourdomain.com
```

### Tailwind CSS

Tailwind CSS is configured in the `tailwind.config.js` file. You can customize the theme, colors, and other settings as needed.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
