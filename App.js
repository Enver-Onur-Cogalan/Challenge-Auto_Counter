import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isFashing, setIsFlashing] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds > 0 && seconds % 30 === 0) {
      setIsFlashing(true);
      let flashCount = 0;

      const flashInterval = setInterval(() => {
        setBackgroundColor((prev) => (prev === 'white' ? 'red' : 'white'));
        flashCount++;

        if (flashCount >= 8) {
          clearInterval(flashInterval);
          setBackgroundColor('white');
          setIsFlashing(false);
        }
      }, 200);

    }
  }, [seconds]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.counter}>Auto Counter: {seconds}</Text>
    </View>
  );
};

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
