import React from "react";

function Entry(props) {
  return (
    <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="emoji">
              {props.emoji}
            </span>
            <span>{props.description}</span>
          </dt>
    </div>
  )


}

export default Entry;
