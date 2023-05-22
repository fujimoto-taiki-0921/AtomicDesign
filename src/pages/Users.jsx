import styled from "styled-components";
import { SercchInput } from "../components/molecules/SerchInput";
export const Users = () => {
  return (
    <SContenar>
      <h2>ユーザー一覧</h2>
      <SercchInput />
    </SContenar>
  );
};
const SContenar = styled.div`
  text-align: center;
`;
