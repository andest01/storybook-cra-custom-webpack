import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'

const stories = storiesOf('Tracker Panel/Base/Side', module)
stories.addDecorator(withKnobs)

stories.add('Three Constituent in a side', () => {
  const number2 = number('foo', 10)
return <div>hello lol {number2}</div>
})
