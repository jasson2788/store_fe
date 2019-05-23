import * as React from 'react';

import { DocumentNode } from 'graphql';

export interface RequestProps {
    query: DocumentNode;
    loading?: React.ReactElement;
    error?: React.ReactElement;
}
