# Frontend-Questions

1. JavaScript & TypeScript Mastery

1.1 Async Programming & Event Loop

execute `node ./1.1-asyncProgrammingEventLoop`

OUTPUT

```
   Rate limit exceeded fn: 6
   Rate limit exceeded fn: 7
   Execute fn 1
   Execute fn 2
   Execute fn 3
   Execute fn 4
   Execute fn 5
```

Results: ![1.1-asyncProgrammingEventLoop](2.2-ngrx-shopping-cart/public/Screenshot%202025-04-30%20at%207.54.17 AM.png)

1.2 Required Keys Utility Type

execute `node --experimental-transform-types 1.2-requiredKeysUtilityType.ts`

OUTPUT

```
   GameName1 has all required keys.

   Error: Missing required key category
   GameName2 is missing required keys.
```

Results: ![1.2 Required Keys Utility Type](2.2-ngrx-shopping-cart/public/Screenshot%202025-04-30%20at%208.00.26 AM.png)

1.3 Function Composition & Closures

execute `node ./1.3-functionCompositionClosures.js`

OUTPUT

```
   Result: 90000
```

Results: ![1.3 Function Composition & Closures](2.2-ngrx-shopping-cart/public/Screenshot%202025-04-30%20at%208.01.13 AM.png)

2. Angular-Focused Exercises

2.1 Change Detection, OnPush & Lifecycle Hooks

`cd angular-execise-change-detection`

Install dependencies

`npm install`

Start the dev server

`ng serve`

Local server url: `http://localhost:4200`

Results: ![2.1 Change Detection, OnPush & Lifecycle Hooks-1](angular-execise-change-detection/public/Screenshot%202025-04-24%20at%205.33.29 AM.png)

Results: ![2.1 Change Detection, OnPush & Lifecycle Hooks-2](angular-execise-change-detection/public/Screenshot%202025-04-24%20at%205.35.09 AM.png)

2.2 NgRx (or NGXS) State Handling

`cd 2.2-ngrx-shopping-cart`

Install dependencies

`npm install`

Start the dev server

`ng serve`

Local server url: `http://localhost:4200/cart`

Results: ![2.2 NgRx (or NGXS) State Handling](2.2-ngrx-shopping-cart/public/Screenshot%202025-04-24%20at%206.20.27 AM.png)

3. React-Focused Exercises

3.1 Custom Hooks & useMemo/useCallback

`cd 3.1-react-fetch-cache-app`

Install dependencies

`npm install`

Start the dev server

`npm run dev`

Local server url: `http://localhost:5173/`

Results: ![3.1 Custom Hooks & useMemo/useCallback](3.1-react-fetch-cache-app/public/Screenshot%202025-04-24%20at%206.45.21 AM.png)
Results: ![3.1 Custom Hooks & useMemo/useCallback-2](3.1-react-fetch-cache-app/public/Screenshot%202025-04-24%20at%206.46.46 AM.png)

3.2 Performance Optimization & Virtualized Lists

`cd 3.2-virtual-list-app`

Install dependencies

`npm install`

Start the dev server

`npm run dev`

Local server url: `http://localhost:5173/`

Results: ![3.2 Performance Optimization & Virtualized Lists](3.2-virtual-list-app/public/Screenshot%202025-04-24%20at%207.16.34 AM.png)

Results: ![3.2 Performance Optimization & Virtualized Lists-2](3.2-virtual-list-app/public/Screenshot%202025-04-24%20at%207.20.14 AM.png)

3.3 Higher-Order Components (HoC)

`cd 3.3-higher-order-component-app`

Install dependencies

`npm install`

Start the dev server

`npm run dev`

Local server url: `http://localhost:5173/`

Results: ![3.3 Higher-Order Components](3.3-higher-order-component-app/public/Screenshot%202025-04-24%20at%207.30.30 AM.png)

Results: ![3.3 Higher-Order Components-2](3.3-higher-order-component-app/public/Screenshot%202025-04-24%20at%207.30.41 AM.png)

4. End-to-End Frontend Integration

4.1 Micro-Frontend Router Strategy

Run Parent MFE

`cd shell`

Install dependencies

`npm install`

Start the dev server

`npm run dev`

Local server url: `http://localhost:5000/`

Run Child MFE

`cd app-a`

Install dependencies

`npm install`

Start the dev server

```
npm run build
npm run preview
```

Local server url: `http://localhost:5001/`

Results: ![Micro-Frontend Router Strategy](4.1-react-mfe/app-a/public/Screenshot%202025-04-25%20at%206.54.21 AM.png)
Results: ![Micro-Frontend Router Strategy-2](4.1-react-mfe/app-a/public/Screenshot%202025-04-25%20at%206.57.12 AM.png)

4.2 Bundle Optimization &amp; SSR Hydration

Navigate to folder
`cd 4.2-optinize-react-app`

Install dependencies:
`npm install`

Run the development server:
`npm run dev`

Access the application:
Open your browser and navigate to `http://localhost:5173`

5. Helm &amp; CI Integration

5.1 Helm Chart for SPA

simple and clean Helm chart for deploying a frontend Single Page Application (SPA) with support for:

- Optional Service

- Optional Ingress

- Custom extraEnvVars

- Reusable named templates via \_helpers.tpl

Navigate to folder
`cd 5.1-spa-helm-chart/`

5.2 Helm Hooks for Frontend Cache Busting

Navigate to folder
`cd 5.2-helm-hooks-frontend/`
