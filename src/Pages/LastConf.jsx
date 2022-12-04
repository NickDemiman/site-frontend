import { Container, Stack, Typography, Divider, CardMedia, CardContent, Button, Chip, Avatar, } from "@mui/material";
import img1 from "../static/img/iiasu22.jpg"
import img2 from "../static/img/iiasu22-2.jpg"
import icon_e from "../static/img/elibrary.png" 
import { Box } from "@mui/system";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function LastConf () {
    return (
        <Box>
            <Container maxWidth='lg'>
                <Typography variant="body1">
                В конференции «Искусственный интеллект в автоматизированных системах управления и обработки данных» ИИАСУ’22 (27–28 апреля 2022 г.) помимо МГТУ им. Н.Э. Баумана участвовали представители следующих организаций:
                <ul>
                    <li>СПбГТИ (ТУ), г. Санкт-Петербург</li>
                    <li>Южный федеральный университет, г. Таганрог</li>
                    <li>РФЯЦ-ВНИИЭФ, ИЦТ, г. Саров</li>
                    <li>МАДГТУ (МАДИ), г. Москва</li>
                    <li>Московский политехнический университет, г. Москва</li>
                    <li>АО «Национальная система платежных карт», г. Москва</li>
                    <li>Московский государственный университет пищевых производств, г. Москва</li>
                    <li>Российский новый университет, г. Москва</li>
                    <li>СарФТИ НИЯУ МИФИ, г. Саров</li>
                    <li>ООО «САП СНГ», г. Москва</li>
                    <li>НИЦ «Курчатовский институт», г. Москва</li>
                    <li>Военная академия РВСН им. Петра Великого, г. Москва</li>
                    <li>Краснодарское ВВУ им. генерала армии С.М. Штеменко, г. Краснодар</li>
                    <li>Центр информационных технологий в проектировании РАН, г. Одинцово</li>
                    <li>НИИ точных приборов, г. Москва</li>
                    <li>ООО «ВК», г. Москва</li>
                </ul>
                Помимо базовой кафедры конференции ИУ5 «Системы обработки информации и управления» МГТУ им. Н.Э. Баумана В конференции участвовали преподаватели, аспиранты и студенты кафедр: 
                <ul>
                    <li>ИУ3 Информационные системы и телекоммуникации</li>
                    <li>ИУ6 Компьютерные системы и сети</li>
                    <li>ИУ7 Программное обеспечение ЭВМ и информационные технологии</li>
                </ul>
                По результатам конференции был выпущен сборник статей в 2х томах:
                <Stack spacing={2}>
                    <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem color="primary" />}
                    spacing={2}
                    maxWidth='md'
                    >
                        <CardMedia
                        component="img"
                        height={400}
                        image={img1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="div">
                            Искусственный интеллект в автоматизированных системах управления и обработки данных. 
                            Сборник статей Всероссийской научной конференции (Москва, 27–28 апреля 2022 г.) = 
                            Artificial Intelligence in Management, Control, and Data Processing Systems. Proceedings of the All-Russian Scientific Conference
                            (Moscow, April 27–28, 2022) : в 2 т. / Министерство науки и высшего образования Российской Федерации, 
                            Федеральное государственное бюджетное образовательное учреждение высшего образования «Московский государственный технический университет имени Н.Э. Баумана 
                            (национальный исследовательский университет)». — Москва : Издательство МГТУ им. Н.Э. Баумана, 2022. <br />
                            Т. 1. — 408, [2] c. : ил. 
                            </Typography>
                            <Stack direction="row" spacing={0}>
                                <Button color="secondary" component="a" href="https://www.elibrary.ru/item.asp?id=49201725" target="_blank">
                                    <Chip 
                                        color="secondary"
                                        variant="outlined" 
                                        label="страница"
                                        icon={<Avatar src={icon_e} />} 
                                    />
                                </Button>
                                <Button color="secondary" component="a" href="https://www.elibrary.ru/download/elibrary_49201725_55958230.pdf" target="_blank">
                                <Chip 
                                        color="secondary"
                                        variant="outlined" 
                                        label="файл"
                                        icon={<PictureAsPdfIcon/>}
                                    />
                                </Button>
                                {/* <Button variant="outlined"><Avatar src={icon_e} />eLibrary</Button> */}
                            </Stack>
                        </CardContent>
                    </Stack>
                    <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem color="primary" />}
                    spacing={2}
                    maxWidth='md'
                    >
                        <CardMedia
                        component="img"
                        height={400}
                        image={img2}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="div">
                            Искусственный интеллект в автоматизированных системах управления и обработки данных. 
                            Сборник статей Всероссийской научной конференции (Москва, 27–28 апреля 2022 г.) = 
                            Artificial Intelligence in Management, Control, and Data Processing Systems. Proceedings of the All-Russian Scientific Conference 
                            (Moscow, April 27–28, 2022) : в 2 т. / Министерство науки и высшего образования Российской Федерации, Федеральное государственное 
                            бюджетное образовательное учреждение высшего образования «Московский государственный технический университет имени Н.Э. Баумана 
                            (национальный исследовательский университет)». — Москва : Издательство МГТУ им. Н.Э. Баумана, 2022. <br />
                            Т. 2. — 412, [2] c. : ил.
                            </Typography>
                            <Stack direction="row" spacing={0}>
                                <Button color="secondary" component="a" href="https://www.elibrary.ru/item.asp?selid=49219336&id=49219281" target="_blank">
                                    <Chip 
                                        color="secondary"
                                        variant="outlined" 
                                        label="страница"
                                        icon={<Avatar src={icon_e} />} 
                                    />
                                </Button>
                                <Button color="secondary" component="a" href="https://www.elibrary.ru/download/elibrary_49219281_51986672.pdf" target="_blank">
                                <Chip 
                                        color="secondary"
                                        variant="outlined" 
                                        label="файл"
                                        icon={<PictureAsPdfIcon/>}
                                    />
                                </Button>
                                {/* <Button variant="outlined"><Avatar src={icon_e} />eLibrary</Button> */}
                            </Stack>
                        </CardContent>
                    </Stack>
                </Stack>
                </Typography>
            </Container>
        </Box>
    );
}