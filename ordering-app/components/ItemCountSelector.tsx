interface ItemCountSelectorProps {}
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "@ui-kitten/components";

interface ItemCountSelectorProps {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
  onValueChange: Function;
}

const ItemCountSelector: React.FC<ItemCountSelectorProps> = ({
  initialValue = 0,
  step = 1,
  min = 0,
  max = Infinity,
  onValueChange,
}) => {
  // Initialize the state with the initial value
  const [value, setValue] = useState(initialValue);

  // Function to handle incrementing the value
  const incrementValue = () => {
    const newValue = value + step;
    if (newValue <= max) {
      setValue(newValue);
      if (onValueChange) {
        onValueChange(newValue);
      }
    }
  };

  // Function to handle decrementing the value
  const decrementValue = () => {
    const newValue = value - step;
    if (newValue >= min) {
      setValue(newValue);
      if (onValueChange) {
        onValueChange(newValue);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button size="tiny" onPress={decrementValue}>
        -
      </Button>
      <Text style={styles.valueText}>{value}</Text>
      <Button size="tiny" onPress={incrementValue}>
        +
      </Button>
    </View>
  );
};

// Define some styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  valueText: {
    fontSize: 18,
    width: 30,
    textAlign: "center",
  },
});

export default ItemCountSelector;
