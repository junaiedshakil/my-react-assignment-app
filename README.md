1.What is JSX, and why is it used?
Answer : JSX is a syntax extension for JavaScript, commonly used with React, that allows writing HTML-like code within JavaScript to define UI components. It simplifies creating and managing dynamic, reusable UI elements by combining markup and logic in a single, readable format.


2.What is the difference between State and Props?
Answer : State is mutable, internal data managed by a component to handle dynamic changes, like user inputs. Props are immutable data passed from parent to child for configuration. State drives internal updates; props enable communication.

3.What is the useState hook, and how does it work?
Answer : The useState hook in React lets functional components manage local state. You call useState(initialValue) to get a state variable and an update function; updating the state with this function triggers a re-render to reflect changes.

4.How can you share state between components in React?
Answer : Share state by lifting it up to a parent component and passing it as props to children, or use Context API to provide state globally without prop drilling. For complex apps, use state management libraries like Redux or Zustand.


5.How is event handling done in React?
Answer : In React, event handling is done by passing event handler functions as props to JSX elements, using camelCase event names (e.g., onClick). These functions, often defined with useState or other logic, update state or perform actions when triggered, and React’s synthetic events normalize browser differences.1
