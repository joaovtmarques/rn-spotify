import { Favorites, Home, Profile, Discovery } from '../screens';

import homeIcon from '../assets/icons/home-outline-icon.svg';
import homeFilledIcon from '../assets/icons/home-fill-icon.svg';
import heartIcon from '../assets/icons/heart-outline-icon.svg';
import heartFilledIcon from '../assets/icons/heart-fill-icon.svg';
import discoveryIcon from '../assets/icons/discovery-outline-icon.svg';
import profileIcon from '../assets/icons/profile-outline-icon.svg';
import profileFilledIcon from '../assets/icons/profile-fill-icon.svg';

export const TabArr = [
  {
    route: 'home',
    icon: homeIcon,
    filledIcon: homeFilledIcon,
    component: Home,
  },
  {
    route: 'discovery',
    icon: discoveryIcon,
    filledIcon: discoveryIcon,
    component: Discovery,
  },
  {
    route: 'favorites',
    icon: heartIcon,
    filledIcon: heartFilledIcon,
    component: Favorites,
  },
  {
    route: 'profile',
    icon: profileIcon,
    filledIcon: profileFilledIcon,
    component: Profile,
  },
];
