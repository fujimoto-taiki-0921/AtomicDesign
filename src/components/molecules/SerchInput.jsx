import { Input } from "../atoms/input/input";
import { PrimaryButton } from "../atoms/PrimaryButton";
import styled from "styled-components";
export const SercchInput = () => {
  return (
    <div>
      <SConteainer>
        <SButtonWrapper>
          <Input placeholder="検索条件を入力" />
        </SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SConteainer>
    </div>
  );
};
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
const SConteainer = styled.div`
  display: flex;
`;
