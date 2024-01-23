![Devlander Hooks Collection Header](https://github.com/Devlander-Software/hooks/raw/main/media/images/react-hooks-github-cover.jpg)

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

# Devlander React Hooks Collection

## Introduction

The Devlander React Hooks Collection is a comprehensive library of React and React Native hooks, designed for seamless integration and addressing common development challenges. This collection streamlines your development process, offering versatile, cross-platform solutions for a variety of use cases.

## Featured Hooks

- **useScrollControl**: Manage scrolling behavior in your application.
- **useScreenDimensions**: Access screen dimensions for responsive designs.
- **useVisibilitySensor**: Detect when an element is visible on the screen.
- **useOnClickByStyle**: Handle click events based on specific styles or classes.

## Installation

You can install the Devlander React Hooks Collection using npm or yarn:

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
// ScrollControlComponent.jsx
import React from 'react';
import { useScrollControl } from '@devlander/hooks'; // Adjust the import path as needed

const ScrollControlComponent = () => {
  const { disableScroll, enableScroll } = useScrollControl();

  return (
    <div>
      <button onClick={disableScroll}>Disable Scrolling</button>
      <button onClick={enableScroll}>Enable Scrolling</button>
      <div style={{ height: '150vh', backgroundColor: '#f0f0f0' }}>
        <p>Scroll down to see more content...</p>
      </div>
    </div>
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
  const { width, height } = useScreenDimensions({ scaleType: 'window' });

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

### useOnClickByStyle
```typescript
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {useOnPressByStyle} from '@devlander/hooks';

const ExampleComponent = () => {
  const onPressFunction = () => console.log('Button with special style pressed!');

  const getOnPress = useOnPressByStyle({
    styleName: 'specialButton', // The specific style key to look for
    onPress: onPressFunction,
  });

  return (
    <View>
      <TouchableOpacity
        style={styles.specialButton}
        onPress={getOnPress(styles.specialButton)}
      >
        <Text>Button with Special Style</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.regularButton}
        onPress={getOnPress(styles.regularButton)}
      >
        <Text>Regular Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  specialButton: {
    // Define the style with the key 'specialButton'
  },
  regularButton: {
    // Regular button styles
  },
});

export default MyComponent;

```

## Notes

- Ensure to run these hooks from the root of your project.
- Follow platform-specific guidelines for React Native and web implementations.

## License

This package is open-source, available under the MIT License.

---

This template follows the structure of your provided example, adapting it to fit the specifics of the Devlander React Hooks Collection. You can expand each section with more details and code examples as needed.