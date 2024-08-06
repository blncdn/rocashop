import React from "react";

function FreeShippingBar() {
  return (
    <div className="page-width">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x border-divider border my-3">
        <div className="p-2 border-divider">
          <h2>Kostenloser Versand</h2>
          <p>Erhalten Sie kostenlosen Versand für alle Bestellungen über 50€.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Bestpreis</h2>
          <p>Wir bieten die besten Preise für alle unsere Produkte.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Luxuriös und Eigenartig</h2>
          <p>Erleben sie Lux und Glanz ganz nah.</p>
        </div>
      </div>
    </div>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};