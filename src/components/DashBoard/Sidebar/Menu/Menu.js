import classes from "./Menu.module.css";

const menu = (props) => {
  const hide = () => {
    if (props.isCollapse) {
      return classes.hide;
    } else {
      return;
    }
  };
  return (
    <div className={classes.sidebarMenu}>
      <ul>
        <li>
          <a className={classes.active} href="!#">
            <span className="las la-igloo"></span>
            <span className={hide()}>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="!#">
            <span className="las la-users"></span>
            <span className={hide()}>Customers</span>
          </a>
        </li>
        <li>
          <a href="!#">
            <span className="las la-clipboard-list"></span>
            <span className={hide()}>Projects</span>
          </a>
        </li>
        <li>
          <a href="!#">
            <span className="las la-shopping-bag"></span>
            <span className={hide()}>Orders</span>
          </a>
        </li>
        <li>
          <a href="!#">
            <span className="las la-receipt"></span>
            <span className={hide()}>Inventory</span>
          </a>
        </li>
        <li>
          <a href="!#">
            <span className="las la-user-circle"></span>
            <span className={hide()}>Accounts</span>
          </a>
        </li>
        <li>
          <a href="!#">
            <span className="las la-clipboard-list"></span>
            <span className={hide()}>Tasks</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default menu;
