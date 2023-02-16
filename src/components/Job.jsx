import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoArrowUndoSharp } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2} className="d-flex">
        <Link to={"/"}>
          <Button>
            <IoArrowUndoSharp />
          </Button>
        </Link>
        <Button
          className="mx-2"
          variant="success"
          onClick={() => {
            dispatch({
              type: "ADD_TO_FAV",
              payload: data,
            });
          }}
        >
          <IoAddOutline />
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
