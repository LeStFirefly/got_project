import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import GotService from '../../../services/gotService';
import ErrorMessage from '../../errorMessage';

export default class BookPage extends Component {

    gotService = new GotService; 

    state = {
        selectedBook: 5,
        error : false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
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
                    <ItemList onItemSelected={this.onItemSelected} getData={this.gotService.getAllBooks}/>
                </Col>
                <Col md='6'>
                    <ItemDetails itemId={this.state.selectedBook} getData={this.gotService.getBook}>
                        <Field field = 'numberOfPages' label = 'Number of pages'/>
                        <Field field = 'publiser' label = 'Publiser'/>
                        <Field field = 'released' label = 'Released'/>
                    </ItemDetails>
                </Col>
            </Row>
        )
    }
}