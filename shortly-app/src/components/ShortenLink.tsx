import { useState } from "react";

function ShortenLink({ ...shortlinks }) {
  const link = shortlinks.full_short_link;
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard
      .writeText(link)
      .then(() => {
        console.log("Async: Copying to clipboard was successful!");
      })
      .catch((err) => {
        console.log("Async: Could not copy text: ", err);
      });

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <div className=" bg-white d-flex justify-content-between iteams-center text-dark py-3 shorten-links" >
      <p className=" my-2 mx-3 fw-blod links-text">{shortlinks.original_link}</p>
      <hr />
      <div className="d-flex justify-content-between ">
        <p className="short-link my-2 mx-3 fw-blod">
          {shortlinks.full_short_link}
        </p>
        <button
          className=" btn btn-info text-light px-3 mx-3"
          onClick={handleCopy}
          {...(isCopied && {
            disabled: true,
            className: " rounded bg-dark text-white mx-3 !important",
          })}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default ShortenLink;
