import styled from "styled-components";
export const UserIconWitnName = (props) => {
  const { image, name } = props;
  return (
    <SConteinar>
      <SImg
        higth={160}
        width={160}
        src={"https://source.unsplash.com/ja/%E5%86%99%E7%9C%9F"}
        alt={name}
      />
      <SName>{name}</SName>
    </SConteinar>
  );
};
const SConteinar = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
