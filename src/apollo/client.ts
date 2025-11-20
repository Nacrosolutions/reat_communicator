import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client";

// Create the basic HTTP link
const httpLink = new HttpLink({
  uri: "http://localhost:9000/graphql", // your GraphQL backend
});



// Auth middleware using ApolloLink

const authLink=new ApolloLink((operation,forward)=>{
    const token=localStorage.getItem("token");

    operation.setContext(({headers={}})=>({
        headers:{
            ...headers,
            Authorization:token ? `Bearer ${token}`:"",
        }
    }));

    return forward(operation)
})
// Combine middleware + http link

const link=ApolloLink.from([authLink,httpLink]);


const client=new ApolloClient({
    link,
    cache:new InMemoryCache()
});

export default client;