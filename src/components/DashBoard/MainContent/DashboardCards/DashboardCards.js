import classes from "./DashboardCards.module.css";
import Auxilary from "../../../../hoc/Auxilary";
const dashboardCards = (props) => {
  return (
    <Auxilary>
      <div className={classes.cards}>
        <div className={classes.cardSingle}>
          <div>
            <h1>54</h1>
            <span>Customer</span>
          </div>
          <div>
            <span className="las la-users"></span>
          </div>
        </div>

        <div className={classes.cardSingle}>
          <div>
            <h1>79</h1>
            <span>Projects</span>
          </div>
          <div>
            <span className="las la-clipboard-list"></span>
          </div>
        </div>

        <div className={classes.cardSingle}>
          <div>
            <h1>123</h1>
            <span>Orders</span>
          </div>
          <div>
            <span className="las la-shopping-bag"></span>
          </div>
        </div>

        <div className={classes.cardSingle}>
          <div>
            <h1>$6k</h1>
            <span>Income</span>
          </div>
          <div>
            <span className="lab la-google-wallet"></span>
          </div>
        </div>
      </div>
    </Auxilary>
  );
};
export default dashboardCards;
