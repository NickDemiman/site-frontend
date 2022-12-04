import { Container } from '@mui/system';
import { Typography, Card, CardActionArea, CardContent, Box } from '@mui/material';
import {blue} from '@mui/material/colors'
import Background from '../static/img/bg.jpg'

var sectionStyle = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    alignItems: 'center',
    display: 'flex',
  };

const variant = 'h4';

const color = blue[100]

export default function Home () {
    return (
        <Box>
            <section style={sectionStyle}>
                <Card color={color} elevation={10} sx={{
                    maxWidth: 345,
                    backgroundColor: { color },
                    marginLeft: 10,
                }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="body1" color="text.primary">
                                Кафедра «Системы обработки информации и управления» (ИУ5) МГТУ им. Н.Э. Баумана планирует провести 27-28 апреля 2023 г. конференцию «Искусственный интеллект в автоматизированных системах управления и обработки данных» ИИАСУ’23.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </section>
            <section>
                <Container color="primary" sx={{
                    marginTop: 4,
                }}>
                    <div sx={{ marginTop: 2 }}>
                        <Typography variant={variant} component={'h1'}>Цель конференции</Typography>
                        <Typography variant="body1">
                            Основная цель проводимой конференции – представить, рассмотреть и обсудить современное состояние работ по интеграции искусственного интеллекта в автоматизированные системы управления и обработки данных.
                        </Typography>
                    </div>
                    <div sx={{ marginTop: 2 }}>
                        <Typography variant={variant} component={'h1'}>Тематика конференции</Typography>
                        <Typography variant="body1">
                            Тематика конференции включает различные направления в рамках задач проектирования, разработки, внедрения, интеграции и эксплуатации автоматизированных систем управления и обработки данных.
                        </Typography>
                    </div>
                    <div sx={{ marginTop: 2 }}>
                        <Typography variant={variant} component={'h1'}>Важные даты</Typography>
                        <Typography variant="body1">
                            Конференция проводится в смешанном (очном и on-line) формате. Участие бесплатное. Статьи принимаются до 10го апреля 2023 г. на почту bmstuaiconf@yandex.ru
                        </Typography>
                    </div>
                </Container>
            </section>
        </Box>
    );
}