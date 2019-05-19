import 'core/components/app/app.scss';

import * as React from 'react';
import { Header } from 'core/components/header/header';

class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Header />
        );
    }
}

export { App };
