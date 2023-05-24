import React from "react";
import Vacancycard from "../components/Vacancycard";
import Vacancyform from "../components/Vacancyform";
import { useState } from "react";
import Header from "../components/Header";
import { Container, Navbar, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addJob, deleteJob, updateJob } from "../reducer/job.reducer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const jobs = useSelector((state) => state.job);
  const dispatch = useDispatch();
  let navigate = useNavigate()

  useEffect(() => {
    // dispatch(fetchUsersStart());
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [date, setDate] = useState("");
  const [discription, setDiscription] = useState("");
  const [salary, setSalary] = useState("");
  const [jobId, setJobId] = useState();

  const [currentItem, setCurrentItem] = useState(false);

  const handleClose = () => {
    setShow(false);
    resetState();
  };

  const handleShow = () => {
    setShow(true);
  };

  const submitHandler = () => {
    let id = Math.floor(Math.random() * 1000);
    let data = {
      id,
      companyName,
      title,
      date,
      salary,
      discription,
    };
    if (companyName.length <= 0 && title.length <= 0 && salary.length <= 0) {
      alert("Please fill the required field");
    } else {
      dispatch(addJob(data));
      resetState();
    }
  };

  const handleDelete = (props) => {
    dispatch(deleteJob(props));
  };

  const updateHandler = () => {
    let id = jobId;
    let updateJobData = {
      companyName,
      title,
      date,
      salary,
      discription,
    };

    dispatch(updateJob({ id, updateJobData }));
    resetState();

  };

  const handleEdit = (props) => {
    setShow(true);
    setcompanyName(props.companyName);
    setTitle(props.title);
    setDiscription(props.discription);
    setDate(props.date);
    setSalary(props.salary);
    setCurrentItem(true);
    setJobId(props.id);
  };

  const jobDetailHandler = (props) => {
    navigate(`details/${props.id}`)
   

  }

  const resetState = () => {
    setShow(false);
    setDate("");
    setDiscription("");
    setSalary("");
    setTitle("");
    setcompanyName("");
    setCurrentItem(false);
    setJobId();
  };

  return (
    <div>
      <Container>
        <Header handleShow={handleShow} />

        <Vacancyform
          show={show}
          submitHandler={submitHandler}
          updateHandler={updateHandler}
          handleClose={handleClose}
          setShow={setShow}
          currentJob={currentItem}
          title={title}
          setTitle={setTitle}
          companyName={companyName}
          date={date}
          discription={discription}
          salary={salary}
          setDiscription={setDiscription}
          setDate={setDate}
          setcompanyName={setcompanyName}
          setSalary={setSalary}
        />
        <Row>
          {jobs.map((item, index) => (
          <Col lg="6" md="12" sm="12" xs="12">

          <Vacancycard
          jobDetailHandler = {jobDetailHandler}
            key={index}
            item={item}
            editHandler={handleEdit}
            handleDelete={handleDelete}
            />
            </Col>
        ))}
        </Row>

        
     
      </Container>
    </div>
  );
}

export default HomePage;
