import React from 'react';
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !==id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleSellingPint = (id) => {
    const newMasterKegList = this.state.masterKegList;
    newMasterKegList.map((keg) => {
      if(keg.id === id) {
        if (keg.quantity > 1) {
          keg.quantity = keg.quantity - 1;
        } else {
          keg.quantity = "Out of stock!"
        }
      }
      return keg;
    })
    this.setState({
      masterKegList: newMasterKegList
    })
  }

  handleStockingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList;
    newMasterKegList.map((keg) => {
      if(keg.id === id) {
        if(keg.quantity === "Out of stock!") {
          keg.quantity = 124;
        }
      }
      return keg;
    })
    this.setState({
      masterKegList: newMasterKegList
    })
  }

  render(){
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg}/>
      buttonText = 'Return to Keg List'
    } else if(this.state.formVisibleOnPage) {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onSellPint={this.handleSellingPint} onStockKeg={this.handleStockingKeg}/>;
      buttonText = "Add New Keg"
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;