# themed-digital-clock ![Weekly downloads](https://img.shields.io/npm/dw/themed-digital-clock 'Weekly downloads')

A digital clock with a dark and a light theme

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/themed-digital-clock/).

## Props

The component accepts the props defined bellow in the table.

### Props accepted by ThemedDigitalClock

| Name         | Type             | Required | Default            | Description                                                             |
| ------------ | ---------------- | -------- | ------------------ | ----------------------------------------------------------------------- |
| date         | Date             | no       | undefined          | Force the clock to start displaying the time with the time of this date |
| description  | string           | no       | undefined          | The text displayed bellow the clock                                     |
| size         | number \| string | no       | 100%               | The size of the clock                                                   |
| style        | CSSProperties    | no       | {}                 | The style for root element (overwrite any internal style)               |
| timezoneName | string           | no       | browser's timezone | The timezone for which is displayed teh time (if date is not set)       |
| useDarkTheme | boolean          | no       | false              | Define which theme is used (light or dark)                              |

Note: date is thought to be used only for testing and in storybook.

---

## Versions

| ThemedDigitalClock _uses_ |      React       |
| ------------------------: | :--------------: |
|                     1.0.x |      16.9.0      |
|                     1.1.x |      16.9.0      |
|                     1.2.x | 16.9.0 or 17.0.0 |

### About versioning schema used for ThemedDigitalClock

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of ThemedDigitalClock
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of ThemedDigitalClock

---

## Example

Displaying a digital clock in a dark theme:

```js
import * as React from 'react';
import ThemedDigitalClock from 'themed-digital-clock';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemedDigitalClock
          description="The time now in New York"
          timezoneName="America/New_York"
          useDarkTheme={true}
          size={400}
        />
      </div>
    );
  }
}

export default App;
```

---

## Changelog

### 1.0.0

- themed-digital-clock is made publicly available

### 1.0.1

- Added a prop for defining the height of the clock

### 1.1.0

- Updated packages

### 1.1.1

- Updated packages
- Moved from npm to yarn

### 1.1.2

- Updated packages

### 1.1.3

- Updated packages

### 1.1.4

- Fixed crash produced by "export \* from"

### 1.2.0

- Accepting React 17 as peerDependencies
- Fixed security warnings
