import styled from "styled-components";

interface PlayerImageProps {
  backgroundImage: string;
}

const PlayerImage = styled.div<PlayerImageProps>`
  width: 300px;
  height: 400px;
  position: absolute;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: PlayerImageProps) => props.backgroundImage});
  display: flex;
  flex-direction: column;
  justify-content: end;

  padding: 10px;
`;
export default PlayerImage;
