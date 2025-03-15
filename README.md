# 🤖 My Portfolio (Open Source & Free to Use)

Hey there! 👋 This is my personal portfolio, but I’m making it open-source so anyone can use and customize it however they like. Whether you want to tweak it for yourself or just take inspiration, feel free to fork it. And if you find it helpful, a ⭐ would be much appreciated!

## 🛠️ Tech Stack

- **Next.js** – React framework for performance & SEO
- **Tailwind CSS** – Utility-first styling
- **SCSS** – Extra flexibility for styling
- **GSAP** – Smooth animations & transitions

## 🚀 Getting Started

### 1️⃣ Install dependencies

Using **npm**, **yarn**, or **pnpm**:

```sh
npm install
# or
yarn install
# or
pnpm install
```

### 2️⃣ Run the project locally

```sh
npm run dev
```

This will start a local server at `http://localhost:3000/`.

## 🎨 Customization

### Change Colors

Edit the color variables in **`global.scss`** to match your style.

### Add a New Section

- Create a new component inside **`components/sections/`**
- Import & use it in the page where you need it.

### Update Images

- **Hero Section:** Replace the image in `components/sections/SectionHero/index.tsx`
- **About Section:** Replace the image in `components/sections/SectionAbout/index.tsx`

### Update Skills

Modify `components/sections/SectionTools`. Skill assets can be found in **Figma** (link below).

### Edit Project Details

Update `data/projects.ts`.

- You can hardcode project details here.
- Or, if you don’t want to keep updating the file manually, use a **CDN** or a **backend** to manage project data dynamically.

## 🎨 Design Assets

All assets, including skill icons and other UI elements, can be found in **Figma**: [Figma Link](#)  
If you’re comfortable with design, you can edit them there.

## ⭐ Support

If you found this useful, feel free to fork it, customize it, or just take inspiration. And if you really liked it, consider **starring** the repo! 🌟

## ⚠️ Bugs & Accessibility

Haven't fully tested performance and accessibility yet, so if you notice any issues, feel free to DM me on my socials.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

_ReadMe assisted by ChatGPT. No AI was harmed in the making of this documentation. Probably._ 🤖
