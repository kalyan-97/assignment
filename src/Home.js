import "./App.css";

const Home = () => {
  return (
    <>
      <div className="page-container">
        <div className="sidebar-container">
          <h1 className="sidebar-heading">
            {" "}
            <i class="fa fa-dot-circle-o" aria-hidden="true"></i> Dashboard
          </h1>
          <div>
            <div className="sidebar-title-container1">
              <div>
                <i class="fa fa-dot-circle-o icons-1" aria-hidden="true"></i>
                <span className="sidebar-title-1"> Dashboard</span>
              </div>
              <i
                class="fa fa-chevron-right arrow-icon-1"
                aria-hidden="true"
              ></i>
            </div>
            <div className="sidebar-title-container">
              <div>
                <i class="fa fa-cube icons" aria-hidden="true"></i>
                <span className="sidebar-title"> Product</span>
              </div>
              <i class="fa fa-chevron-right arrow-icon" aria-hidden="true"></i>
            </div>
            <div className="sidebar-title-container">
              <div>
                <i class="fa fa-user icons" aria-hidden="true"></i>
                <span className="sidebar-title"> Customers</span>
              </div>
              <i class="fa fa-chevron-right arrow-icon" aria-hidden="true"></i>
            </div>
            <div className="sidebar-title-container">
              <div>
                <i class="fa fa-money icons" aria-hidden="true"></i>
                <span className="sidebar-title"> Income</span>
              </div>
              <i class="fa fa-chevron-right arrow-icon" aria-hidden="true"></i>
            </div>
            <div className="sidebar-title-container">
              <div>
                <i class="fa fa-asterisk icons" aria-hidden="true"></i>
                <span className="sidebar-title">Promote</span>
              </div>
              <i class="fa fa-chevron-right arrow-icon" aria-hidden="true"></i>
            </div>
            <div className="sidebar-title-container">
              <div>
                <i class="fa fa-commenting-o icons" aria-hidden="true"></i>
                <span className="sidebar-title">Help</span>
              </div>
              <i class="fa fa-chevron-right arrow-icon" aria-hidden="true"></i>
            </div>
          </div>
          <div className="sidebar-avatar-container">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1711620525~exp=1711624125~hmac=c8b0000327c3edc5f358046c689d3d10b69dce4c0b695294c0554f2f4962c7da&w=240"
              alt=""
              className="sidebar-img"
            />
            <div>
              <h3 className="sidebar-title1"> Pavan</h3>
              <p className="sidebar-para"> Project Manager</p>
            </div>
            <i class="fa fa-chevron-down avatar-icon" aria-hidden="true"></i>
          </div>
        </div>

        <div className="right-sidebar-container">
          <div className="top-name-container">
            <h1 className="top-name">
              {" "}
              Hello Shahrukh{" "}
              <i class="fa fa-hand-paper-o name-icon" aria-hidden="true"></i>
            </h1>
          </div>
          <div className="rsidebar-top-card-container-1">
            <div className="rst-card">
              <div className="icon-container">
                <i class="fa fa-usd dollar-icon" aria-hidden="true"></i>
              </div>
              <div className="content-cont">
                <p className="rst-card-title"> Earning </p>
                <h4 className="rst-card-value"> $198k</h4>
                <span className="rst-card-span">
                  {" "}
                  <i class="fa fa-arrow-up arrowup" aria-hidden="true">
                    37.8%
                  </i>
                  this month
                </span>
              </div>
            </div>
            <div className="rst-card">
              <div className="icon-container2">
                <i class="fa fa-file-text-o order-icon" aria-hidden="true"></i>
              </div>
              <div className="content-cont">
                <p className="rst-card-title"> orders </p>
                <h4 className="rst-card-value"> $2.4k</h4>
                <span className="rst-card-span">
                  {" "}
                  <i class="fa fa-arrow-down arrowdown" aria-hidden="true">
                    2%
                  </i>
                  this month
                </span>
              </div>
            </div>
            <div className="rst-card">
              <div className="icon-container3">
                <i class="fa fa-money money-icon" aria-hidden="true"></i>
              </div>
              <div className="content-cont">
                <p className="rst-card-title"> Balance </p>
                <h4 className="rst-card-value"> $2.4k</h4>
                <span className="rst-card-span">
                  {" "}
                  <i class="fa fa-arrow-down arrowdown" aria-hidden="true">
                    2%
                  </i>
                  this month
                </span>
              </div>
            </div>
            <div className="rst-card">
              <div className="icon-container4">
                <i class="fa fa-shopping-bag bag-icon" aria-hidden="true"></i>
              </div>
              <div className="content-cont">
                <p className="rst-card-title"> Total Sales</p>
                <h4 className="rst-card-value"> $89k</h4>
                <span className="rst-card-span">
                  {" "}
                  <i class="fa fa-arrow-up arrowup" aria-hidden="true">
                    11%
                  </i>
                  this week
                </span>
              </div>
            </div>
          </div>

          <div className="rsidebar-middle-page-wrapper">
            <div className="rsidebar-top-card-container-2">
              <div className="card2-name-container">
                <div className="top-card-name">
                  <h4>Overview</h4>
                  <p>Montly Earning</p>
                </div>
                <div className="select-card">
                  <select>
                    <option className="option"> Quaterly</option>
                  </select>
                </div>
              </div>
              <div className="bar-card-container">
                <div className="bar-card">
                  <div className="bar-1"></div>
                  <p className="bar-title"> Jan </p>
                </div>
                <div className="bar-card">
                  <div className="bar-2"></div>
                  <p className="bar-title"> Feb </p>
                </div>
                <div className="bar-card">
                  <div className="bar-3"></div>
                  <p className="bar-title"> Mar </p>
                </div>
                <div className="bar-card">
                  <div className="bar-4"></div>
                  <p className="bar-title"> Apr </p>
                </div>
                <div className="bar-card">
                  <div className="bar-5"></div>
                  <p className="bar-title"> May </p>
                </div>
                <div className="bar-card">
                  <div className="bar-6"></div>
                  <p className="bar-title"> Jun </p>
                </div>
                <div className="bar-card">
                  <div className="bar-7"></div>
                  <p className="bar-title"> Jul </p>
                </div>
                <div className="bar-card">
                  <div className="bar-8"></div>
                  <p className="bar-title"> Aug </p>
                </div>
                <div className="bar-card">
                  <div className="bar-9"></div>
                  <p className="bar-title"> Sep </p>
                </div>
                <div className="bar-card">
                  <div className="bar-10"></div>
                  <p className="bar-title"> Oct </p>
                </div>
                <div className="bar-card">
                  <div className="bar-11"></div>
                  <p className="bar-title"> Nov </p>
                </div>
                <div className="bar-card">
                  <div className="bar-12"></div>
                  <p className="bar-title"> Dec </p>
                </div>
              </div>
            </div>

            <div className="rsidebar-top-card-container-3">
              <div>
                <h1 className="customer-card-title"> Customers</h1>
                <p className="customer-card-para">
                  Customers that buy products{" "}
                </p>
              </div>
              <div className="customer-circle1"> </div>
            </div>
          </div>

          <div className="rside-endpage-container">
            <div className="emdpage-title-container">
              <h1 className="endpage-title"> Product Sell </h1>
              <div>
                <input
                  className="endpage-input"
                  type="search"
                  placeholder="search"
                />
                <select className="endpage-select">
                  <option className="endpage-select-option">
                    {" "}
                    Last 30days
                  </option>
                </select>
              </div>
            </div>
            <div className="end-page-table-container">
              <table>
                <tr>
                  <th className="product-name">Product Name</th>
                  <th className="stock">Stock</th>
                  <th className="price">Price</th>
                  <th className="tsales">Total Sales</th>
                </tr>
                <tr>
                  <td className="productpage-imgRow">
                    <img
                      src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg?t=st=1711640608~exp=1711644208~hmac=133a197373ec11bc83e79d948d1113079397af7cd15e327f06fcc4fbeb59d20a&w=900"
                      alt="productImg"
                      className="productImg"
                    />
                    <div>
                      <h4 className="productpage-title"> Abstract 3D</h4>
                      <p>
                        {" "}
                        lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </div>
                  </td>
                  <td className="stock-text">32 in stock</td>
                  <td className="table-price">$45.99</td>
                  <td className="table-sales">20</td>
                </tr>
                <tr>
                  <td className="productpage-imgRow">
                    <img
                      src="https://img.freepik.com/free-photo/fictional-planet-with-colourful-night-sky-stars-nebula_1048-7926.jpg?t=st=1711641129~exp=1711644729~hmac=2c64a3b04b2ede7399c05b205b58f8fb94d1375f9cf2ef30fb9cdcad21fb946a&w=740"
                      alt="productImg"
                      className="productImg"
                    />
                    <div>
                      <h4 className="productpage-title">
                        {" "}
                        Sarphens illustration
                      </h4>
                      <p>
                        {" "}
                        lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </div>
                  </td>
                  <td className="stock-text">32 in stock</td>
                  <td className="table-price">$45.99</td>
                  <td className="table-sales">20</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
