import React from "react";
import "./sidebar.css";
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>

          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <ReceiptOutlinedIcon className="sidebarIcon"/>Pedidos
            </li>
            
            <li className="sidebarListItem">
              <AddShoppingCartIcon className="sidebarIcon"/>Produtos
            </li>

            <li className="sidebarListItem">
              <PeopleAltOutlinedIcon className="sidebarIcon" />Clientes
            </li>

            <li className="sidebarListItem">
              <MonetizationOnOutlinedIcon className="sidebarIcon" />Finaceiro
            </li>
            

          </ul>
        </div>
      </div>
    </div>
  );
}
