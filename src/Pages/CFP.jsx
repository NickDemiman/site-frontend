import {
    Typography,
    Container,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    tableCellClasses,

} from '@mui/material'
import { styled } from '@mui/material/styles';
import { Component } from 'react';
import axios from 'axios';
import { host } from '../store';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

 class CFP extends Component {
    constructor (){
        super();
    };

    state = {
        sections: []
    }

    componentDidMount(){
        const apiUrl = host()+'/api/get_sections';
        axios.get(apiUrl).then((resp) => {
          const section = resp.data;
          this.setState({sections: section});
        });
    }

    render(){
        return (
            <>
            <Container sx={{my: 1}}>
                <Typography variant="body1">
                Тематика конференции включает следующие направления в рамках задач проектирования, разработки, внедрения, интеграции и эксплуатации автоматизированных систем управления и обработки данных:
                </Typography>
    
            <TableContainer component={Paper} sx={{my:1}}>
            <Table sx={{ minWidth: 300 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell align='center'></StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.state.sections.map((section,index) => 
                    <StyledTableRow>
                        <StyledTableCell align="center">{index+1}</StyledTableCell>
                        <StyledTableCell align="left">{section.name}</StyledTableCell>
                    </StyledTableRow>
                )}
            </TableBody>
            </Table>
            </TableContainer>
            </Container>
    
            </>
        );
    }
}

export default CFP;