import React, { Component } from 'react';
import './css/Table.css';
import { FaCheckCircle } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';

class Element extends React.Component {
  onEditClick = () => {
    this.props.onEditClick(this.props.recordId);
  }

  onSaveClick = () => {
    this.props.onSaveClick(this.props.recordId);
  }

  onEditChange = (e) => {
    this.props.onEditChange(this.props.recordId, e.target.value);
  }

  renderInput() {
    if (this.props.isEditMode) {
      return (
        <div >
          <input
            type="text"


            onChange={this.onEditChange}
            value={this.props.score}
          />
          <span>
            <button

              type="button"
              onClick={this.onSaveClick}
            >< FaCheckCircle />
            </button>
          </span>
        </div>
      );
    }

    return (
      <div>
        <span>{this.props.score}</span>


        <button
          className="btn btn-primary"
          type="button"
          onClick={this.onEditClick}
        ><FaPen />
        </button>


      </div>
    );
  }

  render() {
    return (
      <tr>
        <td id="td" class="colum">{this.props.id}</td>
        <td id="td">{this.props.name}</td>
        <td id="td">{this.props.surname}</td>
        <td id="td">
          {this.renderInput()}
        </td>
      </tr>
    );
  }
}

class Table extends React.Component {
  state = {
    data: [
      { id: 1, name: 'Anna', surname: 'Ananyan', score: 10, isEditMode: false },
      { id: 2, name: 'Alla', surname: 'Balayan', score: 5, isEditMode: false },
      { id: 3, name: 'Vahan', surname: 'Manasyan', score: 15, isEditMode: false },
      { id: 4, name: 'Gor', surname: 'Ayvazyan', score: 20, isEditMode: false }
    ]
  }

  onEditClick = (recordId) => {
    let data = this.state.data;
    data[recordId].isEditMode = true;
    this.setState({
      data: data
    })
  }

  onSaveClick = (recordId) => {
    let data = this.state.data;
    data[recordId].isEditMode = false;
    this.setState({
      data: data
    })
  }


  onEditChange = (recordId, value) => {
    let data = this.state.data;
    data[recordId].score = value;
    this.setState({
      data: data
    });
  }

  renderTableHeader() {
    return (
      <tr id="data">
        <th id="th" classsName="colum">ID</th>
        <th id="th">Name</th>
        <th id="th">Surname</th>
        <th id="th">Score</th>
      </tr>

    );
  }

  renderTableData() {
    return this.state.data.map((data, index) => {
      const { id, name, surname, score, isEditMode } = data //destructuring
      return (
        <Element
          key={id}
          id={id}
          recordId={index}
          name={name}
          surname={surname}
          score={score}
          isEditMode={isEditMode}
          onEditClick={this.onEditClick}
          onSaveClick={this.onSaveClick}
          onEditChange={this.onEditChange}
        />
      )
    });
  }

  render() {
    return (
      <div>
        <h1 align="center">My Table</h1>
        <table id='data' className="table">
          <tbody>
            {this.renderTableHeader()}
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
