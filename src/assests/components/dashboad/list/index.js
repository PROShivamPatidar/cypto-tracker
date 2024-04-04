import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import "./style.css";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../function/convertNumber";
import { motion } from "framer-motion";

function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.tr
         initial={{ opacity: 0, x: -50 }} 
         animate={{ opacity: 1, x: 0 }} 
         transition={{ duration: 1 }}
        className="list-row"
      >
        <Tooltip title="Currency Logo" placement="bottom-start">
          <td className="td-image">
            <img src={coin.image} className="coin-logo" />
          </td>
        </Tooltip>

        <Tooltip title="Currency Name" placement="bottom-start">
          <td>
            <div className="name-col">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </td>
        </Tooltip>

        <Tooltip title="Price Change in 24H" placement="bottom-start">
          {coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex">
              <div className="price-chip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip td-icon">
                <TrendingUpRoundedIcon />
              </div>
            </td>
          ) : (
            <td className="chip-flex">
              <div className="price-chip chip-red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip chip-red">
                <TrendingDownRoundedIcon />
              </div>
            </td>
          )}
        </Tooltip>
        <Tooltip title="current price" placement="bottom-end">
          <td>
            <h3
              className="coin-price  td-center-align"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>
        <Tooltip title="Market Volume" placement="bottom-start">
          <td>
            <p className="totol_volume td-right-align td-total-volume">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cab" placement="bottom-start">
          <td className="desktop-td-mkt">
            <p className="totol_volume td-right-align">
              {coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>

        <Tooltip title="Market Cab" placement="bottom-start">
          <td className="mobile-td-mkt">
            <p className="totol_volume td-right-align">
              ${convertNumber(coin.market_cap)}
            </p>
          </td>
        </Tooltip>
      </motion.tr>
    </Link>
  );
}
export default List;
