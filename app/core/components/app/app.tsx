import 'core/components/app/app.scss';

import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Direction } from 'core/components/sidemenu/enums/direction';
import { Header } from 'core/components/header/header';
import { Sidemenu } from 'core/components/sidemenu/sidemenu';
import { client } from 'core/apollo/client';

class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <ApolloProvider client={client}>
                <Header />
                <Sidemenu align={Direction.LEFT} variable='sidemenu' />
                <Sidemenu align={Direction.RIGHT} variable='options' />
            </ApolloProvider>
        );
    }
}

export {
    App
};
