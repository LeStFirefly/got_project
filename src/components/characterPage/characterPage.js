import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';

export default class CharacterPage extends Component {

    gotService = new GotService; 

    state = {
        selectedChar: 130,
        error : false
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error:true
        })
    }

    render() {
        
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return(
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected} getData={this.gotService.getAllCharacters}/>
                </Col>
                <Col md='6'>
                    <ItemDetails itemId={this.state.selectedChar} getData={this.gotService.getCharacter}/>
                </Col>
            </Row>
        )
    }
}




