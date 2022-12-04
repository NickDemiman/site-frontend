import {
    Container,
    Alert,
} from '@mui/material'

export default function Program () {
    return (
        <>
            <Container sx={{my:5}}>
                <Alert severity="warning">Программа будет представлена позднее</Alert>
            </Container>
        </>
    );
}