# MD Aftab Portfolio

A responsive, dependency-free portfolio recreated from the provided black, white, and deep-red portfolio references. It is ready to open directly in VS Code and also works with Vite if you want a local development server.

## Run it in VS Code

### Fastest option: VS Code Live Server

1. Open this folder in VS Code.
2. Install the **Live Server** extension if you do not already have it.
3. Right-click `index.html` and choose **Open with Live Server**.

### Optional: Vite

1. Open the integrated terminal.
2. Install the package:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal.

## Build for deployment

```bash
npm run build
```

The production files will be written to `dist/`.

## Easy edits

- Page content and section order: `script.js`
- Colors, typography, responsive layout, and animations: `src/styles.css`
- Hero portrait: `public/portrait.jpg`

The portrait is a cropped asset from the supplied reference image because the upload contained the full screenshot rather than a separate original portrait file.
