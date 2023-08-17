import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

/**
 * Şahane bir açıklama
 * @param {*} param0  müthiş bir parametre
 * @returns olağanüstü uı
 */
const PageDefault = ({ pageTitle, children }) => {
  const history = useHistory();
  const goBack = () => {
    // TODO: go previous page from history
    history.goBack();
  };

  return (
    <div className="page-container">
      <h2>
        <Button color="link" onClick={goBack}>
          <i className="fa-solid fa-chevron-left"></i>
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
