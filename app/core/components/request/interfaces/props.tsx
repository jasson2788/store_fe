import * as React from 'react';

import { DocumentNode } from 'graphql';

export interface RequestProps {
    query: DocumentNode;
    children: React.ReactElement;
    loading?: React.ReactElement;
    error?: React.ReactElement;
}
