import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

export default function TogglePriceType() {
  const [priceType, setPriceType] = useState('prices');

  const handlePriceTypeChange = (event,newType) => {
    setPriceType(newType);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handlePriceTypeChange}
    >
      <ToggleButton value="prices" >Price</ToggleButton>
      <ToggleButton value="market_cabs" >Market Cab</ToggleButton>
      <ToggleButton value="total_volumes" >Total Volume</ToggleButton>
    </ToggleButtonGroup>
  );
}