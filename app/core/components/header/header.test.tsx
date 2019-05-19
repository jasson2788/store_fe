import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Header } from 'core/components/header/header';

describe('Core component header tests', (): void => {
    it('renders', (): void => {
        const component = renderer.create(<Header />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
