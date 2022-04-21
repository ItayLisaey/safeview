# SafeView

![package size badge](https://img.shields.io/bundlephobia/min/safeview) ![npm version](https://img.shields.io/npm/v/safeview)
![github action build status](https://img.shields.io/github/workflow/status/itaylisaey/safeview/publish-package)

SafeView is a component that allows you to hide sensitive information in your app visually, for presentation purposes, and more.

# Installation

with NPM:

```
npm install safeview
```

with Yarn:

```
yarn add safeview
```

# Usage

A basic example of using the base component, all you need to do is import and then wrap your app with it.

```js
import SafeView from 'safeview';

const App = () => {
  return (
        <SafeView>
            // Your React App
        </SafeView>;
  )
};
```

Specify which element you would like to hide with the property `data-safe="true"`.

```js
const MyComponent = () => {
    return (
        <div>
            <span data-safe>
                // Sensitive info
            <span>
        </div>
    )
}
```

After you mark the chosen elements you can press <kbd>Shift</kbd> + <kbd>S</kbd> on **Chrome** or <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> on **Firefox** to hide the elements.

# API

## `<SafeView>`

The `<SafeView>` component is the main element of the library and where you control all the functionality besides which element to hide.

```ts
// SafeView has the following properties

interface SafeViewProps {
  // Determines which the key will toggle the "SafeMode".
  accessKey?: React.HTMLAttributes<HTMLButtonElement>['accessKey']; // string

  // Allows you to insert a class to the div <SafeView> creates.
  className?: string;
}
```

## Targeting elements to hide

In order to specify to SafeView which element you would like to hide, you need to target it with the property `data-safe="true"`.

```html
<p data-safe>{ sensitive information }</p>
```

# License

SafeView is freely distributable under the terms of the [MIT license](https://github.com/ItayLisaey/safeview/blob/main/LICENSE).
