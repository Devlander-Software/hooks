![Devlander Hooks Collection Header](https://github.com/Devlander-Software/hooks/raw/main/media/images/react-hooks-devlander-header-thumb.png)

<a href="https://twitter.com/intent/tweet?button_hashtag=devlanderhooks" target="_parent">
  <img alt="#DevlanderHooks" src="https://img.shields.io/twitter/url?color=%2308a0e9&label=DevlanderHooks&style=social&url=https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Fbutton_hashtag%DevlanderHooks">
</a>
<a href="https://bit.ly/devlander-discord-invite" target="_parent">
  <img alt="Join Devlander on Discord" src="https://img.shields.io/badge/Discord-Devlander-%235865F2" />
</a>

<a href="https://www.npmjs.com/package/@devlander/hooks" target="_parent">
  <img alt="npm downloads" src="https://img.shields.io/npm/dm/@devlander/hooks.svg" />
</a>

<a href="https://github.com/orgs/Devlander-Software/discussions">
  <img alt="Join the discussion on Github" src="https://img.shields.io/badge/Github%20Discussions%20%26%20Support-Chat%20now!-blue" />
</a>

<a href="https://bit.ly/devlander-twitch">
  <img alt="Join Devlander on Twitch" src="https://img.shields.io/twitch/status/devlander" />
</a>

<a href="https://bit.ly/landonwjohnson-on-twitter" target="_parent">
  <img alt="Follow Landon Johnson On Twitter" src="https://img.shields.io/twitter/follow/landonwjohnson.svg?style=social&label=Follow" />
</a> 


<a href="https://bit.ly/landonwjohnson-on-twitter" target="_parent">
  <img alt="Wakatime Devlander hooks" src="https://wakatime.com/badge/user/bd50b6c5-e0ca-4937-83b3-ab2d13adbc73/project/018b1ae9-e146-4ac3-88fb-6e3097c4064c.svg" />
</a> 


[![Netlify Status](https://api.netlify.com/api/v1/badges/4e01eb85-7cd6-41a7-9f23-ec7676404a94/deploy-status)](https://app.netlify.com/sites/devlander-react-hooks/deploys)

# Devlander React Native Hooks Collection

## Introduction

The Devlander React Native Hooks Collection is a comprehensive library of React Native hooks, designed for seamless integration and addressing common development challenges. This collection streamlines your development process, offering versatile, cross-platform solutions for a variety of use cases.

## Featured Hooks

- **useScrollControl**: Manage scrolling behavior in your application.
- **useScreenDimensions**: Access screen dimensions for responsive designs.
- **useVisibilitySensor**: Detect when an element is visible on the screen.

## Installation

You can install the Devlander React Native Hooks Collection using npm or yarn:

npm
```bash
npm install @devlander/hooks
```

or

yarn
```bash
yarn add @devlander/hooks
```

## Usage

Each hook in the collection is designed for easy integration. Here are examples of how to use some of our featured hooks:

### useScrollControl
```typescript
// ScrollControlComponent.tsx
import React from 'react';
import { Button, View } from 'react-native';
import { useScrollControl } from '@devlander/hooks'; // Adjust the import path as needed

const ScrollControlComponent = () => {
  const { disableScroll, enableScroll } = useScrollControl();

  return (
    <View>
      <Button title="Disable Scrolling" onPress={disableScroll} />
      <Button title="Enable Scrolling" onPress={enableScroll} />
      <View style={{ height: 1000, backgroundColor: '#f0f0f0' }}>
        <Text>Scroll down to see more content...</Text>
      </View>
    </View>
  );
};

export default ScrollControlComponent;
```

### useScreenDimensions
```typescript
// ExampleComponent.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useScreenDimensions } from '@devlander/hooks'; // Adjust the import path as needed

const ExampleComponent = () => {
  const { width, height } = useScreenDimensions();

  return (
    <View style={styles.container}>
      <Text>Screen Width: {width}</Text>
      <Text>Screen Height: {height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExampleComponent;
```

### useVisibilitySensor
```typescript
// MyVisibilityComponent.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useVisibilitySensor } from '@devlander/hooks'; // Adjust import path

const MyVisibilityComponent = () => {
  const viewRef = useVisibilitySensor(isVisible => console.log(`Is Visible: ${isVisible}`));

  return (
    <View ref={viewRef} style={{ height: 100, width: 100, backgroundColor: 'blue' }}>
      <Text>Visibility Tracking Component</Text>
    </View>
  );
};

export default MyVisibilityComponent;
```

## Notes
- Follow platform-specific guidelines for React Native implementations.

## License

This package is open-source, available under the MIT License.


### [Become a Sponsor!](https://bit.ly/sponsor-landonjohnson-github/)

**To do**
write documentation on the providers and how you can tie them into the hook
