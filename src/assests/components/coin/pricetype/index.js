
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import "./style.css"

export default function TogglePriceType({priceType,handlePriceTypeChange}) {
//   const [priceType, setPriceType] = useState('prices');

//   const handlePriceTypeChange = (event,newType) => {
//     setPriceType(newType);
//   };

  return (
    <div className='price-toggle'>
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
sx={{
    "& .Mui-selected":{
        color:"var(--blue) !important",
    },
    borderColor:"var(--blue)",
    barder:"unset !important",
    "& .MuiToggleButtonGroup-grouped":{
        border:"1px solid !important",
        borderColor:"unset",
        color:"var(--blue)",
    },
    "& MuiToggleButton-standard":{
        color:"var(--blue)",
    }
}}

    >
      <ToggleButton value="prices" className='toggle-btn'>Price</ToggleButton>
      <ToggleButton value="market_caps" className='toggle-btn'>Market Cab</ToggleButton>
      <ToggleButton value="total_volumes" className='toggle-btn'>Total Volume</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}