import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export default function Error() {
  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center flex-column">
        <Icon icon="tabler:error-404" className="mb-5" width={100} />
        <p>
          <Link to="/">
            {" "}
            Go Back To Our Website <Icon icon="mingcute:back-line" />
          </Link>
        </p>
      </div>
    </>
  );
}
