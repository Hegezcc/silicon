# Silicon Design System

[![npm version](https://img.shields.io/npm/v/silicon-design-system.svg?style=flat-square)](https://www.npmjs.com/package/silicon-design-system)
[![npm downloads](https://img.shields.io/npm/dm/silicon-design-system.svg?style=flat-square)](https://www.npmjs.com/package/silicon-design-system)

Brought to you by COMPFEST

Lightweight and interactive React component

## Quick start

Get it from npm

```
$ npm install silicon-design-system
```

Import and use it in your React app.

```jsx
import React, {useState} from 'react'
import { Button } from 'silicon-design-system'

export const Example1 () => (<Button text='Your Text'/>)
export const Example2 () => {
  const [loading, setLoading] = useState(false)

  return(
    <Button variant='secondary' loading={loading} w='10rem' mx='16px'> Another Component </Button>
  )
}
```
