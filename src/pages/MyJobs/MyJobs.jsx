import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Swal from "sweetalert2";



const MyJobs = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: myJobs = [],
    isLoading,
    refetch,
    
  } = useQuery({
    queryKey: ["my-jobs", user?.email],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get(`/jobs/${user?.email}`);
        // console.log("Fetched data:", data); // Log fetched data
        return data;
      } catch (error) {
        console.error("Error fetching data:", error); // Log error if any
        throw error;
      }
    },
  });
//   console.log(myJobs);
  //   delete
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/jobs/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      //   toast.success("Successfully Deleted Your Booking.");
      refetch();
    },
  });

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await mutateAsync(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } catch (err) {
          console.log(err);
        }
      }
    });
  };
  if (isLoading) {
    return <LoadingSkeleton />;
  }
  return (
    <div className="p-10">
      <h2 className="text-center text-2xl font-bold">My jobs</h2>
      <div className="container mx-auto">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Position Name</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Position Level</TableCell>
                <TableCell align="right">Job Type</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myJobs.map((job) => (
                <TableRow
                  key={job._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {job.positionName}
                  </TableCell>
                  <TableCell align="right">{job.jobCategory}</TableCell>
                  <TableCell align="right">{job.level}-level</TableCell>
                  <TableCell align="right">{job.type}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => handleDelete(job._id)}
                      variant="outlined"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default MyJobs;
