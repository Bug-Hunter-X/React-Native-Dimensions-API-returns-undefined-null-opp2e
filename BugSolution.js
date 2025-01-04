import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const BugSolution = () => {
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    const { width, height } = Dimensions.get('window');
    setDimensions({ width, height });
  }, []);

  if (!dimensions) {
    return <Text>Loading dimensions...</Text>;
  }

  return (
    <View>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

export default BugSolution;