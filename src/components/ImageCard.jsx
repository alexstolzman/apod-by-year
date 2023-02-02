import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

class ImageCard extends React.Component{
    render(){
        return(
                 <Card sx={{ maxWidth: 345 }} style={{height: '100%',  width: '18rem' }} border="secondary">
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            height="200"
                            image={this.props.url}
                            alt={this.props.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" >
                                <a href={this.props.url} style={{"textDecoration": "none"}}>{this.props.title}</a>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {this.props.explanation}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
        )
    }
}

export default ImageCard;