import React from 'react'
import styled from 'styled-components'
import Player from '../Player'

const HomeText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`
const Home: React.FunctionComponent = () => {
    return (
        <HomeText>
            Home
        </HomeText>
    )
}

export default Home
