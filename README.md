1. useRef is used here to access DOM nodes directly (like document.getElementById) — very useful in forms when you don’t need re-renders.

Updating useRef.current.value does not re-render the component.

Great for simple form access or managing focus, scroll, etc.


2. When the value stored in useRef changes, the component does not re-render, even though the value itself is updated.


| Feature                                                   | `useState` | `useRef` |
| --------------------------------------------------------- | ---------- | -------- |
| Triggers re-render                                        | ✅ Yes      | ❌ No     |
| Persists between renders                                  | ✅ Yes      | ✅ Yes    |
| Use for rendering UI                                      | ✅ Yes      | ❌ No     |
| Use for mutable values (like timer refs, previous values) | ❌ No       | ✅ Yes    |
