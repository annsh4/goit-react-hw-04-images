import styled from 'styled-components';
import ScrollToTop from 'react-scroll-up';

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const ModalDescr = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding-right: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;

  width: 100%;
  
  color: ${props => props.theme.colors.white};
  text-shadow: ${props => props.theme.colors.accent};
  background-color: #376096;
  box-shadow: 0px -2px 4px 1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(5.5px);

  font-family: ${props => props.theme.fonts.heading}
  font-size: 24px;
  text-align: center;
`;

export const BtnScrollToTop = styled(ScrollToTop)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  padding: 8px;
  background-color: rgba(55, 96, 150, 0.8);
  border-radius: 8px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
`;
