import styled from 'styled-components/native';

import Button from '../../components/Button/';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`;

export const LogoImage = styled.Image`
  width: 260px;
  height: 200px;
`;

export const SideContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const StopButton = styled(Button)`
  background: #cd2419;
`;

export const Distance = styled.Text`
  margin-top: 20px;
  color: #121214;
  font-size: 22px;
  font-weight: bold;
`;
