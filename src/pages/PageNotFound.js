import { useLocation } from 'react-router-dom'

//Styles
import * as styles from '../styles/pagenotfound.module.css';

//MUI
import {
    Grid,
    Box,
    Stack,
    TextField,
    Button,
    Typography,
    Card,
    CardContent
} from '@mui/material';

const PageNotFound = () => {

    let location = useLocation();

    return (
        <Card className={styles.background} sx={{ boxShadow: 1 }}>
            <CardContent className={styles.content}>
                <Grid>
                    <Box>
                        <Stack
                            direction="column"
                            justifyContent="space-around"
                            alignItems="center"
                            spacing={3}
                        >
                            <Typography variant="h1">
                                404 :(
                            </Typography>

                            <Typography variant="h2">Oops!</Typography>

                            <Typography variant="h4">We could not find the page "{location.pathname}"</Typography>

                            <Button href="/" variant="contained" color="secondary" size="large">
                                Back To Home
                            </Button>
                        </Stack>

                    </Box>
                </Grid>
            </CardContent>
        </Card >
    );
}

export default PageNotFound;