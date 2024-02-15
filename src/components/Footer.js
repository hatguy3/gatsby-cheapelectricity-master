import PropTypes from "prop-types";
import React from "react";

const Footer = ({ companyName }) => (
  <footer className="footer footer-center p-4 bg-base-300 text-base-content">
    <div>
      <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
    </div>
  </footer>
);

Footer.propTypes = {
  companyName: PropTypes.string,
};

Footer.defaultProps = {
  companyName: ``,
};

export default Footer;
