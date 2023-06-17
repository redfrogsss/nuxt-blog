---
title: React Route v6.8.0 Setup
author: Jacky FAN
created_date: 2023-01-30 18:05:21
tags: [React, React Route]
---

Every several months when I want to set up [React Route](https://reactrouter.com/en/main/start/tutorial) in my React project, the setup process is always different from the previous one. Therefore, I am writing a quick memo to note the setup of React Route and its basic usage.

## Setup React Route

```bash
cd myReactProject
yarn add react-router-dom@6 # currently v6.8.0
nvim src/App.tsx	# or any file you want to put it in
```

### App.tsx

```ts
import "./App.css";

// 1. Insert this import
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HomePage, NewPage } from "./pages";

// 2. Create new Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/newPage",
    element: <NewPage />,
  },
]);

function App() {
    // 3. Insert Router Provider
    return <RouterProvider router={router} />;
}

export default App;

```

## Basic Usage

```ts
import { Link, useNavigate } from "react-router-dom";

// Example of a link in React Router
const ExampleLink = () => {
  return <Link to="/newPage">Click Me</Link>
}

// Example of a navigate button in React Router
const ExampleButton = () => {
  const navigate = useNavigate();

  return <button onClick={()=>{navigate("/newPage")}}>Click me</button>
}
```

Reference: [Tutorial - React Route](https://reactrouter.com/en/main/start/tutorial)
