import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const JobAccordion = () => {
  const jobCategories = [
    "Digital Marketing",
    "Management",
    "HR & Administration",
    "Engineering",
    "creative",
    "sales &marketing",
    "Accounts",
    "Development",
  ];
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
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default JobAccordion;
