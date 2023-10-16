## Devlander Hooks Collection 
Welcome to Devlander's library of indispensable, cross-platform hooks tailored for React and React Native development. Born out of our continuous desire for efficiency and seamless code integration, this collection showcases hooks that address common challenges we encounter in everyday development.

## Featured Hooks:
**useScrollControl**: Empower developers with the ability to control scrolling behavior.
**useScreenDimensions**: Extract webpage or screen dimensions, facilitating adaptive media query designs.
**useVisibilitySensor**: Discern if an element is in view and execute callbacks accordingly.
**useOnClickByStyle**: This hook facilitates the handling of click or press actions on specific elements within a clickable or pressable area. It ensures that the action is only triggered when the user interacts with an element having a designated className (for web) or a specific stylesheet name (for React Native).


### useScrollControl 

When a user is typing, or a menu is active, there might be a need to disable scrolling temporarily. This hook provides that functionality.

```typescript
import { useEffect, useState } from "react";
import {useScrollControl} from "@devlander/hooks"


function MainHeader() {
  const [displaySearch, setDisplaySearch] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const {enableScroll, disableScroll} = useScrollControl()

 

  const toggleMenu = () => {
    setDisplaySearch(false);
    if (menuOpened) {
      setMenuOpened(false);
      enableScroll();
    } else {
      disableScroll();
      setMenuOpened(true);
    }
  };

  useEffect(() => {
    if (menuOpened) {
      setMenuOpened(false);
      setDisplaySearch(false);
      enableScroll();
    }

    return () => {
      enableScroll(); // Ensure scrolling is enabled when the component is unmounted.
    };
  }, []); // Empty dependency array means this useEffect runs only on mount and unmount.

  return (
    <div> 
        {/* the rest of the header content */}
    </div>
  );
}

export default MainHeader;


```


### useScreenDimensions 
The useScreenDimensions hook is used for calculating the the dimensions of the screen, when doing React Native development. 
We have noticed it's crucial to keep track of the current screen size to manipulate things on the screen in real time

```typescript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {useScreenDimensions} from '@devlander/hooks';

const HalfWidthSquare: React.FC = () => {
  const { width, height } = useScreenDimensionsForNative();

  const squareSide = width / 2;

  return (
    <View style={[styles.square, { width: squareSide, height: squareSide }]} />
  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: 'blue',
    // Additional styling, if needed
  },
});

export default HalfWidthSquare;


```



### useOnClickByStyle 
The useScreenDimensions hook is used for calculating the the dimensions of the screen, when doing React Native development. 
We have noticed it's crucial to keep track of the current screen size to manipulate things on the screen in real time

Example One
```typescript

import React from 'react';
import {useOnClickByStyle} from '@devlander/hooks';

const TableRowWithAction: React.FC = () => {
    const performAction = () => {
        console.log('Div with special className was clicked!');
    };

    const handleClick = useOnClickByStyleForWeb({
        className: 'special-div',
        onClick: performAction
    });

    return (
        <table>
            <tbody>
                <tr onClick={handleClick}>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td><div className="special-div">Click Me!</div></td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableRowWithAction;

```

Example Two

```typescript
import React, { useState } from 'react';
import {useOnClickByStyle} from '@devlander/hooks';

const ModalComponent: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(true);

    const closeModal = () => {
        setModalOpen(false);
    };

    const backdropClickHandler = useOnClickByStyleForWeb({
        className: 'backdrop',
        onClick: closeModal
    });

    if (!modalOpen) return null;

    return (
        <div className="backdrop" onClick={backdropClickHandler}>
            <div className="modal">
                <h2>Modal Title</h2>
                <p>This is the modal content.</p>
                <button onClick={closeModal}>Close</button>
            </div>

            <style jsx>{`
                .backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .modal {
                    background-color: white;
                    padding: 20px;
                    border-radius: 8px;
                    width: 300px;
                    max-width: 90%;
                    position: relative;
                }
            `}</style>
        </div>
    );
};

export default ModalComponent;

```

## useVisibilitySensor
At times, you might want an element to load only when another specific item comes into the viewport or becomes visible on the screen. The useVisibilitySensor hook caters to this need


React Native Example
```typescript
import React from 'react';
import { View } from 'react-native';
import useVisibilitySensorForNative from './path-to-native-hook';

const MyComponent = () => {
  const viewRef = useVisibilitySensorForNative(isVisible => {
    console.log(`The component is currently ${isVisible ? 'visible' : 'hidden'}.`);
  });

  return <View ref={viewRef} style={{ height: 100, width: 100, backgroundColor: 'blue' }} />;
};

export default MyComponent;

```


React Example
```typescript
import React from 'react';
import {useVisibilitySensor} from '@devlander/hooks';

const MyComponent = () => {
  const divRef = useVisibilitySensorForWeb(isVisible => {
    console.log(`The component is currently ${isVisible ? 'visible' : 'hidden'}.`);
  });

  return <div ref={divRef} style={{ height: '100px', width: '100px', backgroundColor: 'blue' }} />;
};

export default MyComponent;


```




#### Development Standards
Component Folder Structure
Structure your hooks in the following manner:

useACustomHook
    ├── useACustomHook.native.tsx
    ├── useACustomHook.web.tsx
    ├── useACustomHook.tsx
    ├── index.tsx
    └── useACustomHook.spec.tsx

#### Exporting Guidelines:
Always default export for .native or .web files.
Limit the use of default exports to the primary component file, where platform distinctions are determined.
Here's an exemplary default export within a component:

```typescript
import { useEffect, useRef, useState } from 'react';
import { LayoutType } from '../../types/screen-size.type';

const useACustomHookForWeb = () => {
    return [ size, ref ];
};

export default useACustomHookForWeb;
```


#### Naming Conventions:
For clear code organization and easy identification:

Name your hooks based on the component's name, appending "ForWeb" or "ForNative" to differentiate platform-specific variations.

If a hook, say **useACustomHook**, demands distinct implementations for different platforms, you would create a **.web.tsx** and a **.native.tsx** file respectively.
**The base file**, absent of the **web** or **native** suffixes, integrates both platform-specific variants:

```typescript

import { Platform } from 'react-native';

export const useACustomHook = Platform.select({
    web: () => require('./useACustomHook.web').default,
    default: () => require('./useACustomHook.native').default
})

export default useACustomHook;
```


For the index.tsx in the useACustomHook directory, ensure a default export with the component name:
```typescript
export {default as useACustomHook} from "./useACustomHook" 

```
We built this collection inspired by real-world scenarios, hoping to bridge the gap between idea and execution. Whether you're an experienced developer or just starting out, we believe Devlander's Hooks will be a beneficial addition to your toolkit.