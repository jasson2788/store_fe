import * as React from 'react';

import { Query, QueryResult } from 'react-apollo';
import { RequestProps } from 'core/components/request/interfaces/props';

const Request: React.FC<RequestProps> = (props: RequestProps): React.ReactElement => (
    <Query query={props.query}>
        {(context: QueryResult): React.ReactNode => {
            if (context.loading) {
                return props.loading || <React.Fragment></React.Fragment>;
            }

            if (context.error) {
                return props.error || <div>An error happened...</div>;
            }

            return (
                <React.Fragment>
                    {
                        React.cloneElement(props.children, {
                            client: context.client,
                            ...context.data
                        })
                    }
                </React.Fragment>
            );
        }}
    </Query>
);

export {
    Request
};
