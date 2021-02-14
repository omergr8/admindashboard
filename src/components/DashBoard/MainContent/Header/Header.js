import classes from "./Header.module.css";

const header = (props) => {
  const width = () => {
    if (props.collapseCond) {
      return classes.headerWidth;
    } else {
      return classes.header;
    }
  };

  return (
    <header className={width()}>
      <h2>
        <label onClick={props.checkCollapse}>
          <span className="las la-bars"></span>
        </label>
        Dashboard
      </h2>
      <div className={classes.searchWrapper}>
        <span className="las la-search"></span>
        <input type="search" placeholder="search here" />
      </div>
      <div className={classes.userWrapper}>
        <img
          src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
          className={classes.userImage}
          alt="user"
        />
        <div>
          <h4>AdminName</h4>
          <small>super Admin</small>
        </div>
      </div>
    </header>
  );
};
export default header;
