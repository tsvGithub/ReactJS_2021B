import React from "react"
import DataFetcher from "./DataFetcher"

function App() {    
    return (
        <div>
            <DataFetcher url="https://my-json-server.typicode.com/aman-leap/swapi/people/1/" 
                render = { function(data, loading){
                    return(
                        loading ?
                        <h1>Loading...</h1> :
                        <p>{JSON.stringify(data)}</p>
                    )
                }} />
            {/*<DataFetcher url="https://swapi.co/api/people/1">
                {(data, loading) => {
                    return (
                        loading ? 
                        <h1>Loading...</h1> :
                        <p>{JSON.stringify(data)}</p>
                    )
                }}
            </DataFetcher>
            */}
        </div>
    )
}

export default App