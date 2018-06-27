import test from 'ava'
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App, { TestComponent } from './App'
import { Generator, gen } from './test-env/testcheck'
import { check } from './test-env/ava-check'

configure({ adapter: new Adapter() })

test('shallow', (t) => {
  const wrapper = shallow(<TestComponent />)
  t.is(wrapper.contains(<span>Foo</span>), true)
})

test('runs 10 times', check({ times: 10 }, gen.posInt, (t, n) => {
  t.true(n >= 0)
}))
