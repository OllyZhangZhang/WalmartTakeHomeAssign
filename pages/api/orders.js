import orders from "../../data/orders.json";
import React from "react";
import Switch from '@material-ui/core/Switch';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";
import Products from "./products";

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: orders,
      totalNum: orders.length,
      checked: true,
      open: false,
      modalId: 0
    };
  }

  toggleChecked() {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
    if (this.state.checked) {
      this.setState({
        totalNum: this.state.orders.filter(i => i.isDeliveved == true).length
      })
    } else {
      this.setState({
        totalNum: this.state.orders.length
      })
    }
  };

  handleRowClick(id) {
    this.setState({
      open: true,
      modalId: id
    });
  }


  onClose() {
    this.setState(({
      open: false
    }));
  }

  onSort(event, sortKey){
    const data = this.state.orders;
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
    this.setState({orders: data})
  }

  render() {

    return (
      <div className="wholePage">
        <div className="infoBar">
          <div className="inline">Orders({this.state.totalNum})</div>
          <div className="inline toggle">Show Delivered <Switch
            size="medium" color="primay" onChange={this.toggleChecked.bind(this)}
          /></div>
        </div>

        <div className="Orders">
          <Table >
            <Thead>
              <Tr>
                <Th onClick={e => this.onSort(e, 'orderId')}>Order #</Th>
                <Th onClick={e => this.onSort(e, 'customerId')}>Customer ID</Th>
                <Th onClick={e => this.onSort(e, 'orderCreatedAt')}>Order Date</Th>
                <Th>Delivered</Th>
              </Tr>
            </Thead>
            <Tbody>
              {this.state.checked ?
                this.state.orders.map((i) => <Tr key={i.orderId} onClick={() => this.handleRowClick(i.orderId)}>
                  <Td>{i.orderId}</Td>
                  <Td>{i.customerId}</Td>
                  <Td>{new Date(i.orderCreatedAt).toLocaleDateString()}</Td>
                  <Td>{i.isDeliveved.toString()}</Td>
                </Tr>) :
                this.state.orders.filter(i => i.isDeliveved == true).map((i) => <Tr key={i.orderId} onClick={() => this.handleRowClick(i.orderId)}>
                  <Td>{i.orderId}</Td>
                  <Td>{i.customerId}</Td>
                  <Td>{new Date(i.orderCreatedAt).toLocaleDateString()}</Td>
                  <Td>{i.isDeliveved.toString()}</Td>
                </Tr>)
              }
            </Tbody>
          </Table>
        </div>
        <div className="modal">
          <Modal isOpen={this.state.open} onClose={this.onClose.bind(this)} scrollable={true}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Products data={this.state.modalId}></Products>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Orders;

