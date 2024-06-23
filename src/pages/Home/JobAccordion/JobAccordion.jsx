import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Typography } from "@mui/material";
import JobDetailsModal from "../../../components/JobDetailsModal/JobDetailsModal";
import { useState } from "react";

const JobAccordion = ({ allJobs }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const jobCategories = [
    "Digital Marketing",
    "Management",
    "HR & Administration",
    "Engineering",
    "Creative",
    "Sales & marketing",
    "Accounts",
    "Development",
  ];
  // console.log(allJobs);
  return (
    <div className="max-w-screen-lg mx-auto">
      {jobCategories.map((category, index) => (
        <Accordion
          key={index}
          sx={{
            backgroundColor: "#f5f5f5",
            border: 2,
            borderColor: "#cccccc",
            borderRadius: 4,
            marginY: 2,
            overflow: "hidden",
          }}
        >
          <AccordionSummary
            sx={{
              fontSize: 22,
              fontWeight: "bold",
              opacity: 0.7,
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {category}
          </AccordionSummary>
          {allJobs.filter((job) => job.jobCategory === category).length ===
          0 ? (
            <AccordionDetails>
              <Typography>No Job Added</Typography>
            </AccordionDetails>
          ) : (
            allJobs
              .filter((job) => job.jobCategory === category)
              .map((filteredJob) => (
                <AccordionDetails key={filteredJob._id}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "white",
                      padding: 1,
                      borderRadius: 2,
                      "&:hover": {
                        border: 1,
                        "& .details-button": {
                          backgroundColor: "#182f59",
                          color: "white",
                          fontWeight: "bold",
                        },
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold", opacity: 0.7 }}>
                      {filteredJob.positionName}
                    </Typography>
                    <Button
                      onClick={handleOpen}
                      className="details-button"
                      sx={{
                        color: "gray",
                        fontWeight: "bold",
                        border: 1,
                        "&:hover": {
                          backgroundColor: "#182f59",
                          color: "white",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      See Details
                    </Button>
                    <JobDetailsModal filteredJob={filteredJob} handleClose={handleClose} open={open} />
                  </Box>
                </AccordionDetails>
              ))
          )}
        </Accordion>
      ))}
    </div>
  );
};

JobAccordion.propTypes = {
  allJobs: PropTypes.array,
};

export default JobAccordion;
