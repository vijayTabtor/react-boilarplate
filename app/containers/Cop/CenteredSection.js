import styled from 'styled-components';
import Section from './Section';

const CenteredSection = styled(Section)`
    h2 {
      color: red;
      float:left;
    };

    @media only screen and (max-width: 600px) {
      h2 {
        color: blue;
        float:left;
      };
    }  
`;

export default CenteredSection;
