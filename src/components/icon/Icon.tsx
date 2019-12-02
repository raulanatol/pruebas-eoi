import React, { FC, useState } from "react";
import styled from "@emotion/styled";

type IconName = 'dashboard' | 'calendar';

const SVG = styled.svg`
  margin: 17px;
  &:hover {
    rect:nth-child(1) {fill: yellow}
    rect:nth-child(2) {fill: green}
    rect:nth-child(3):hover {fill: black; transform: rotate(45)}
  }
`;

const IMG = styled.img`
  width: 45px;
  margin: 17px;
`;


const Avatar = styled.div`
  border-radius: 50%;
  background: grey;
  width: 80px;
  height: 80px;
`;

interface IconProps {
  name: IconName;
}

export const Icon: FC<IconProps> = ({ name }) => {
  const [color, setColor] = useState('#FF0000');
  const handleColor = () => setColor('#47AB43');

  if (name === 'dashboard') {
    return <Avatar>
      <IMG src="https://avatars2.githubusercontent.com/u/2389019?s=800"/>
      {/*<SVG onClick={handleColor}*/}
      {/*     width="45" height="45" viewBox="0 0 45 45"*/}
      {/*     fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      {/*  <rect width="21.4286" height="13.0645" rx="2" fill={color}/>*/}
      {/*  <rect y="15.9677" width="21.4286" height="29.0323" rx="2" fill={color}/>*/}
      {/*  <rect width="21.4286" height="13.0645" rx="2" transform="matrix(1 0 0 -1 23.5714 45)" fill={color}/>*/}
      {/*  <rect width="21.4286" height="29.0323" rx="2" transform="matrix(1 0 0 -1 23.5714 29.0323)" fill={color}/>*/}
      {/*</SVG>*/}
    </Avatar>;
  }
  if (name && 'calendar') {
    return (
      <svg onClick={handleColor} width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 3C0 1.34315 1.34315 0 3 0H42C43.6569 0 45 1.34315 45 3V8.85246H0V3ZM0 10.3279H45V42C45 43.6569 43.6569 45 42 45H3C1.34315 45 0 43.6569 0 42V10.3279ZM14.587 24.8788H12.5251V28.1336H14.6518C15.4904 28.1336 16.1474 28.3325 16.6229 28.7301C17.0983 29.1278 17.3361 29.8021 17.3361 30.7531C17.3361 31.4187 17.107 31.9677 16.6488 32.3999C16.1906 32.8235 15.5768 33.0353 14.8074 33.0353C14.1245 33.0353 13.5496 32.8235 13.0827 32.3999C12.6159 31.9763 12.3825 31.4749 12.3825 30.8957H7.98652C7.98652 31.959 8.25884 32.91 8.80347 33.7486C9.3481 34.5785 10.1478 35.2312 11.2025 35.7066C12.2658 36.1735 13.4156 36.4069 14.6518 36.4069C16.7612 36.4069 18.4642 35.9012 19.761 34.8897C21.0577 33.8782 21.7061 32.5296 21.7061 30.8438C21.7061 29.7546 21.4208 28.8425 20.8502 28.1077C20.2797 27.3642 19.493 26.811 18.4902 26.4479C19.4411 25.9983 20.163 25.4148 20.6557 24.6973C21.1571 23.9711 21.4079 23.2017 21.4079 22.3891C21.4079 20.7119 20.807 19.3936 19.6054 18.434C18.4037 17.4744 16.7525 16.9946 14.6518 16.9946C13.4761 16.9946 12.3955 17.215 11.4099 17.6559C10.433 18.0882 9.66797 18.6933 9.11469 19.4714C8.56141 20.2494 8.28477 21.1355 8.28477 22.1297H12.6548C12.6548 21.6283 12.8666 21.209 13.2902 20.8719C13.7225 20.5347 14.2282 20.3661 14.8074 20.3661C15.5163 20.3661 16.0653 20.565 16.4543 20.9626C16.8433 21.3517 17.0378 21.8574 17.0378 22.4798C17.0378 24.0791 16.2209 24.8788 14.587 24.8788ZM29.2143 36.1475H33.5973V17.2669H33.1953L24.9091 20.1327V23.4524L29.2143 22.1945V36.1475Z"
              fill={color}/>
      </svg>
    )
  }
  return <div>123</div>;
};
