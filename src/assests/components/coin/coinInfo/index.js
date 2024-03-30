import React, { useState } from "react";
import "./style.css";

function CoinInfo({ heading, desc }) {
  const shortDesc =
    desc.slice(0, 300) + "<p style='color:var(--gray)'>Read more...</p>";
  const longDesc = desc + "<p style='color:var(--gray)'>Read less</p>";

  const [flag, setFlag] = useState(false);
  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-header">{heading}</h2>
      {desc.length > 300 ? (
      <p
        onClick={() => setFlag(!flag)}
        className="coin-info-desc"
        dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
      />
      ) :(
        <p dangerouslySetInnerHTML={{ __html: desc }}/>
      )
}
    </div>
  );
}
export default CoinInfo;
