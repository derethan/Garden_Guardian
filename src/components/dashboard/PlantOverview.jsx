import { Box, Card, Typography } from "@mui/material";
import NotFound from "../NotFoundCard";

const PlantOverview = ({ user }) => {
  // Get the Garden Data from Local Storage
  const gardens = JSON.parse(localStorage.getItem("gardens") || "[]").filter(
    (garden) => garden.userID === user.id
  );
  // Get the Garden Group Data from Local Storage
  const gardenGroups = JSON.parse(
    localStorage.getItem("gardenGroups") || "[]"
  ).filter((group) => group.userID === user.id);
  //Get any plants from Local storage associated with the user
  const plants = JSON.parse(
    localStorage.getItem("gardenPlants") || "[]"
  ).filter((plant) => plant.userID === user.id);

  return (
    <>
      {gardens.length != 0 ? (
        // Display the Garden Overview Card if the User has Gardens
        <Card
          variant="light"
          sx={{
            mt: 4,
            p: 2,
            borderRadius: 4,
            width: { xs: "100%", md: "80%" },
            maxWidth: '500px',
          }}
        >
          <Typography variant="h6" color={"text.main"} fontWeight={"bold"}>
            Garden Overview
          </Typography>

          <Typography
            variant="caption"
            color={"text.subtitle"}
            fontWeight={"bold"}
          >
            Here is a quick snapshot of your gardens
          </Typography>

          {/* Display the number of gardens the user has */}
          <Box
            sx={{
              pt: 4,
              pb: 4,
            }}
          >
            <Typography
              variant="body2"
              color={"text.textDark"}
              fontWeight={"bold"}
            >
              You are currently managing {gardens.length} garden
              {gardens.length > 1 ? "s" : ""}
              <br />
              {"( "}
              <Typography
                variant="caption"
                color={"text.subtitle"}
                fontWeight={"bold"}
              >
                {gardens.map((garden, index) => (
                  <Typography
                    key={index}
                    variant="caption"
                    color={"text.subtitle"}
                    fontWeight={"bold"}
                  >
                    {garden.gardenName}
                    {index < gardens.length - 1 ? ", " : ""}
                  </Typography>
                ))}
              </Typography>
              {" )"}
            </Typography>
          </Box>

          {/* Display an overview of the plants the user has */}
          <Box
            sx={{
              pb: 4,
            }}
          >
            <Typography variant="body2" color={"text.main"} fontWeight={"bold"}>
              Here is what you have growing:{" "}
              <Typography
                variant="span"
                color={"text.subtitle"}
                fontWeight={"bold"}
              >
                ({plants.length} Plant
                {plants.length > 1 ? "s" : ""} )
              </Typography>
            </Typography>

            {/* Display the Plant Names */}
            {plants.map((plant, index) => {
              // Get the group Name for the plant
              const group = gardenGroups.find(
                (group) => group.groupID === plant.groupID
              );

              return (
                <Typography
                  key={index}
                  variant="subtitle2"
                  color={"text.textDark"}
                  fontWeight={"bold"}
                  pt={1}
                  pl={10}
                  textAlign={"left"}
                >
                  {plant.name} {plant.variant && "(" + plant.variant + ")"} -{" "}
                  <Typography
                    component={"span"}
                    variant={"caption"}
                    color={"text.subtitle"}
                    fontWeight={"bold"}
                  >
                    {group.groupName}
                  </Typography>
                </Typography>
              );
            })}
          </Box>
        </Card>
      ) : (
        // Display a Placeholder Card if the User has no Gardens
        <NotFound
          location={"/gardens"}
          title={"Garden Overview"}
          subtitle={"No gardens Found"}
        />
      )}
    </>
  );
};

export default PlantOverview;
