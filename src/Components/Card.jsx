import * as React from 'react';
import {
  Card, CardContent, CardMedia, Typography, CardActionArea, Container, Skeleton
} from '@mui/material'
import { styled } from '@mui/material/styles';
import { host } from '../store';

const StyledCardContent = styled(CardContent)(({ theme }) => ({
      color: theme.palette.secondary.light,
  }));

function replace(img) {
  console.log(img);
  if (img == null) return (
    <Skeleton variant="rectangular" width={"100%"} height={200} />
  );
  return (
    <CardMedia
      component="img"
      height="300"
      image={host()+img}
    />
  );
};

class ActionAreaCard extends React.Component {
  constructor (){
    super();
  }

  render () {
    return (
      <Card sx={{ maxWidth: 345, minWidth: 50, m:1}}>
        <CardActionArea>
          {replace(this.props.img)}
          <StyledCardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.props.body}
            </Typography>
          </StyledCardContent>
        </CardActionArea>
      </Card>
    );
  };
}

export default ActionAreaCard;