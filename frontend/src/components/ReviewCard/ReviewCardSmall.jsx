import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { format } from 'date-fns';
import customTheme from '../../utils/ColorTheme.jsx';

export default function ReviewCardSmall({ review }) {
    let rating = review.rate;
    let color;

    if (rating % 1 === 0) {
        rating = rating.toFixed(1);
    }
    // eslint-disable-next-line eqeqeq
    if (rating == 5) {
        color = 'A.main';
    } else if (rating >= 4) {
        color = 'B.main';
    } else if (rating >= 3) {
        color = 'C.main';
    } else if (rating >= 2) {
        color = 'D.main';
    } else if (rating >= 1) {
        color = 'F.main';
    }

    const cardStyle = {
        backgroundColor: 'cardBackground.main',
        maxWidth: 800,
        borderRadius: '3px',
        margin: '0 auto',
    };

    const ratingBoxStyle = {
        backgroundColor: color,
        color: 'cardHeadline.main',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const cardContainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        // width: '90%',
        margin: '0 auto',
    };

    const contentContainer = {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
    };

    const formattedDate = format(new Date(review.createdAt), 'MMMM do, yyyy');

    return (
        <ThemeProvider theme={customTheme}>
            <Card sx={cardStyle}>
                <CardActionArea disableRipple>
                    <Box sx={ratingBoxStyle} />
                    <Box sx={cardContainer}>
                        {/* <Box sx={ratingBoxStyle} >
							<Typography variant='h5' color='cardHeadline.main'>{Math.round(rating)}</Typography>
						</Box> */}
                        <CardActions
                            disableSpacing
                            sx={{
                                margin: '10px auto',
                                // width: '10%'
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            {/* <Button size='small'>Share</Button> */}
                            <IconButton aria-label='thumb down'>
                                <ArrowDropUpIcon
                                    sx={{
                                        color: 'cardParagraph.main',
                                        fontSize: 50,
                                    }}
                                />
                            </IconButton>
                            <Typography variant='h5' color='cardHeadline.main'>
                                {Math.round(rating)}
                            </Typography>
                            <IconButton aria-label='thumb down'>
                                <ArrowDropDownIcon
                                    sx={{
                                        color: 'cardParagraph.main',
                                        fontSize: 50,
                                    }}
                                />
                            </IconButton>
                        </CardActions>
                        <CardContent sx={contentContainer}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'center',
                                    justifyContent: 'space-between',
                                    marginRight: '20px',
                                }}
                            >
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='div'
                                    color='cardParagraph.main'
                                    style={{ fontWeight: 500 }}
                                >
                                    {review.course.name}
                                </Typography>
                                <Typography color='cardHighlight.main'>
                                    {formattedDate}
                                </Typography>
                            </Box>
                            <Typography
                                color='cardParagraph.main'
                                variant='h6'
                                sx={{
                                    pb: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    color='cardParagraph.main'
                                    sx={{ pr: 1, fontWeight: 300 }}
                                >
                                    with{' '}
                                </Typography>{' '}
                                {review.professor}
                            </Typography>
                            <Typography
                                variant='body2'
                                color='cardParagraph.main'
                                style={{ fontWeight: 300 }}
                            >
                                <Typography
                                    color='cardParagraph.main'
                                    fontWeight={500}
                                >
                                    Comment
                                </Typography>
                                {review.comment}
                                <Typography
                                    color='cardParagraph.main'
                                    fontWeight={500}
                                >
                                    What could be improved?
                                </Typography>
                                {review.commentProf}
                                <Typography
                                    color='cardParagraph.main'
                                    fontWeight={500}
                                >
                                    Advice
                                </Typography>
                                {review.advice}
                            </Typography>
                        </CardContent>
                    </Box>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
}
