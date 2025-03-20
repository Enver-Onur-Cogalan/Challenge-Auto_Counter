import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Timer = () => {
  // Counter for state
  const [seconds, setSeconds] = useState(0);
  const [isFashing, setIsFlashing] = useState(false);
  // State to control the blinking effect
  const [backgroundColor, setBackgroundColor] = useState('white');

  // useEffect which increments the counter value every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // If the component is unmounted, the interval is cleared
  }, []);

  // useEffect to make the screen flash red every 30 seconds
  useEffect(() => {
    if (seconds > 0 && seconds % 30 === 0) {
      setIsFlashing(true);
      let flashCount = 0; // Keeps track of the number of blinks

      const flashInterval = setInterval(() => {
        setBackgroundColor((prev) => (prev === 'white' ? 'red' : 'white'));
        flashCount++;

        // Create a flashing effect by changing the background at 200ms intervals
        if (flashCount >= 8) {
          clearInterval(flashInterval);
          setBackgroundColor('white');
          setIsFlashing(false);
        }
      }, 200);

    }
  }, [seconds]); // This effect is controlled as seconds change

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.counter}>Auto Counter: {seconds}</Text>
    </View>
  );
};

// Style definitions
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 42,
    fontWeight: 'condensed',
  },
});

export default Timer;
