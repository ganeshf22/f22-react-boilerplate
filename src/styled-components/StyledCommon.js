import styled from 'styled-components';
import Colors from '../theme/Colors'
import { devices } from '../common/Breakpoints';
export const StyledP = styled.p`
font-weight: 600;
padding: 10px 20px;
color: ${Colors.success};
@media ${devices.mobile} {
    text-align: center;
  }
`;