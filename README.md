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

1.2 Required Keys Utility Type

execute `node --experimental-transform-types 1.2-requiredKeysUtilityType.ts`

OUTPUT

```
   GameName1 has all required keys.

   Error: Missing required key category
   GameName2 is missing required keys.
```

1.3 Function Composition & Closures

execute `node ./1.3-functionCompositionClosures.js`

OUTPUT

```
   Result: 90000
```

2. Angular-Focused Exercises

2.1 Change Detection, OnPush & Lifecycle Hooks

`cd angular-execise-change-detection`

Install dependencies

`npm install`

Start the dev server

`ng serve`

Local server url: `http://localhost:4200`

2.2 NgRx (or NGXS) State Handling

`cd 2.2-ngrx-shopping-cart`

Install dependencies

`npm install`

Start the dev server

`ng serve`

Local server url: `http://localhost:4200/cart`

3. React-Focused Exercises

3.1 Custom Hooks & useMemo/useCallback

`cd 3.1-react-fetch-cache-app`

Install dependencies

`npm install`

Start the dev server

`npm run dev`

Local server url: `http://localhost:5173/`

3.2 Performance Optimization & Virtualized Lists

`cd 3.2-virtual-list-app`

Install dependencies

`npm install`

Start the dev server

`npm run dev`

Local server url: `http://localhost:5173/`

3.3 Higher-Order Components (HoC)

`cd 3.3-higher-order-component-app`

Install dependencies

`npm install`

Start the dev server

`npm run dev`

Local server url: `http://localhost:5173/`

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

4.2 Bundle Optimization &amp; SSR Hydration

Navigate to folder
`cd 4.2-optinize-react-app`

Install dependencies:
`npm install`

Run the development server:
`npm run dev`

Access the application:
Open your browser and navigate to `http://localhost:5173`
