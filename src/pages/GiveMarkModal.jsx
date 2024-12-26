
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firbase/firbase.init";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";




const GiveMarkModal = () => {
    const { assignmentId } = useParams();
    const navigate = useNavigate();
    const [assignment, setAssignment] = useState(null);
    const [marks, setMarks] = useState('');
    const [feedback, setFeedback] = useState('');
  
    useEffect(() => {
      const fetchAssignment = async () => {
        try {
          const docRef = doc(db, "assignments", assignmentId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setAssignment(docSnap.data());
          } else {
            alert("Assignment not found");
            navigate('/pending-assignments');
          }
        } catch (error) {
          console.error("Error fetching assignment:", error);
        }
      };
  
      fetchAssignment();
    }, [assignmentId, navigate]);
  
    const handleSubmit = async () => {
      try {
          await axios.put(`https://job-assessment-server.vercel.app/submissions/${assignment._id}/mark`, {
              marks,
              feedback,
              examinerEmail: user.email, // Replace with actual logged-in user email
          });
          alert("Marks submitted successfully!");
          onClose();
      } catch (error) {
          console.error("Error marking assignment:", error);
          alert("Failed to submit marks.");
      }
  };
  
    if (!assignment) return <div>Loading...</div>;
  
    return (
      <div className="modal modal-open">
        <div className="modal-box">
          <h2 className="text-xl mb-4">Review Assignment: {assignment.title}</h2>
          <div className="mb-4">
            <a href={assignment.googleDocsLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Open Google Docs
            </a>
          </div>
          <div className="mb-4">
            <label className="block">Marks</label>
            <input
              type="number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              className="input input-bordered w-full"
              min="0"
            />
          </div>
          <div className="mb-4">
            <label className="block">Feedback</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="textarea textarea-bordered w-full"
            />
          </div>
          <div className="modal-action">
            <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            <button onClick={() => navigate('/pending-assignments')} className="btn">Cancel</button>
          </div>
        </div>
      </div>
    );
  };
  export default GiveMarkModal;
  
