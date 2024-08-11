import React from "react";
import { useParams } from "react-router-dom";
import { PageWidth } from "../components/PageWidth";
import { PrivacyPolicy } from "../containers/PrivacyPolicy";
import { ShippingPolicy } from "../containers/ShippingPolicy";
import { TermsOfService } from "../containers/TermsOfService";
import { RefundPolicy } from "./RefundPolicy";

const pages = {
  "privacy-policy": (<PrivacyPolicy />),
  "shipping-policy": (<ShippingPolicy />),
  "terms-of-service": (<TermsOfService />),
  "refund-policy": (<RefundPolicy />)
};

function Policies() {
  const { pageName } = useParams();
  const pageContent = pages[pageName];

  return (
    <PageWidth>
        {pageContent || <p>Page not found.</p>}
    </PageWidth>
  );
}

export { Policies };
