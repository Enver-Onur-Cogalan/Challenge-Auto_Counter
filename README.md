# Auto Counter with Flashing Effect

This is a simple React Native component that functions as an **auto-incrementing counter** while also implementing a **blinking screen effect** every 30 seconds.

## 📌 Features
- ⏳ Increments a counter every **1 second**.
- 🔴 Makes the screen flash **red** for 1.6 seconds (8 blinks at 200ms intervals) every **30 seconds**.
- 🎨 Simple styling with **React Native's `StyleSheet`**.

---

## 🛠️ Installation & Setup
1. Make sure you have **React Native** installed on your system.
2. Clone this repository or copy the `Timer.js` component into your project.
3. Import and use the component inside your application.

```jsx
import Timer from './Timer';

const App = () => {
  return <Timer />;
};

export default App;
```

---

## 📜 Code Explanation

### **1️⃣ Counter Logic**
- The `seconds` state updates **every second** using `setInterval` inside a `useEffect` hook.

```javascript
useEffect(() => {
  const interval = setInterval(() => {
    setSeconds((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(interval); // Clears interval when the component unmounts
}, []);
```

### **2️⃣ Blinking Effect Every 30 Seconds**
- The component listens for `seconds` changes.
- Every **30 seconds**, the background color alternates between `white` and `red` for **8 blinks (1.6 sec total)**.

```javascript
useEffect(() => {
  if (seconds > 0 && seconds % 30 === 0) {
    setIsFlashing(true);
    let flashCount = 0;

    const flashInterval = setInterval(() => {
      setBackgroundColor((prev) => (prev === 'white' ? 'red' : 'white'));
      flashCount++;

      if (flashCount >= 8) { // Stops flashing after 8 cycles
        clearInterval(flashInterval);
        setBackgroundColor('white');
        setIsFlashing(false);
      }
    }, 200); // 200ms interval for rapid blinking
  }
}, [seconds]);
```

---

## 🎨 Styling
- Centers the counter text using `flexbox`.
- Uses a **dynamic background color** based on the blinking effect.

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 42,
    fontWeight: 'bold',
  },
});
```

---

## 🚀 Usage
- Run the React Native project.
- Observe the counter increasing every second.
- Every **30 seconds**, the screen will flash **red** for 1.6 seconds.

### 🔥 Enjoy your flashing auto counter! 🚀
