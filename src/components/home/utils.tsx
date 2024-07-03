export const bgImageStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  export const renderNewLine = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };