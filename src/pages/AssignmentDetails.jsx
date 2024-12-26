

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";

const AssignmentDetails = ({ currentUserEmail, loading,setLoading }) => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [submissionData, setSubmissionData] = useState({
    googleDocsLink: "",
    quickNote: "",
    email: user.email,
  });

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const { data } = await axios.get(`https://job-assessment-server.vercel.app/assignment/${id}`);
        setAssignment(data);
      } catch (err) {
        console.error("Error fetching assignment:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignment();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubmissionData({ ...submissionData, [name]: value });
  };

//   hendle submit assignment

  const handleSubmitAssignment = async (e) => {
    e.preventDefault();
    const submission = {
      ...submissionData,
      assignmentId: id,
      userEmail: currentUserEmail,
      status: "Pending",
      assignment:assignment.title,
      marks:assignment.marks,
    };

    try {
      const { data } = await axios.post("https://job-assessment-server.vercel.app/submissions", submission);
      toast.success(data.message || "Assignment submitted successfully!");
      setModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit assignment.");
    }
  };

  if (!assignment) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{assignment.title}</h1>
      <p>{assignment.description}</p>
      <p>Marks: {assignment.marks}</p>
      <p>Difficulty: {assignment.difficulty}</p>
      <button className="btn btn-primary mt-4" onClick={() => setModalOpen(true)}>
        Take Assignment
      </button>

      {modalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Submit Assignment</h3>
            <form onSubmit={handleSubmitAssignment}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Google Docs Link</span>
                </label>
                <input
                  type="url"
                  name="googleDocsLink"
                  className="input input-bordered"
                  value={submissionData.googleDocsLink}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quick Note</span>
                </label>
                <textarea
                  name="quickNote"
                  className="textarea textarea-bordered"
                  value={submissionData.quickNote}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn" onClick={() => setModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentDetails;
