import React from "react";
import "../index.css";

function Footer() {
  return (
    <div className="container-fluid footer" style={{ background: "#FBFBFB" }}>
      <div className="container ">
        <div className="footer-grid">
          {/* Logo & social */}
          <div className="col-12 text-start">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              className="footer-logo"
            />
            <p className="mt-3 text-muted">
              &copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>

            <div className="d-flex gap-3 mt-3">
              <a
                href="https://wa.me/918840214687"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-whatsapp fa-lg"></i>
              </a>
              <a
                href="https://github.com/mamta2124"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github fa-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mamta-chauhan-66062b2ab/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin-square fa-lg"></i>
              </a>
              <a href="mailto:mamtachauhan6386@gmail.com">
                <i className="fa fa-envelope fa-lg"></i>
              </a>
            </div>
            <hr />
          </div>

          {/* Accounts */}
          <div className="col-12  text-start">
            <h5 className="footer-heading">Accounts</h5>
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Open demat account
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Minor demat account
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              NRI demat account
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Commodity
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Dematerialisation
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Fund transfer
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              MTF
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Referral program
            </a>
            <br />
          </div>

          {/* Support */}
          <div className="col-12 text-start">
            <h5 className="footer-heading">Support</h5>
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Contact us
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Support portal
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              How to file a complaint?
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Status of your complaints
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Bulletin
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Circular
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Z-Connect blog
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Downloads
            </a>
            <br />
          </div>

          {/* Company */}
          <div className="col-12 text-start">
            <h5 className="footer-heading">Company</h5>
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              About
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Philosophy
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Press & media
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Careers
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Zerodha Cares (CSR)
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Zerodha.tech
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Open source
            </a>
            <br />
          </div>

          {/* Quick links */}
          <div className="col-12 text-start">
            <h5 className="footer-heading">Quick links</h5>
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Upcoming IPOs
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Brokerage charges
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Market holidays
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Economic calendar
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Calculators
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Markets
            </a>
            <br />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2">
              Sectors
            </a>
            <br />
          </div>
        </div>

        <p className="mt-5 small text-muted text-start">
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
          no.: INZ000031633 CDSL: Depository services through Zerodha Broking
          Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
          Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
          INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
          Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>
        <p className="small text-muted text-start">
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <a className="small text-muted text-start">
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
        </a>
        <p className="small text-muted text-start">
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p className="small text-muted text-start">
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p className="small text-muted text-start">
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>

        <p className="text-center border-top mt-4 fw-bold">
          &copy; 2025 Design & develop by Mamta
        </p>
      </div>
    </div>
  );
}

export default Footer;
