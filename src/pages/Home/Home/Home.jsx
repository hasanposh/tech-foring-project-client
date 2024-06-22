import JobAccordion from "../JobAccordion/JobAccordion";

const Home = () => {
  return (
    <div className="py-10 space-y-5">
      <div>
      <h2 className="text-center text-2xl font-bold">BROWSE OPEN POSITIONS</h2>
      <h2 className="text-center">We are always on the lookout for talented people</h2>
      </div>
      <JobAccordion />
    </div>
  );
};

export default Home;
