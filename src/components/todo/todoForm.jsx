import React, { Component } from 'react';
import { Row, InputGroup, InputGroupAddon, Col, Input, Label } from 'reactstrap';
import PageHeader from '../../components/pageHeader';
import IconButton from '../../components/iconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add, changeDescription, search, clear } from '../../actions/todosAction';


class TodoForm extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        const { add, search, description } = this.props;
        return (<div>
            <Row>
                <Col xs="12" sm="9">
                    <InputGroup>
                        <Input style={inputStyle} placeholder="Tarefa" />
                    </InputGroup>
                </Col>
                <Col xs="12" sm="3">
                    <IconButton style={buttonStyle} onClick={() => add(description)} color="primary" icon="plus" />
                    <IconButton style={buttonStyle} onClick={() => search(description)} color="info" icon="search" />
                    <IconButton style={buttonStyle} onClick={() => clear()} color="danger" icon="close" />
                </Col>
            </Row>
        </div>)
    }
}

const inputStyle = { marginBottom: "11px" }
const buttonStyle = { marginRight: "5px" }

const mapStateToProps = state => ({ description: state.todo.description });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)