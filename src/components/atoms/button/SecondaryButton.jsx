// 他のコンポーネントでも使えるボタンをここで作っておく
// 色違いのボタンを作ったよ
import styled from "styled-components";
import { BaseButton } from "./BaseButton";
export const SecondaryButton = (props) => {
  // childrennとして他のところで値を受け取る
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
