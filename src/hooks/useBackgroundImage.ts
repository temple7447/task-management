import { SxProps } from '@mui/system';
import backgroundImage from '../assets/studiobackground1.png'; // Import the image

export const useBackgroundImage = (): SxProps => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
