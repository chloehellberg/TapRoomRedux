import React from 'react';
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as actions from './../actions';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = actions.addKeg(newKeg);
    dispatch(action);
    const action2 = actions.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const action = actions.selectedKeg(id);
    dispatch(action);
  }

  handleDeletingKeg = (id) => {
   const { dispatch } = this.props;
   const action = actions.deleteKeg(id);
   dispatch(action);
   const action2 = actions.selectedKeg(id);
   dispatch(action2);
  }

  handleClick = () => {
    if (this.props.selectedKeg != null) {
     const { dispatch } = this.props;
     const action2 = actions.selectedKeg();
     dispatch(action2);
    } else {
      const { dispatch } = this.props;
      const action = actions.toggleForm();
      dispatch(action);
    } 
  }

  

  handleSellingPint = (id) => {
    const newMasterKegList = this.props.masterKegList;
    Object.values(newMasterKegList).map((keg) => {
      if(keg.id === id) {
        if (keg.quantity <= 11 && keg.quantity >1) {
          keg.status = "Almost out of stock";
          keg.quantity = keg.quantity -1
        } else if (keg.quantity > 1) {
          keg.quantity = keg.quantity - 1;
        } else {
          keg.quantity = 0;
          keg.status = "Out of stock!"
        }
      }
      return keg;
    })
    this.setState({
      masterKegList: newMasterKegList
    })
  }

  handleStockingKeg = (id) => {
    const newMasterKegList = this.props.masterKegList;
    Object.values(newMasterKegList).map((keg) => {
      if(keg.id === id) {
        if(keg.quantity === 0) {
          keg.quantity = 124;
          keg.status = "Keg is full";
        }
      }
      return keg;
    });
    this.setState({
      masterKegList: newMasterKegList
    })
  }

  render(){
    let currentVisibleState = null;
    let buttonText = null;
    console.log("SELECTED KEG: ", this.props.selectedKeg);
    if (this.props.selectedKeg != null) {
      currentVisibleState = <KegDetail keg = {this.props.selectedKeg} onClickingDelete = {this.handleDeletingKeg}/>
      buttonText = 'Return to Keg List'
    } else if(this.props.formVisibleOnPage) {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onSellPint={this.handleSellingPint} onStockKeg={this.handleStockingKeg}/>;
      buttonText = "Add New Keg"
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        <button className='btn btn-info' onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;