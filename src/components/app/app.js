import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../pages/characterPage/';
import BookPage from '../pages/bookPage/';
import HousePage from '../pages/housePage/';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

    state = {
        showRandomChar : true,
        error : false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }
    
    toggleRandomChar = () => {
        this.setState({
            showRandomChar : !this.state.showRandomChar
        })
    }

    render() {
        const {showRandomChar} = this.state;
        const randomChar = showRandomChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <Router>
                <div className='app'> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {randomChar}
                                <Button color="primary" onClick={this.toggleRandomChar} style={{marginBottom: '20px'}}>{showRandomChar ? 'Hide random character' : 'Show random character'}</Button>
                            </Col>
                        </Row>
                        <Route path ='/characters/' component={CharacterPage}/>
                        <Route path ='/books/' component={BookPage}/>
                        <Route path ='/houses/' component={HousePage}/>
                    </Container>
                </div>
            </Router>
        );
    }
};

export default App;