# 🛒 Item Cart

A modern, responsive web application for managing items with image uploads, built using **React**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- **Add Items**: Easily add new items with details and images.
- **View Items**: Browse all items in a beautiful card layout.
- **Image Upload**: Upload and preview item images instantly.
- **Responsive Design**: Looks great on all devices.
- **TypeScript**: Type-safe code for reliability and maintainability.
- **Modern UI**: Built with Tailwind CSS for a sleek, customizable interface.

---

## 🚀 Demo

> https://item-cart-live.netlify.app/

---

## 🏗️ Project Structure

```
project/
├── src/
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Main app pages (AddItem, ViewItems)
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions (e.g., image handling)
│   ├── App.tsx          # App entry point
│   └── main.tsx         # React DOM rendering
├── public/
├── index.html
├── tailwind.config.js
├── package.json
└── ...
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/sreyangshu05/item-cart.git
cd item-cart

# Install dependencies
npm install
# or
yarn install
```

### Running the App

```bash
# Start the development server
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or as indicated in your terminal).

---

## 🧩 Usage

- **Add Item**: Click on "Add Item" in the navigation bar, fill in the details, and upload an image.
- **View Items**: Navigate to "View Items" to see all added items displayed in a card format.
- **Edit/Delete**: (If implemented) Click on an item card to edit or remove it.

---

## 🖌️ Tech Stack

- **Frontend**: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

---

## 📂 Folder Highlights

- `src/components/`:  
  - `ImageUpload.tsx`: Handles image selection and preview.
  - `ItemCard.tsx`: Displays item details in a card.
  - `ItemModal.tsx`: Modal for item details or editing.
  - `Navigation.tsx`: App navigation bar.
- `src/pages/`:  
  - `AddItem.tsx`: Form to add new items.
  - `ViewItems.tsx`: List and display all items.
- `src/hooks/useItems.ts`: Custom hook for item state management.
- `src/types/Item.ts`: TypeScript types for items.
- `src/utils/imageUtils.ts`: Utility functions for image processing.

---

## 🧑‍💻 Contributing

Contributions are welcome! Please open issues and submit pull requests for new features, bug fixes, or improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

> _Made with ❤️ by [Sreyangshu Sarkar](https://github.com/sreyangshu05)_ 
