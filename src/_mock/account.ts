// ----------------------------------------------------------------------
import profilenot from '../assets/svg/profilenot.svg'
import lovewordcananda from '../assets/svg/lovewordcananda.svg'
import loveworkng from '../assets/svg/loveworkng.svg'
import loveworkuk from '../assets/svg/loveworkuk.svg'
import lovewordsa from '../assets/svg/lovewordsa.svg'

export const account = {
  displayName: 'Edmund Bassey ',
  email: 'admin@yawaapp.com.ng',
  photoURL: '/assets/images/avatars/avatar_25.jpg',
  role: 'admin',
};
export const recentativities = [
  {
    action: "Account creation",
    time: "Now",
    message: "You just created a super admin account",
    linkText: "View",
    imgSrc: profilenot
  },
  {
    action: "Password reset",
    time: "2 min ago",
    message: "You just reset your password",
    linkText: "View",
    imgSrc: profilenot
  },
  {
    action: "Account creation",
    time: "5 min ago",
    message: "A manager account was created",
    linkText: "View",
    imgSrc: profilenot
  },
  {
    action: "Permission update",
    time: "10 min ago",
    message: "You just updated user permissions",
    linkText: "View",
    imgSrc: profilenot
  },
  {
    action: "Login attempt",
    time: "15 min ago",
    message: "A login attempt was made from an unrecognized device",
    linkText: "View",
    imgSrc: profilenot
  },
  {
    action: "Role update",
    time: "30 min ago",
    message: "You updated the role of a team member",
    linkText: "View",
    imgSrc: profilenot
  },
 
];


export const lovewordbranches = [
  { 
    name: 'Loveworld Networks UK', 
    country: 'United Kingdom', 
    flag: '🇬🇧', 
    image:  loveworkuk
  },
  { 
    name: 'Loveworld Networks Canada', 
    country: 'Canada', 
    flag: '🇨🇦', 
    image:  lovewordcananda
  },
  { 
    name: 'Loveworld Networks NG', 
    country: 'Nigeria', 
    flag: '🇳🇬', 
    image: loveworkng
  },
  { 
    name: 'Loveworld Networks SA', 
    country: 'South Africa', 
    flag: '🇿🇦', 
    image: lovewordsa, 
  },
];