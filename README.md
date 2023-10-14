# 🧑🏻‍💻 My personal website

An attempt to create a miniminal portfolio, using: [Astro](https://astro.build/).

![hqlogo](/public/blacklogo.png)

## 📚 Stack

- Platform: [Astro](https://astro.build/)
- Deployment: [Vercel](https://vercel.com/)
- Package manager: [npm](https://www.npmjs.com/)
- CSS: [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Project Structure

Inside of my Astro project, you'll see the following folders and files:

```bash
├── public/
│   ├──favicon/
│   ├── images/
│   └── robots.txt
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── utils/
│   ├── pages/
│   └── styles/
├── .env.example
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where you should place any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Running Locally

This app requires Node.js v16.15.0 or later.

```bash
git clone git@github.com:hasham-qaiser/astro-portfolio.git
cd astro-portfolio
npm install i
cd astro-portfolio
npm run dev
```
