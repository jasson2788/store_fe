import 'unfetch/polyfill';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { defaults } from 'core/apollo/defaults';

const cache = new InMemoryCache();

const link = new HttpLink({
    uri: 'https://graphql.github.io/swapi-graphql/'
});

const client = new ApolloClient({
    cache     : cache,
    link      : link,
    resolvers : {}
});

cache.writeData({
    data: defaults
});

export {
    client
};
