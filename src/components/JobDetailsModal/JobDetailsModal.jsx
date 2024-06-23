import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {  IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "87.5%",
  height: "87.5%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
};

const splitIntoSentences = (text) => {
  return text.split(/(?<=\.)\s+/);
};

const JobDetailsModal = ({ handleClose, open, filteredJob }) => {
  const {
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
  
    salary,
  } = filteredJob;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#f44336",
          }}
          aria-label="close"
        >
          <CancelIcon />
        </IconButton>
        <h2 className="text-2xl font-bold mb-4">
          {positionName} |{" "}
          <span className="opacity-60 font-normal">TechForing Ltd.</span>
        </h2>
        <h2 className="font-bold mb-2">Overview:</h2>
        <p>{overview}</p>
        <h2 className="font-bold mt-4 mb-2">Responsibilities:</h2>
        {splitIntoSentences(responsibilities).map((sentence, index) => (
          <Typography key={index} component="p">
            {sentence}
          </Typography>
        ))}
        <h2 className="font-bold mt-4 mb-2">Requirements:</h2>
        {splitIntoSentences(requirements).map((sentence, index) => (
          <Typography key={index} component="p">
            {sentence}
          </Typography>
        ))}
        <h2 className="font-bold mt-4 mb-2">Qualifications:</h2>
        {splitIntoSentences(qualifications).map((sentence, index) => (
          <Typography key={index} component="p">
            {sentence}
          </Typography>
        ))}

        <h2 className=" my-4 font-bold">
          Office Location:{" "}
          <span className="opacity-60 "> {officeLocation}</span>
        </h2>
        <h2 className=" my-4 font-bold">
          Salary: <span className="opacity-60 "> {salary}</span>
        </h2>
        <h2 className=" my-2 font-bold">
          Type: <span className="opacity-60 "> {type}</span>
        </h2>
        <h2 className=" my-4\2 font-bold">
          Location: <span className="opacity-60 "> {jobLocation}</span>
        </h2>
        <h2 className=" my-2 font-bold">
          Level: <span className="opacity-60 "> {level}-level</span>
        </h2>
        <h2 className=" my-2 font-bold">
          Shift: <span className="opacity-60 "> {shift}</span>
        </h2>
    
      </Box>
    </Modal>
  );
};

JobDetailsModal.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  filteredJob: PropTypes.object,
};

export default JobDetailsModal;
