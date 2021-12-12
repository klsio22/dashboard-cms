import React from "react";
import "./featuredInfo.css";

import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem  ">
        <span className="featuredTitle">Unidades Registradas</span>
        <div className="featuredRegisteredUnit">
          <span className="featuredIcon">
            <StorefrontOutlinedIcon />
          </span>
          <span className="featuredRate">1</span>
        </div>
      </div>

      <div className="featuredItem  ">
        <span className="featuredTitle">Clientes</span>
        <div className="featuredRegisteredUnit">
          <span className="featuredIcon">
            <PeopleAltOutlinedIcon />
          </span>
          <span className="featuredRate">104</span>
        </div>
      </div>

      <div className="featuredItem  ">
        <span className="featuredTitle">Vendas Realizadas</span>
        <div className="featuredRegisteredUnit">
          <span className="featuredIcon">
            <LoyaltyOutlinedIcon />
          </span>
          <span className="featuredRate">Vendas Realizadas</span>
        </div>
      </div>

      <div className="featuredItem  ">
        <span className="featuredTitle">Lucro Liquido (Geral)</span>
        <div className="featuredRegisteredUnit">
          <span className="featuredIcon">
            <AccountBalanceOutlinedIcon />
          </span>
          <span className="featuredRate">R$ 427.300,50</span>
        </div>
      </div>

      <div></div>
      <div></div>
      <div></div>

    </div>
  );
}
