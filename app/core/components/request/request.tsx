import * as React from 'react';

import { Query, QueryResult } from 'react-apollo';
import { RequestProps } from 'core/components/request/interfaces/props';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withRequest = (props: RequestProps, wrapped: any): React.ReactElement => (
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
                        React.cloneElement(React.createElement(wrapped, props), {
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
    withRequest
};
