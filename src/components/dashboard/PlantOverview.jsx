import { Box, Card, Typography } from "@mui/material";
import NotFound from "../NotFoundCard";

const PlantOverview = ({ gardens, gardenGroups, gardenPlants }) => {
  return (
    <>
      {gardens && gardens.length != 0 ? (
        // Display the Garden Overview Card if the User has Gardens
        <Card
          variant="light"
          sx={{
            mt: 4,
            p: 2,
            borderRadius: 4,
            width: { xs: "100%", md: "80%" },
            maxWidth: "500px",
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
                ({gardenPlants.length} Plant
                {gardenPlants.length > 1 ? "s" : ""} )
              </Typography>
            </Typography>

            {/* Display the Plant Names */}
            {gardenPlants.map((plant, index) => {
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
                  {plant.plantData.plantName}{" "}
                  {plant.varietyID && "(" + plant.plantData.varietyName + ")"} -{" "}
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
