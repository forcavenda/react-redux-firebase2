import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from '../../components/iconButton';
import { markAsDone, markAsPending, remove } from '../../actions/todosAction'


const TodoGrid = props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(item => (
            <tr key={item._id}>
                <td>{item.task}</td>
                <td>
                    <IconButton style={buttonStyle} color="success" icon="check" />
                    <IconButton style={buttonStyle} color="warning" icon="undo" />
                    <IconButton style={buttonStyle} color="danger" icon="trash-o" />
                </td>
            </tr>

        ))
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th style={tableActions}>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const buttonStyle = { marginRight: "5px" }
const tableActions = { width: "105px" }

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoGrid)
