import styled from "styled-components";
import ReactPlayer from "react-player";

export const Image = styled.img`
  width: 200px;
  border-radius: 20px;
  margin: 20px;
  border: 1px solid wheat;
`;

export const VideoContainer = styled.div`
  max-width: 100%;
  width: 700px;
  margin: 20px 0;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  border-radius: 20px;
  overflow: hidden;
`;
