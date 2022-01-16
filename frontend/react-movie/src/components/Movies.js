import React from 'react';
import {List, Heading} from "semantic-ui-react"


export const Movies = ({movies})=>{
    return(
        <List>
            {movies.map(movie =>{
                return (
                    <List.Item key={movie.title}>
                        <Heading>{movie.title}</Heading>
                    </List.Item>
                )
            })}
        </List>
    )

}