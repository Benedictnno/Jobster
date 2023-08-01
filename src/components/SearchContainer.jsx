import React from "react";
import { FormRow, FormRowSelect } from ".";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useSelector, useDispatch } from "react-redux";
import { clearFilters, handleChanges } from "../features/allJobs/allJobsSlice";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  function handleSearch(e) {
    if (isLoading) return;
    dispatch(handleChanges(({ name: e.target.name, value: e.target.value })));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(clearFilters());
  }

  return (
    <Wrapper>
      <form action="" className="form">
        <h4>Search Form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name={"search"}
            value={search}
            handleChange={handleSearch}
          />
          {/* search by status */}
          <FormRowSelect
            labelText={"status"}
            name={"searchStatus"}
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText={"type"}
            name={"searchType"}
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name={"sort"}
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
