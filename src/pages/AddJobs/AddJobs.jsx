const AddJobs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const positionName = form.positionName.value;
    const overview = form.overview.value;
    const responsibilities = form.responsibilities.value;
    const requirements = form.requirements.value;
    const qualifications = form.qualifications.value;
    const officeLocation = form.officeLocation.value;
    const jobLocation = form.jobLocation.value;
    const type = form.type.value;
    const level = form.level.value;
    const shift = form.shift.value;
    const jobCategory = form.jobCategory.value;

    const jobInfo = {
      positionName,
      overview,
      responsibilities,
      requirements,
      qualifications,
      officeLocation,
      jobLocation,
      type,
      level,
      shift,
      jobCategory,
    };

    console.table(jobInfo);
  };

  return (
    <div className="p-10">
      <h2 className="text-center text-2xl font-bold">Add A Job</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label
            htmlFor="positionName"
            className="block text-sm font-medium text-gray-700"
          >
            Position Name:
          </label>
          <input
            id="positionName"
            name="positionName"
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="overview"
            className="block text-sm font-medium text-gray-700"
          >
            Overview:
          </label>
          <textarea
            id="overview"
            name="overview"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="responsibilities"
            className="block text-sm font-medium text-gray-700"
          >
            Responsibilities:
          </label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="requirements"
            className="block text-sm font-medium text-gray-700"
          >
            Requirements:
          </label>
          <textarea
            id="requirements"
            name="requirements"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="qualifications"
            className="block text-sm font-medium text-gray-700"
          >
            Qualifications:
          </label>
          <textarea
            id="qualifications"
            name="qualifications"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="officeLocation"
            className="block text-sm font-medium text-gray-700"
          >
            Office Location:
          </label>
          <input
            id="officeLocation"
            name="officeLocation"
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="jobLocation"
            className="block text-sm font-medium text-gray-700"
          >
            Job Location:
          </label>
          <input
            id="jobLocation"
            name="jobLocation"
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Type:
          </label>
          <select
            id="type"
            name="type"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="level"
            className="block text-sm font-medium text-gray-700"
          >
            Level:
          </label>
          <select
            id="level"
            name="level"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="top">Top Level</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="shift"
            className="block text-sm font-medium text-gray-700"
          >
            Shift:
          </label>
          <select
            id="shift"
            name="shift"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="day">Day Shift</option>
            <option value="night">Night Shift</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="jobCategory"
            className="block text-sm font-medium text-gray-700"
          >
            Job Category:
          </label>
          <select
            id="jobCategory"
            name="jobCategory"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="digital-marketing">Digital Marketing</option>
            <option value="management">Management</option>
            <option value="hr-administration">HR & Administration</option>
            <option value="engineering">Engineering</option>
            <option value="creative">Creative</option>
            <option value="sales-marketing">Sales & Marketing</option>
            <option value="accounts">Accounts</option>
            <option value="development">Development</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
