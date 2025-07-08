# React Hook Notes

## useRef

- useRef is used to access DOM nodes directly (like document.getElementById).
- Updating useRef.current.value does not re-render the component.
- Great for handling:
  - form inputs
  - focus management
  - scroll positions
  - storing mutable values (like timers, previous state)

✅ When the value stored in useRef changes, the component does not re-render, even though the value itself is updated.

### ✅ useRef vs useState

| Feature                                                   | `useState` | `useRef` |
|-----------------------------------------------------------|------------|----------|
| Triggers re-render                                        | ✅ Yes     | ❌ No    |
| Persists between renders                                  | ✅ Yes     | ✅ Yes   |
| Use for rendering UI                                      | ✅ Yes     | ❌ No    |
| Use for mutable values (like timer refs, previous values) | ❌ No      | ✅ Yes   |

---

## forwardRef Hook

- forwardRef is used to pass a ref from a parent to a child component, allowing the parent to directly access the child’s underlying DOM element or instance.

---

## useId Hook

- useId provides a unique and consistent ID for each component instance.
- Use it for generating id attributes in forms or ARIA properties to ensure accessibility.

## context API

## useReducer Hook

## React.memo

## useMemo Hook
