import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../shared/context/contextProviders";

function TagRedirector() {
  const URL = import.meta.env.VITE_API_URL;
  const { token } = useAuth();

  const { tagId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlantInfo = async () => {
      try {
        const response = await fetch(URL + `api/tags/${tagId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Response status:", response.status);

        if (response.status === 404) {
          console.log("Tag not found or not associated with any plants");
          // Redirect to gardens page or show error
          navigate("/gardens");
          return;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Tag data:", data);

        // Assume data.plantId is returned
        navigate(`/gardens/plant/${data.plantId}`);
      } catch (error) {
        console.error("Error fetching plant info:", error);
        // Redirect to gardens page on error
        navigate("/gardens");
      }
    };

    fetchPlantInfo();
  }, [tagId, navigate, URL, token]);

  return <div>Loading plant info...</div>;
}

export default TagRedirector;
