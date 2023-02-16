import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoArrowUndoSharp } from "react-icons/io5";

const FavCompany = () => {
  const favcontent = useSelector((state) => state.pref.content);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col sm={12}>
        <h2>All your Favourite Company</h2>
        <Link to={"/"}>
          <Button>
            <IoArrowUndoSharp />
          </Button>
        </Link>
      </Col>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {favcontent.map((data, i) => (
            <li key={i} className="my-4">
              <Button
                className="mr-2"
                variant="danger"
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_FAV", payload: i });
                }}
              >
                <RxCross2 />
              </Button>
              <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </li>
          ))}
        </ul>
      </Col>
      {/* <Row>
        <Col sm={12} className="font-weight-bold mb-3 ml-4">
          TOTAL: {favcontent.reduce((acc, currentValue) => acc + parseFloat(currentValue.price), 0)}€
        </Col>
      </Row> */}
    </Row>
  );
};

export default FavCompany;
