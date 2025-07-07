import React from "react";

function AccountTypeBox(props) {
  return (
    <>
      <div class="account-type-box  border">
        <div class="account-type-box-body">
          <h5 class="account-type-box-title">{props.title}</h5>
          <p class="account-type-box-text">
            {props.description}
          </p>
  
        </div>
      </div>
    </>
  );
}

export default AccountTypeBox;
