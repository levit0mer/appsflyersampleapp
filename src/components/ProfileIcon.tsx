import React from 'react';
import { SvgProps } from 'react-native-svg';
import ProfileSvg from '../assets/icons/header/profile.svg'; // Update the path to your SVG file

const ProfileIcon: React.FC<SvgProps> = (props) => {
  return <ProfileSvg {...props} />;
};

export default ProfileIcon;
