import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api.react-finland.fi/graphql',
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only',
        },
    },
    headers: {
        'Content-Type': 'application/json',
    },
});

export default client;
