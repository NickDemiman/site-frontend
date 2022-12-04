import Card from '../Components/Card'
import {
    Typography,
    Container,
    Grid,
} from '@mui/material'
import axios from 'axios'
import {host} from '../store'
import { Component } from 'react';


class Organizers extends Component {
    constructor (){
        super();
    };

    state = {
        programPR: [],
        programMembers: [],
        orgPR: [],
        orgMembers: [],
        checked: false
    }

    componentDidMount(){
        const apiUrl = host()+'/api/get_workers';
        axios.get(apiUrl).then((resp) => {
          var persons = resp.data.filter(function(e){
            return e.stype=="program_PR"
          });
          this.setState({programPR: persons});
          
          persons = resp.data.filter(function(e){
            return e.stype=="program_Member"
          });
          this.setState({programMembers: persons});
          
          persons = resp.data.filter(function(e){
            return e.stype=="org_PR"
          });
          this.setState({orgPR: persons});
          
          persons = resp.data.filter(function(e){
            return e.stype=="org_Member"
          });
          this.setState({orgMembers: persons});

          this.setState({checked: true})
        });
    }

    render() {
        return (
            <>
                <Container maxWidth="lg">
                    <section>
                        <Typography variant='h3' textAlign={"center"} component={'h1'}>Программный комитет конференции</Typography>
                        <div sx={{ marginTop: 2 }}>
                            <Typography variant='h4' textAlign={"center"} component={'h1'}>Председатель программного комитета</Typography>
                            <Grid container minHeight={160}>
                                <Grid justifyContent="center" container xs>
                                {this.state.programPR.map(person =>
                                <Card
                                    title={person.name}
                                    body={person.desc}
                                    img={person.img}
                                    style={{ transitionDelay: this.checked ? '1000ms' : '0ms' }}
                                />
                                )}
                                </Grid>
                            </Grid>
                        </div>
                        <div sx={{ marginTop: 2 }}>
                            <Typography variant='h4' textAlign={"center"} component={'h1'}>Члены программного комитета</Typography>
                            <Grid justifyContent="center" container xs>
                                {this.state.programMembers.map(person =>
                                        <Card
                                        title={person.name}
                                        body={person.desc}
                                        img={person.img}
                                        item
                                        xs={8}
                                        />
                                        )
                                    }
                            </Grid>
                        </div>
                    </section>
                    
                    <section>
                        <Typography variant='h3' textAlign={"center"} component={'h1'}>Организационный комитет конференции</Typography>
                        <div sx={{ marginTop: 2 }}>
                            <Typography variant='h4' textAlign={"center"} component={'h1'}>Председатель организационного комитета</Typography>
                            <Grid justifyContent="center" container xs>
                                {this.state.orgPR.map(person =>
                                        <Card
                                            title={person.name}
                                            body={person.desc}
                                            img={person.img}
                                            item
                                            xs={8}
                                        />
                                    )
                                }
                            </Grid>
                        </div>
                        <div sx={{ marginTop: 2 }}>
                            <Typography variant='h4' textAlign={"center"} component={'h1'}>Члены организационного комитета</Typography>
                            <Grid justifyContent="center" container xs>
                                {this.state.orgMembers.map(person =>
                                        <Card
                                            title={person.name}
                                            body={person.desc}
                                            img={person.img}
                                            item
                                            xs={8}
                                        />
                                    )
                                }
                            </Grid>
                        </div>
                    </section>
                </Container>
            </>
        );
    };
}

export default Organizers;