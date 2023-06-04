import React from 'react'
import styled from 'styled-components'
import Player from '../Player'

const TeamText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    height: 10vh;
    margin-top: 200px;
`

const Team: React.FunctionComponent = () => {
    return (
        <TeamText>
            <Player/>
        </TeamText>
    )
}

export default Team
