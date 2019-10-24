import React from 'react'
import Colors from './theme/Colors'
import styled from 'styled-components';
import { devices } from './common/Breakpoints';
function App() {
    return (
        <div>
            <StyledPara>App JS</StyledPara>
        </div>
    )
}

export default App
const StyledPara = styled.p`
font-weight: 600;
padding: 10px 20px;
color: ${Colors.paleRed};
@media ${devices.mobile} {
    text-align: center;
  }
`;