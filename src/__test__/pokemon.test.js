import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount, render } from 'enzyme'

import Pokemon from '../components/Pokemon'

Enzyme.configure({ adapter: new Adapter() })

describe('A suite', () => {
	it('should render without throwing an error', () => {
		expect(shallow(<Pokemon/>).contains(<div classname="pokemon"></div>)).toBe(true)
	})
})