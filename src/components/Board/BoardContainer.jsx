import React from "react";
import Board from "./Board";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    addCard_1, addCard_2, addCard_3, addDescription,
    addElementId, changeText, editHeader,
} from "../../redux/board-reducer";

class BoardContainer extends React.Component {
    render() {
        return (
            <>
                <Board
                    boardData_1={this.props.boardData_1}
                    boardData_2={this.props.boardData_2}
                    boardData_3={this.props.boardData_3}
                    changeText={this.props.changeText}
                    editHeader={this.props.editHeader}
                    changeDescription={this.props.changeDescription}
                    addCard_1={this.props.addCard_1}
                    addCard_2={this.props.addCard_2}
                    addCard_3={this.props.addCard_3}
                    addDescription={this.props.addDescription}
                    addElementId={this.props.addElementId}
                    newText={this.props.newText}
                    newDescription={this.props.newDescription}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    boardData_1: state.board.boardData_1,
    boardData_2: state.board.boardData_2,
    boardData_3: state.board.boardData_3,
    newText: state.board.newText,
    newDescription: state.board.newDescription
});

export default compose(
    connect(mapStateToProps, {changeText, editHeader, addCard_1, addCard_2, addCard_3, addDescription, addElementId})(BoardContainer));