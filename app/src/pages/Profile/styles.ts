import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 24px 16px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 64px;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const ContentButtonAvatar = styled.View``;

export const IconCameraAvatar = styled.View`
  z-index: 1;
  position: absolute;
  background: #ff9000;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  top: 135px;
  left: 200px;
  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
