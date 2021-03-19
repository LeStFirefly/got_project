import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import GotService from '../../../services/gotService';
import ErrorMessage from '../../errorMessage';

export default class CharacterPage extends Component {

    gotService = new GotService; 

    state = {
        selectedHouse: 1,
        error : false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
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
                    <ItemList onItemSelected={this.onItemSelected} getData={this.gotService.getAllHouses}/>
                </Col>
                <Col md='6'>
                    <ItemDetails itemId={this.state.selectedHouse} getData={this.gotService.getHouse}>
                        <Field field='region' label = 'Region'/>
                        <Field field='words' label = 'Words'/>
                        <Field field='titles' label = 'Titles'/>
                        <Field field='overlord' label = 'Overlord'/>
                        <Field field='ancestralWeapons' label = 'Ancestral Weapons'/>
                    </ItemDetails>
                </Col>
            </Row>
        )
    }
}