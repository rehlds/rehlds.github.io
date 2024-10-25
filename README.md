# 📚 ReHLDS Documentation

This repository contains the documentation for the ReHLDS project, built using [Docusaurus](https://docusaurus.io/).

## Prerequisites

- Node.js version 18 or higher
- NPM (comes with Node.js)

## Getting Started

1. Clone the repository

2. Install the dependencies
```bash
    npm install
```
3. Start the local development server
```bash
    npm run start
```
This will launch the documentation at `http://localhost:3000` with hot reloading enabled. Any changes made to the content will automatically refresh the browser.

## Available Scripts

- **docusaurus**: Runs the Docusaurus CLI.
- **start**: Starts the development server.
- **build**: Builds the static website for production.
- **swizzle**: Customizes the Docusaurus theme.
- **deploy**: Deploys the website (requires configuration).
- **clear**: Cleans up the cached data and files.
- **serve**: Serves the production build locally.
- **write-translations**: Prepares translation files.
- **write-heading-ids**: Generates heading IDs for markdown.
- **typecheck**: Runs TypeScript type checking.

## Building for Production

To create a production build of the documentation:
```npm
    npm run build
```
The output will be in the `build` directory, which can be served by any static site hosting service.

## Deployment

To deploy the documentation site, make sure to configure the deployment settings in `docusaurus.config.js` and run:

```npm
    npm run deploy
```
## Type Checking

To check for TypeScript errors, run:
```npm
    npm run typecheck
```
This will ensure that all TypeScript code adheres to type definitions.

## Browser Support

This project follows the [browserslist](https://github.com/browserslist/browserslist) specification to support modern browsers in production and the last few versions of major browsers in development.

## Contributing

Feel free to contribute to the documentation by submitting pull requests. Please follow the contribution guidelines and ensure that your changes pass all checks before submitting.
