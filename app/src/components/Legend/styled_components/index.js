
import styled from 'styled-components';

export const StyledDiv = styled.div`
  background: ${props => props.color || ''};
  border-radius:5px;
  width: 30px;
  height: 30px;
`;