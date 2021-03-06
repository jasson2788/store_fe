import * as React from 'react';
import * as styles from 'core/components/header/header.scss';

import { HeaderWrapperProps } from 'core/components/header/interfaces/props';
import { _id } from 'core/libs/helpers';
import gql from 'graphql-tag';
import { withRequest } from 'core/components/request/request';

class HeaderWrapper extends React.Component<HeaderWrapperProps> {
    public render(): React.ReactNode {
        return (
            <header className={styles.header}>
                <button id={_id('sidemenu_button')} onClick={(): void => {
                    this.open('sidemenu');
                }}>sidemenu</button>
                <button id={_id('options_button')} onClick={(): void => {
                    this.open('options');
                }}>options</button>
            </header>
        );
    }

    private open = (data: string): void => {
        if (!this.props.client) return;

        this.props.client.writeData({
            data: { [data]: true }
        });
    }
}

const Header = (): React.ReactElement => withRequest({
    query: gql`{ sidemenu @client, options @client }`
}, HeaderWrapper);

export {
    Header
};
