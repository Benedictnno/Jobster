import React from "react";
import { FormRow, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  clearValues,
  createJob,
  handleChange,
} from "../../features/jobs/JobSlice";
import { useEffect } from "react";

const AddJobs = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  function handleSubmit(e) {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }
    dispatch(
      createJob({
        position,
        company,
        jobLocation,
        jobType,
        status,
      })
    );
  }

  function handleJobInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name + "  and " + value);
    dispatch(handleChange({ name, value }));
  }

  useEffect(() => {
    dispatch(
      handleChange({
        name: "jobLocation",
        value: user.location,
      })
    );
  }, []);

  return (
    <Wrapper>
      <form className="form">
        <h3> {isEditing ? "edit job" : "add job"} </h3>
        <div className="form-center">
          <FormRow
            type={"text"}
            name={"position"}
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type={"text"}
            name={"company"}
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type={"text"}
            name={"jobLocation"}
            labelText={"Job Location"}
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* status */}
          <FormRowSelect
            handleChange={handleJobInput}
            list={statusOptions}
            value={status}
            name={"status"}
          />
          {/* Job Type */}
          <FormRowSelect
            handleChange={handleJobInput}
            list={jobTypeOptions}
            value={jobType}
            name={"jobType"}
            labelText={"Job Type"}
          />

          <div className="btn-container">
            <button
              type="button"
              onClick={() => dispatch(clearValues())}
              className="btn btn-block clear-btn"
            >
              clear
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-block submit-btn"
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJobs;
