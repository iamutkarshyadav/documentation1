// VideoPlayer.tsx

import React from 'react';
import styled from 'styled-components';

interface VideoPlayerProps {
  src: string;
}

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
`;

const VideoElement = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <VideoContainer>
      <VideoElement src={src} autoPlay muted loop />
    </VideoContainer>
  );
};

export default VideoPlayer;
