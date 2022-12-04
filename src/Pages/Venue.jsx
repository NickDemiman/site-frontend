import {
    Container,
    Alert,
} from '@mui/material'

function Venue () {
    return (
        <>
            <Container sx={{my:5}}>
                <Alert severity="error">Здесь нужно разместить информацию про МГТУ, адрес, карта, описание как добраться</Alert>
            </Container>
            
        </>
    );
}

export {Venue}