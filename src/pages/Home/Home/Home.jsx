import { useQuery } from "@tanstack/react-query";
import LoadingSkeleton from "../../../components/LoadingSkeleton/LoadingSkeleton";
import JobAccordion from "../JobAccordion/JobAccordion";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allJobs = [],
    isLoading,
  } = useQuery({
    queryKey: ["all-jobs"],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get(`/jobs`);
        // console.log("Fetched data:", data); // Log fetched data
        return data;
      } catch (error) {
        console.error("Error fetching data:", error); // Log error if any
        throw error;
      }
    },
  });
  if (isLoading) {
    return <LoadingSkeleton />;
  }
  return (
    <div className="py-10 space-y-5">
      <div>
        <h2 className="text-center text-2xl font-bold">
          BROWSE OPEN POSITIONS
        </h2>
        <h2 className="text-center">
          We are always on the lookout for talented people
        </h2>
      </div>
      <JobAccordion allJobs={allJobs} />
    </div>
  );
};

export default Home;
