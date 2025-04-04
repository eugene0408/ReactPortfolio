import styled from "styled-components";
import { Row, Container } from "react-grid-system";

export const SkillsContainer = styled(Container)`
  @media (min-width: 2000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  }
`;

export const SkillsRow = styled(Row)`
  position: relative;
  align-items: center;
  width: 100%;
  @media (max-width: 576px) {
    justify-content: end !important;
  }
`;

export const RowHeader = styled.h4`
  font-size: 96px;
  font-weight: 800;
  color: var(--text-col);
  opacity: 0.05;
  margin: 0;
  width: 100%;
  text-align: left;
  position: absolute;
  top: 20%;
  left: 0;
  transition: 0.4s ease;
  @media (hover: hover) {
    ${SkillsRow}:hover & {
      opacity: 0.1;
    }
  }
  @media (max-width: 998px) {
    top: 50%;
    transform: translateY(-50%);
  }
`;
