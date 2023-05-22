// 他のコンポーネントでも使えるボタンをここで作っておく
import styled from "styled-components";
import { BaseButton } from "./button/BaseButton";

export const PrimaryButton = (props) => {
  // childrennとして他のところで値を受け取る
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
