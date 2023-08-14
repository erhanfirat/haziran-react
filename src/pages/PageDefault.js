import { Button } from "reactstrap";

const PageDefault = ({ pageTitle, children }) => {
  const goBack = () => {
    // TODO: go previous page from history
  };

  return (
    <div className="page-container">
      <h2>
        <Button color="link" onClick={goBack}>
          <i class="fa-solid fa-chevron-left"></i>
        </Button>
        {pageTitle}
      </h2>
      <hr />
      {/* PAGE BODY HERE */}
      {children}
    </div>
  );
};

export default PageDefault;
