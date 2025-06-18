import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import MergeIcon from '@mui/icons-material/Merge';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';

const CustomizedTimeline: React.FC = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2006
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <BusinessIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">OLX Founded</Typography>
          <Typography>Founded in Argentina by Fabrice Grinda & Alec Oxenford.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2010–2014
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <PublicIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Global Expansion</Typography>
          <Typography>Naspers invests & expands OLX to emerging markets.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2016
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success">
            <EmojiObjectsIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Unified Strategy</Typography>
          <Typography>OLX rebrands and launches Tradus for heavy machinery.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2018–2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="info">
            <MergeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Partnerships & Mergers</Typography>
          <Typography>Merged with letgo in the US and invested in Carousell.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="warning">
            <ElectricCarIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">OLX Autos Launch</Typography>
          <Typography>Launched used car buying/selling service in India & LatAm.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2023–2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success">
            <FavoriteIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Sustainability & Cairo Hub</Typography>
          <Typography>5M tons CO₂ saved via reuse; new tech hub opens in Cairo.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default CustomizedTimeline;
