import * as React from 'react';
import * as styles from 'app/core/components/header/header.scss';

import { Query, QueryResult } from 'react-apollo';

import gql from 'graphql-tag';

class Header extends React.Component {
    public render(): React.ReactNode {
        const header = (context: QueryResult): React.ReactNode => {
            if (context.loading) return <header className='noselect'></header>;

            return (
                <header className={styles.header}>
                    asdasdasdsd
                    <button onClick={(): void => {
                        context.client.writeData({
                            data: { sidemenu: true }
                        });
                    }}>aaaa</button>
                </header>
            );
        };

        return <Query query={gql`{ sidemenu @client }`}>{header}</Query>;
    }
}

export {
    Header
};
