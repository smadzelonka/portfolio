// import DatePicker from "react-datepicker";
// import {  useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const PortfolioForm = ({ onSubmit, initialData = {} }) => {
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: initialData,
  });

  // useEffect(() => {
  //   register({ name: "startDate" });
  //   register({ name: "endDate" });
  // }, [register]);

  // useEffect(() => {
  //   const { startDate, endDate } = initialData;
  //   if (startDate) {
  //     setStartDate(new Date(startDate));
  //   }
  //   if (endDate) {
  //     setEndDate(new Date(endDate));
  //   }
  // }, [initialData]);

  // const handleDateChange = (dateType, setDate) => (date) => {
  //   setValue(dateType, date);
  //   setDate(date);
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          ref={register}
          name="title"
          type="text"
          className="form-control"
          id="title"
        />
      </div>

      {/* <div className="form-group">
        <label htmlFor="city">Company</label>
        <input
          ref={register}
          name="company"
          type="text"
          className="form-control"
          id="company"
        />
      </div> */}
      <div className="form-group">
        <label htmlFor="website">Website</label>
        <input
          ref={register}
          name="website"
          type="text"
          className="form-control"
          id="website"
        />
      </div>

      <div className="form-group">
        <label htmlFor="githubWebsite">Project Website</label>
        <input
          ref={register}
          name="githubWebsite"
          type="text"
          className="form-control"
          id="githubWebsite"
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          ref={register}
          name="image"
          type="text"
          className="form-control"
          id="image"
        />
      </div>

      <div className="form-group">
        <label htmlFor="stack">Stack</label>
        <textarea
          ref={register}
          name="stack"
          type="text"
          className="form-control"
          id="stack"
        ></textarea>
      </div>

      {/* <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          ref={register}
          name="description"
          type="text"
          className="form-control"
          id="description"
        />
      </div> */}

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          ref={register}
          name="description"
          rows="5"
          type="text"
          className="form-control"
          id="description"
        ></textarea>
      </div>

      {/* <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={startDate}
            onChange={handleDateChange("startDate", setStartDate)}
          />
        </div>
      </div> */}

      {/* <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <div>
          <DatePicker
            disabled={!endDate}
            showYearDropdown
            selected={endDate}
            onChange={handleDateChange("endDate", setEndDate)}
          />
        </div>
      </div> */}
      {/* <div className="form-group">
        {endDate && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDateChange("endDate", setEndDate)(null)}
          >
            No End Date
          </button>
        )}
        {!endDate && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() =>
              handleDateChange(
                "endDate",
                setEndDate,
              )(new Date(new Date().setHours(0, 0, 0, 0)))
            }
          >
            Set End Date
          </button>
        )}
      </div> */}
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default PortfolioForm;
