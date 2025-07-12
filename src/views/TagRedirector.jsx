import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TagRedirector() {
  const { tagId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch tag-to-plant mapping from your backend
    fetch(`/api/tags/${tagId}`)
      .then((res) => res.json())
      .then((data) => {
        // Assume data.plantId is returned
        navigate(`/gardens/plant/${data.plantId}`);
      });
  }, [tagId, navigate]);

  return <div>Loading plant info...</div>;
}

export default TagRedirector;