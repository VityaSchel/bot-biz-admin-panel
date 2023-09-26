import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

let endpointSingle

if (process.env.NODE_ENV === 'development') {
  endpointSingle = `http://localhost:${process.env.NEXT_PUBLIC_PORT}/graphql`
} else {
  endpointSingle = 'https://admin-dev.x5.io/graphql'
}

const client = new ApolloClient({
  uri: endpointSingle,
  cache: new InMemoryCache(),
  link: createUploadLink()
})

export default function APIClient(props: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}

/** Uncomment when batching is enabled:

import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { ApolloLink } from 'apollo-link' // DOES NOT ALLOW GRAPHQL 16
import { OperationDefinitionNode } from 'graphql/language/ast'

let endpointBatch

endpointBatch = `http://localhost:${process.env.NEXT_PUBLIC_PORT}/graphql-batch`

endpointBatch = 'https://admin-dev.x5.io/graphql-batch'

const batchLink = new BatchHttpLink({
  uri: endpointBatch,
  batchMax: 10,
  batchInterval: 20,
  batchDebounce: true
})

const singleAndBatchLink = ApolloLink.split(
  operation => Boolean(operation.query.definitions.find((d: OperationDefinitionNode) => d.operation === 'mutation')),
  createUploadLink(),
  batchLink
)

 */