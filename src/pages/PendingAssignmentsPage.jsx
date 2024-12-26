import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import GiveMarkModal from "./GiveMarkModal";
function PendingAssignments() {
    const [assignments, setAssignments] = useState([]);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user?.email) return;

        const fetchPendingAssignments = async () => {
            try {
                const response = await axios.get(
                    `https://job-assessment-server.vercel.app/pending-assignments?userEmail=${user?.email}`
                );
                setAssignments(response.data);
            } catch (error) {
                console.error("Error fetching pending assignments:", error);
            }
        };

        fetchPendingAssignments();
    }, [user?.email]);

    const handleMarkAssignment = (assignment) => {
        setSelectedAssignment(assignment); 
    };

    const handleSubmitMarks = async (marks, feedback) => {
        try {
            await axios.post(`https://job-assessment-server.vercel.app/submissions/${assignment._id}/mark`, {
                assignmentId: selectedAssignment._id,
                marks,
                feedback,
            });
            setAssignments((prev) =>
                prev.filter((a) => a._id !== selectedAssignment._id)
            );
            setSelectedAssignment(null);
        } catch (error) {
            console.error("Error submitting marks:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Pending Assignments</h1>
            {assignments.length === 0 ? (
                <p>No pending assignments available.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {assignments.map((assignment) => (
                        <div
                            key={assignment._id}
                            className="p-4 border rounded shadow hover:shadow-lg transition"
                        >
                            <h2 className="text-lg font-semibold">{assignment.title}</h2>
                            <p>Examinee: {assignment.userEmail}</p>
                            <p>Status: {assignment.status}</p>
                            <button
                                onClick={() => handleMarkAssignment(assignment)}
                                className="mt-2 px-4 py-2 mb-10 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Give Mark
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {selectedAssignment && (
                <GiveMarkModal
                    assignment={selectedAssignment}
                    onClose={() => setSelectedAssignment(null)}
                    onSubmit={handleSubmitMarks}
                />
            )}
        </div>
    );
}

// function GiveMarkModal({ assignment, onClose, onSubmit }) {
//     const [marks, setMarks] = useState();
//     const [feedback, setFeedback] = useState();

//     const handleSubmit = () => {
//         if (!marks || !feedback) {
//             alert("Please fill in both marks and feedback.");
//             return;
//         }
//         onSubmit(marks, feedback);
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white p-6 rounded shadow-lg">
//                 <h2 className="text-xl font-bold mb-4">Mark Assignment</h2>
//                 <p>
//                     <a
//                         href={assignment.docLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-500 underline"
//                     >
//                         View Google Docs
//                     </a>
//                 </p>
//                 <p className="my-2">Notes: {assignment.notes}</p>
//                 <input
//                     type="number"
//                     placeholder="Enter Marks"
//                     value={marks}
//                     onChange={(e) => setMarks(e.target.value)}
//                     className="w-full p-2 border rounded mb-2"
//                 />
//                 <textarea
//                     placeholder="Enter Feedback"
//                     value={feedback}
//                     onChange={(e) => setFeedback(e.target.value)}
//                     className="w-full p-2 border rounded mb-2"
//                 ></textarea>
//                 <div className="flex justify-end">
//                     <button
//                         onClick={onClose}
//                         className="px-4 py-2 mr-2 bg-gray-300 rounded"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={handleSubmit}
//                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default PendingAssignments;



