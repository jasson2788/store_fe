import * as React from 'react';
import * as styles from 'app/core/components/sidemenu/sidemenu.scss';

interface MyProps {
    hero: string;
}

interface MyState {
    hero: string;
}

class Sidemenu extends React.Component<MyProps, MyState> {

    private container = React.createRef<HTMLDivElement>();
    private opacity = React.createRef<HTMLDivElement>();

    private transitionEnd = (): void => {
        if (!this.opacity || !this.opacity.current) return;

        const isHidden = Number(this.opacity.current.style.opacity) === 0;

        this.opacity.current.style.visibility = isHidden ? 'hidden' : 'visible';
    }

    public render(): React.ReactNode {
        return (
            <div className={styles.sidemenu}>
                <div className={styles.container} ref={this.container}>{this.props.children}</div>
                <div className={styles.opacity} ref={this.opacity} onTransitionEnd={this.transitionEnd}></div>
            </div >
        );
    }
}

export {
    Sidemenu
};