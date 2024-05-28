import React from "react";

const TaskPart = (props) => {
  return (
    <div class="session-area">
      <span const style ={ {
  fontSize: '24px',
  fontWeight: '500',
}}>
        {props.data.title}
      </span>
      <br />
      15/05/2023 - Monday - 8:00 AM : 11:00 AM
      <hr />
      <div class="preread-head">Contents:</div>
      <div class="ml-3">
        <span class="preread" style={{"white-space": "pre-wrap"}}>
          Introduction to web Browser Wars DOM tree CSSOM tree, Browser
          internals - HTML parser, CSS parser, JavaScript V8 engine, internals
          IP – MAC address – Ports &amp; Evolution of HTTP, HTTP Methods How the
          Server looks at the URL Request &amp; Response cycle
        </span>
      </div>
      <div class="preread-head mt-3">Pre-read:</div>
      <div class="ml-3">
        <span class="preread" style={{"white-space": "pre-wrap"}}>
          No preread available
        </span>
      </div>
    </div>
  );
};

export default TaskPart;
