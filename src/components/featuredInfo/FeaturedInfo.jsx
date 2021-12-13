import "./featuredInfo.css";

import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featureElements">
          <span className="featuredIcon">
            <StorefrontOutlinedIcon />
          </span>
          <div className="featuredRegisteredUnit">
            <span className="featuredTitle">Unidades Registradas</span>
            <span className="featuredRate">1</span>
          </div>
        </div>
      </div>

      <div className="featuredItem  ">
        <div className="featureElements">
          <span className="featuredIcon">
            <PeopleAltOutlinedIcon />
          </span>
          <div className="featuredRegisteredUnit">
            <span className="featuredTitle">Clientes</span>
            <span className="featuredRate">104</span>
          </div>
        </div>
      </div>

      <div className="featuredItem  ">
        <div className="featureElements">
          <span className="featuredIcon">
            <LoyaltyOutlinedIcon />
          </span>
          <div className="featuredRegisteredUnit">
            <span className="featuredTitle">Vendas Realizadas</span>
            <span className="featuredRate">7002</span>
          </div>
        </div>
      </div>

      <div className="featuredItem  ">
        <div className="featureElements">
          <span className="featuredIcon">
            <AccountBalanceOutlinedIcon />
          </span>
          <div className="featuredRegisteredUnit">
            <span className="featuredTitle">Lucro Liquido(Geral)</span>
            <span className="featuredRate">R$ 427.300,50</span>
          </div>
        </div>
      </div>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
