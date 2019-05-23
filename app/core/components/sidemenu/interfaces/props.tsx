import ApolloClient from 'apollo-client';
import { Direction } from 'core/components/sidemenu/enums/direction';

export interface SidemenuProps {
    variable: string;
    align: Direction;
}

export interface SidemenuWrapperProps extends SidemenuProps {
    client?: ApolloClient<any>;
    open?: boolean;
}
