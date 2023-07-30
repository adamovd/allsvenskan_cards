import styled from "styled-components";

export const NameTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 50px;

  background: radial-gradient(
    49.87% 866.49% at 50.13% 50.56%,
    rgba(250, 255, 6, 0.78) 0%,
    rgba(255, 255, 255, 0.47) 70.99%
  );
`;

export const RainbowTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 20px;

  background: linear-gradient(
    90deg,
    #0a0078 0%,
    #4dd4fe 25%,
    #03a400 50%,
    #ffe500 75%,
    #a90000 100%
  );
`;
