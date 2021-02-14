import classes from "./Recent.module.css";

const recent = (props) => {
  return (
    <div className={classes.recentGrid}>
      <div className={classes.projects}>
        <div className={classes.card}>
          <div className={classes.cardHeader}>
            <h3>Recent Projects</h3>
            <button>
              See all <span className="las la-arrow-right"></span>{" "}
            </button>
          </div>
          <div className={classes.cardBody}>
            <div className={classes.tableResponsive}>
              <table width="100%">
                <thead>
                  <tr>
                    <td>Project Title</td>
                    <td>Department</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>UI/UX design</td>
                    <td>UI team</td>
                    <td>
                      <span
                        className={`${classes.status} ${classes.purple}`}
                      ></span>
                      review
                    </td>
                  </tr>
                  <tr>
                    <td>Web development</td>
                    <td>Frontend</td>
                    <td>
                      <span
                        className={`${classes.status} ${classes.pink}`}
                      ></span>
                      in progress
                    </td>
                  </tr>
                  <tr>
                    <td>USHop app</td>
                    <td>Mobile team</td>
                    <td>
                      <span
                        className={`${classes.status} ${classes.orange}`}
                      ></span>
                      pending
                    </td>
                  </tr>
                  <tr>
                    <td>UI/UX design</td>
                    <td>UI team</td>
                    <td>
                      <span
                        className={`${classes.status} ${classes.purple}`}
                      ></span>
                      review
                    </td>
                  </tr>
                  <tr>
                    <td>Web development</td>
                    <td>Frontend</td>
                    <td>
                      <span
                        className={`${classes.status} ${classes.pink}`}
                      ></span>
                      in progress
                    </td>
                  </tr>
                  <tr>
                    <td>USHop app</td>
                    <td>Mobile team</td>
                    <td>
                      <span
                        className={`${classes.status} ${classes.orange}`}
                      ></span>
                      pending
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.customers}>
        <div className={classes.card}>
          <div className={classes.cardHeader}>
            <h3>New customer</h3>
            <button>
              See all <span className="las la-arrow-right"></span>{" "}
            </button>
          </div>
          <div className={classes.cardBody}>
            <div className={classes.customer}>
              <div className={classes.info}>
                <img
                  alt="avatar"
                  src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
                  width="40px"
                  height="40px"
                />
                <div>
                  <h4>Lucifer S. Morningstar</h4>
                  <small>CEO</small>
                </div>
              </div>

              <div className={classes.contact}>
                <span className="las la-user-circle"></span>
                <span className="las la-comment"></span>
                <span className="las la-phone"></span>
              </div>
            </div>
            <div className={classes.customer}>
              <div className={classes.info}>
                <img
                  alt="avatar"
                  src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
                  width="40px"
                  height="40px"
                />
                <div>
                  <h4>Lucifer S. Morningstar</h4>
                  <small>CEO</small>
                </div>
              </div>

              <div className={classes.contact}>
                <span className="las la-user-circle"></span>
                <span className="las la-comment"></span>
                <span className="las la-phone"></span>
              </div>
            </div>
            <div className={classes.customer}>
              <div className={classes.info}>
                <img
                  alt="avatar"
                  src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
                  width="40px"
                  height="40px"
                />
                <div>
                  <h4>Lucifer S. Morningstar</h4>
                  <small>CEO</small>
                </div>
              </div>

              <div className={classes.contact}>
                <span className="las la-user-circle"></span>
                <span className="las la-comment"></span>
                <span className="las la-phone"></span>
              </div>
            </div>
            <div className={classes.customer}>
              <div className={classes.info}>
                <img
                  alt="avatar"
                  src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
                  width="40px"
                  height="40px"
                />
                <div>
                  <h4>Lucifer S. Morningstar</h4>
                  <small>CEO</small>
                </div>
              </div>

              <div className={classes.contact}>
                <span className="las la-user-circle"></span>
                <span className="las la-comment"></span>
                <span className="las la-phone"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default recent;
