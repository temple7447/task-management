import PropTypes from 'prop-types';

import{ Card , Stack, Box}from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import Avatar from '@mui/material/Avatar';
import { emptyContainer } from '../../_mock/empty';
import emptyImage from '../../assets/svg/empty.svg'

// ----------------------------------------------------------------------

export default function EmptyContainer({ title, subheader, list }:any) {
  return (
   

<Stack sx={{
    width:'100%', 
}}>
<Box
      component="img"
      src={emptyImage}
      alt="Description of the image"
      sx={{ width: '192px', height: '192px', borderRadius: 2, alignSelf:'center', top:10 }} // Example styles
    />

<Typography sx={{textAlign:'center',  width:'50%',alignSelf:'center', mt:2 , fontWeight:"500", fontSize:14, lineHeight:'22.4px', fontFamily:'Manrope'}}>There are no active users yet. Create branch and onboard users </Typography>
</Stack>
    
  );
}

// AnalyticsOrderTimeline.propTypes = {
//   list: PropTypes.array,
//   subheader: PropTypes.string,
//   title: PropTypes.string,
// };

// ----------------------------------------------------------------------

