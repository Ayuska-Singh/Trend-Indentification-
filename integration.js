import React from 'react';
import { ViroARSceneNavigator } from 'react-viro';

const InitialARScene = require('./ARScene');

const ARApp = () => {
  return (
    <ViroARSceneNavigator
      initialScene={{ scene: InitialARScene }}
      apiKey="YOUR_API_KEY_HERE"
    />
  );
};

export default ARApp;
