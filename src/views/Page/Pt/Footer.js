import React, { Component } from "react";
// import Contact from "../Contact";
import facebook from "../Image/Facebook.png";
import twitter from "../Image/Twiter.png";
import linkedin from "../Image/Ln.png";
import google from "../Image/Medium.png";
import axios from "axios";
import Swal from "sweetalert2";
import qs from "qs";

const API_PATH = "https://tools.dev.myddp.eu/vivadrive.io/contacts.php";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
            // mailSent: false
        };
    }

    handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: "post",
            url: `${API_PATH}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: qs.stringify(this.state)
        })
            .then(result => {
                this.setState({
                    email: ""
                });
                // this.props.history.push("/digitalfleet/pl");
                Swal.fire({
                    title: "Obrigado por nos contactar,",
                    icon: "success",
                    text: "entraremos em contato em breve.",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    title: "Obrigado por nos contactar,",
                    icon: "success",
                    text: "entraremos em contato em breve.",
                    showConfirmButton: false,
                    timer: 2000
                });
            });
    };

    async change(event) {
        await this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    }

    render() {
        const { email } = this.state;
        const mailformat = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
        const isEnabled = email.match(mailformat);
        return (
            <div className="" style={{ marginTop: "40px" }}>
                {/* <Contact /> */}
                <div className="">
                    <div className="col-sm-12 backbone" style={{ width: "100%" }}>
                        <div className="col-sm-7 col-md-12 col-xl-10 backdody ">
                            {/* <p className="font-weight-bold">.</p> */}
                            <p
                                className=" footer-don"
                                style={{
                                    color: "rgb(183, 28, 28)",
                                    marginTop: "80px"
                                }}
                            >
                                Pronto para começar?
              </p>
                            <h1
                                className="landing_heading"
                                style={{ marginTop: "-12px", fontSize: "40px" }}
                            >
                                Transforma já a tua frota
              </h1>
                            <p
                                className="footer-don1 "
                                style={{ marginTop: "20px", fontSize: "15px" }}
                            >
                                {/* {" "}
                Questions? Call us at{" "}
                <strong
                  style={{ color: "rgb(183, 28, 28)", opacity: "1" }}
                  className="font-weight-bolder"
                >
                  1-800-975-5304
                </strong>{" "}
                or email us{" "}
                <strong
                  style={{ color: "rgb(183, 28, 28)", opacity: "1" }}
                  className="font-weight-bolder"
                >
                  digitalfleet@vivadrive.io
                </strong> */}
                                Temos a certeza que vais reduzir a despesa do combustível, manutenção, optimizar o teu TCO e motivar os teus motoristas.
              </p>

                            <div style={{ marginTop: "50px" }}>
                                <form
                                    noValidate
                                    autoComplete="off"
                                    onSubmit={e => this.handleFormSubmit(e)}
                                >
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input
                                                className="form-control"
                                                style={{ border: "1px solid gray", height: "38px" }}
                                                type="text"
                                                name="email"
                                                value={this.state.email}
                                                autoComplete="off"
                                                onChange={this.change.bind(this)}
                                                placeholder="O teu email"
                                            />{" "}
                                        </div>
                                        <div className="col-sm-4">
                                            <input
                                                type="submit"
                                                // onClick={e => this.handleFormSubmit(e)}
                                                disabled={!isEnabled}
                                                value="Começa a poupar!"
                                                className="btn landing_button pl_button"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="bottom_navbar" style={{ width: "100%" }}>
                        <nav
                            className="navbar navbar-expand-lg navbar-dark"
                            style={{ marginLeft: "0px", marginTop: "150px" }}
                        >
                            <ul
                                className="navbar-nav navv mr-auto "
                                style={{ opacity: "0.5" }}
                            >
                                {/* <li className="nav-item nav-item1  ">
                    <a className="nav-link  text-dark  " href="# ">
                      Terms
                    </a>
                  </li>
                  <li className="nav-item nav-item1  ">
                    <a className="nav-link  text-dark " href="/pricing">
                      Plans & Pricing
                    </a>
                  </li> */}
                                {/* <li className="nav-item nav-item1  ">
                    <a className="nav-link  text-dark " href="/landing">
                      About Us
                    </a>
                  </li> */}
                                {/* <li className="nav-item nav-item1  ">
                    <a
                      className="nav-link text-dark"
                      href="#contact"
                      rel="modal:open"
                    >
                      Contact us
                    </a>
                  </li> */}

                                <li className="nav-item nav-item1  ">
                                    <p className="nav-link text-dark">
                                        Copyright 2020 VivaDrive Polska
                  </p>
                                </li>
                            </ul>

                            <ul className="navbar-nav navv nav1 ">
                                <li className="nav-item nav-link   ">
                                    <a
                                        href=" https://www.linkedin.com/company/vivadrive/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        style={{ marginRight: "16px" }}
                                    >
                                        <img
                                            src={linkedin}
                                            alt="Linkedin"
                                            className="social_image"
                                        />
                                    </a>
                                    <a
                                        href="https://twitter.com/vivadriveio"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        style={{ marginRight: "16px" }}
                                    >
                                        <img
                                            src={twitter}
                                            alt="Linkedin"
                                            className="social_image"
                                        />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/pg/vivadriveio"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        style={{ marginRight: "16px" }}
                                    >
                                        <img
                                            src={facebook}
                                            alt="Linkedin"
                                            className="social_image1"
                                        />
                                    </a>
                                    <a
                                        href=" https://medium.com/vivadrive"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <img src={google} alt="Linkedin" className="social_image" />
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="bottom_footer">
                            <nav
                                className="navbar navbar-expand-lg navbar-dark"
                                style={{ marginLeft: "0px", marginTop: "0px" }}
                            >
                                <ul
                                    className="navbar-nav navv mr-auto "
                                    style={{ opacity: "0.5" }}
                                ></ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
