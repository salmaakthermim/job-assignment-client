
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";

function PendingAssignments() {
    const [assignments, setAssignments] = useState([]);
    const { user } = useContext(AuthContext);// Assumes `user` contains the logged-in user's email

    useEffect(() => {
      if (!user?.email) return;
        const fetchPendingAssignments = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/pending-assignments?userEmail=${user?.email}`);
                setAssignments(response.data);
            } catch (error) {
                console.error("Error fetching pending assignments:", error);
            }
        };

        fetchPendingAssignments();
    }, [user?.email]);

    const handleMarkAssignment = (assignment) => {
        // Navigate to a detailed marking page or open a modal with assignment details
        // console.log("Mark assignment:", assignment);
        GiveMarkModal()
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Pending Assignments</h1>
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
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Give Mark
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PendingAssignments;

  
