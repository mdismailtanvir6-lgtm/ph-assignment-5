# Tech Stack Builder

This project is a React app that lets users browse a list of technologies and build their own personal stack. Each technology card can be added to the selected stack, and the user can remove individual items or clear the entire stack.

The app uses React components, local state, conditional rendering, and JSON data to create a simple but interactive UI.

## Project Overview

The main idea of this assignment is to practice:

- rendering data from a JSON file
- creating reusable React components
- managing state with `useState`
- communicating between parent and child components
- showing empty and filled states with conditional rendering
- adding a clean and responsive design

## Features

- Display technology cards from `public/data.json`
- Add technologies to the user’s stack
- Prevent duplicate items from being added twice
- Remove a single technology from the stack
- Remove all selected technologies
- Show a friendly empty-state message when the stack is empty
- Display success and warning notifications with `react-toastify`
- Responsive layout for desktop and mobile screens

## Technologies Used

- React
- Vite
- JavaScript
- Tailwind CSS
- JSON data

## Project Structure

- `src/App.tsx` — main app layout
- `src/components/layout/Navbar.jsx` — top navigation
- `src/components/layout/Footer.jsx` — page footer
- `src/components/hero/Banner.jsx` — hero section
- `src/components/technology/Technologies.jsx` — main logic and state
- `src/components/technology/AvailableTechnologies.jsx` — all available technologies
- `src/components/technology/YourStack.jsx` — selected technologies list
- `public/data.json` — technology data source

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal to view the project in the browser.

## How This Project Works

- The app loads technology data from `public/data.json`.
- The list of technologies is shown on the screen.
- When the user clicks a technology, it is added to the stack.
- The selected items are stored in React state.
- The UI updates automatically whenever the stack changes.
- If the stack is empty, the app shows an empty message instead of a list.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It is used in React because it makes components easier to read and helps us build UI clearly and quickly.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component, while state is data stored inside a component and can change over time. Props are read-only for the child, but state can be updated by the component itself.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook lets a component keep and update its own data. In this project, I used it in `Technologies.jsx` to store the selected stack and to manage the list of technologies added by the user.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs after a component renders. It is commonly used for side effects like fetching data from an API or loading JSON. In this kind of project, it is needed to load the data after the page mounts and then save it in state so the UI can show it.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A `key` helps React identify each item in a list. Without a unique key, React may have trouble updating the correct items when the list changes, which can cause UI bugs or incorrect re-rendering.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI depending on a condition. In this project, I used it in `YourStack.jsx` to show the message “Your stack is empty.” when the `items.length === 0` condition is true.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props, like ` <YourStack items={stack} onRemoveItem={handleRemoveItem} /> `. The child can send information back by calling a function that was passed from the parent as a prop, such as `onRemoveItem(id)`.

## Conclusion

This project shows how React components work together to build a useful UI from data, state, and user interaction. It is a good example of how modern frontend apps manage information and update the interface in real time.
