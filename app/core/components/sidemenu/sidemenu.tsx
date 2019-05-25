import * as React from 'react';
import * as styles from 'core/components/sidemenu/sidemenu.scss';

import { SidemenuProps, SidemenuWrapperProps } from 'core/components/sidemenu/interfaces/props';
import { Direction } from 'core/components/sidemenu/enums/direction';
import { Helpers } from 'core/libs/helpers';
import { Parts } from 'core/components/sidemenu/interfaces/parts';
import gql from 'graphql-tag';
import { withRequest } from 'core/components/request/request';

class SidemenuWrapper extends React.Component<SidemenuWrapperProps, {}> {

    private container: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    private opacity: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={styles.container} ref={this.container}>{this.props.children}</div>
                <div className={styles.opacity}
                    ref={this.opacity}
                    onClick={this.close}
                    onTransitionEnd={this.transitionEnd}>
                </div>
            </React.Fragment>
        );
    }

    public componentDidUpdate(props: SidemenuWrapperProps): void {
        if (props.open !== this.props.open) this.toggle(this.props.open);
    }

    public componentDidMount(): void {
        const parts = this.getParts();
        if (!parts) return;

        this.transformX(parts, this.props.open);

        if (this.props.open) {
            parts.opacity.style.visibility = 'visible';
            parts.opacity.style.opacity = '1';
        }

        if (this.props.align === Direction.RIGHT) parts.container.classList.add(styles.right);
    }

    public shouldComponentUpdate(props: SidemenuWrapperProps): boolean {
        return props.open !== this.props.open;
    }

    private close = (): void => {
        if (!this.props.client) return;
        this.props.client.writeData({
            data: {
                [this.props.variable]: !this.props.open
            }
        });
    }

    private toggle(open: boolean): void {
        const parts = this.getParts();
        if (!parts) return;

        parts.container.classList.add(styles.transition);
        parts.opacity.classList.add(styles.transition);

        this.transformX(parts, open);

        if (open) parts.opacity.style.visibility = 'visible';

        parts.opacity.style.opacity = open ? '1' : '0';
    }

    private transformX = (parts: Parts, open: boolean): void => {
        const initialState = 0;
        const transformedState = Number(`${this.props.align}${parts.container.offsetWidth}`);

        Helpers.transformX(parts.container, open ? initialState : transformedState);
    }

    private transitionEnd = (): void => {
        const parts = this.getParts();
        if (!parts) return;

        parts.opacity.style.visibility = Number(parts.opacity.style.opacity) ?
            'visible' : 'hidden';
    }

    private getParts = (): Parts | null => {
        const container = this.container.current;
        const opacity = this.opacity.current;

        if (!container || !opacity) return null;

        return { container, opacity };
    };

}

const Sidemenu = (props: SidemenuProps): React.ReactElement => withRequest({
    query: gql`{ open:${props.variable} @client }`,
    ...props
}, SidemenuWrapper);

export {
    Sidemenu
};
