import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { App } from 'core/components/app/app';

describe('Core component app tests', (): void => {
    it('renders', (): void => {
        const component = renderer.create(<App />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
