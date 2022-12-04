import * as React from 'react';
import {
  Card, CardContent, CardMedia, Typography, CardActionArea, Container
} from '@mui/material'
import AspectRatio from '@mui/joy/AspectRatio';
import ImageIcon from '@mui/icons-material/Image';
import {host} from '../store'

class ActionAreaCard extends React.Component {
  constructor (){
    super();
  }
  render () {
    return (
      <Card sx={{ maxWidth: 345, minWidth: 50, m:1 }}>
        <CardActionArea>
          <CardMedia
            hidden
            component="img"
            height="300"
            image={host()+this.props.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.props.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
}

export default ActionAreaCard;