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
import React, { useState } from 'react'
import { Button } from 'silicon-design-system'

export const Example1 () => (<Button text='Your Text' variant='secondary' />)

export const Example2 () => (<Button text='Your Text' variant='tertiary' />)

export const Example4 () => (<Button text='Your Text' variant='ghost' />)

export const Example5 () => (<Button text='Your Text' size='sm' />)

export const Example6 () => (<Button text='Your Text' size='md' />)

export const Example7 () => (<Button text='Your Text' size='lg' />)

export const Example8 () => (<Button text='Your Text' size='1/2' />)

export const Example9 () => (<Button text='Your Text' size='full' />)

export const Example10 () => {
  const [loading, setLoading] = useState(false)

  return(
    <Button variant='secondary' loading={loading} w='10rem' mx='16px'> Another Component </Button>
  )
}
```
