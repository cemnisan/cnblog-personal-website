import React from "react";

function Error({ emailErr, nameErr, lastNameErr, cityErr }) {
  return (
    <React.Fragment>
      {emailErr && (
        <div className="alert alert-danger" role="alert">
          Lütfen geçerli bir e-posta giriniz.
        </div>
      )}
      {nameErr && (
        <div className="alert alert-danger" role="alert">
          Lütfen geçerli bir isim giriniz.
        </div>
      )}
      {lastNameErr && (
        <div className="alert alert-danger" role="alert">
          Lütfen geçerli bir soy-isim giriniz.
        </div>
      )}
      {cityErr && (
        <div className="alert alert-danger" role="alert">
          Lütfen geçerli bir bir şehir giriniz.
        </div>
      )}
    </React.Fragment>
  );
}

export default Error;
