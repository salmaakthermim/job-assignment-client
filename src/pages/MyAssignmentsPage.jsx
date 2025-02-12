import { useContext, useEffect, useState,  } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
const MyAssignmentsPage = () => {
    const { user } = useContext(AuthContext);
    const [submissions, setSubmissions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if (!user?.email) return;

        const fetchSubmissions = async () => {
            try {
                
                const data = await axios.get(`https://job-assessment-server.vercel.app/submissions/${user?.email}`);
                console.log(data)
                
                
                if (data.status === 200) {
                    setSubmissions(data.data);  
                } else {
                    console.log('No assignments found for this user');
                }
            } catch (error) {
                console.error("Error fetching submissions:", error);
            } finally {
                setIsLoading(false); 
            }
        };

        fetchSubmissions();
    }, [user?.email]);
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold">My Submitted Assignments: {submissions.length}</h1>
            {submissions.length > 0 ? (
                <table className="min-w-full mt-4 border-collapse">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-left">Assignment Title</th>
                            <th className="py-2 px-4 border-b text-left">Status</th>
                            <th className="py-2 px-4 border-b text-left">Marks</th>
                            <th className="py-2 px-4 border-b text-left">Obtained Marks</th>
                            <th className="py-2 px-4 border-b text-left">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map((submission) => (
                            <tr key={submission._id}>
                                <td className="py-2 px-4 border-b">{submission.assignment}</td>
                                <td className="py-2 px-4 border-b">{submission.status}</td>
                                <td className="py-2 px-4 border-b">{submission.marks}</td>
                                <td className="py-2 px-4 border-b">{submission.marks}</td>
                                <td className="py-2 px-4 border-b">{submission.feedback || 'No feedback yet'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No assignments found.</p>
            )}
        </div>
    );
};

export default MyAssignmentsPage;
