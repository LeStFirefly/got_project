import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import GotService from '../../../services/gotService';
import ErrorMessage from '../../errorMessage';

export default class CharacterPage extends Component {
    gotService = new GotService();

    state = {
        selectedChar: 130,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return(
            <Row>
                <Col md='6'>
                    <ItemList
                        onItemSelected={this.onItemSelected}
                        getData={this.gotService.getAllCharacters}/>
                </Col>
                <Col md='6'>
                    <ItemDetails
                    itemId={this.state.selectedChar}
                    getData={this.gotService.getCharacter} >
                        <Field field='gender' label='Gender'/>
                        <Field field='born' label='Born'/>
                        <Field field='died' label='Died'/>
                        <Field field='culture' label='Culture'/>
                    </ItemDetails>
                </Col>
            </Row>
        )
    }
}