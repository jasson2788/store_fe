import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';
import { Header } from 'core/components/header/header';
import { client } from 'core/apollo/client';

const provider = (
    <ApolloProvider client={client}>
        <Header />
    </ApolloProvider>
);

describe('Core component header tests', (): void => {
    it('renders', (): void => {
        const component = renderer.create(provider);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
