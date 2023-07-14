import { Box } from "./Box";

export function Layout() {
  return (
    <div className="layout">
      <div className="item-image">
        <Box variant="large" title="image" />
      </div>
      <div className="item-title">
        <Box variant="medium" title="title" />
      </div>
      <div className="item-actions">
        <Box variant="small" title="actions" />
      </div>
      <div className="item-pricing">
        <Box variant="medium-alt" title="pricing" />
      </div>
    </div>
  );
}
