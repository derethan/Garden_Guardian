import {
  Box,
  Card,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { useState, useEffect } from "react";
import EditProperty from "./EditProperty";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const MyPlant = ({ plantData }) => {
  //Stores the State of the edit window and Current Property Being Edited
  const [openEditWindow, setOpenEditWindow] = useState(false);
  const [currentProperty, setCurrentProperty] = useState({});
  const [formData, setFormData] = useState(null);

  //stores the State of the MyPlant properties
  const [startDate, setStartDate] = useState(
    plantData.startDate ? dayjs(plantData.startDate) : null
  );
  const [growthStage, setGrowthStage] = useState(plantData.growthStage || null);
  const [lastWatering, setLastWatering] = useState(
    plantData.lastWatering ? dayjs(plantData.setLastWatering) : null
  );
  const [lastFeeding, setLastFeeding] = useState(
    plantData.lastFeeding ? dayjs(plantData.setLastFeeding) : null
  );

  // Function to handle the click event on the Edit Icon
  const handleClick = (property) => {
    setCurrentProperty(property);
    // setCurrentProperty({ property, setStateFunction, title, caption });
    setOpenEditWindow(true);
  };

  // FormFields - These are the fields that the user can edit
  const plantProperties = [
    {
      property: "startDate",
      placeHolder: "Start Date",
      state: startDate ? startDate.format("ddd MMMM DD, YYYY") : null,
      setState: setStartDate,
      title: "Select a Date",
      caption: "When did you start your Plant?",
    },
    {
      property: "growthStage",
      placeHolder: "Growth Stage",
      state: growthStage ? growthStage : null,
      setState: setGrowthStage,
      title: "Select a Growth Stage",
      caption: "What is the current Growth Stage of your Plant?",
    },
    {
      property: "lastWatering",
      placeHolder: "Last Watering",
      state: lastWatering ? lastWatering.format("ddd MMMM DD, YYYY") : null,
      setState: setLastWatering,
      title: "Select a Date",
      caption: "When did you last water your Plant?",
    },
    {
      property: "lastFeeding",
      placeHolder: "Last Feeding",
      state: lastFeeding ? lastFeeding.format("ddd MMMM DD, YYYY") : null,
      setState: setLastFeeding,
      title: "Select a Date",
      caption: "When did you last feed your Plant?",
    },
  ];

  //Form Properties - These are the components that will be displayed in the Edit Property Dialog
  const formProps = {
    startDate: (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          onChange={(date) => setFormData(date)}
          value={startDate ? startDate : dayjs()}
        />
      </LocalizationProvider>
    ),
    growthStage: (
      <FormControl fullWidth sx={{ mt: 4 }}>
        <InputLabel id="growthStage">Growth Stage</InputLabel>
        <Select
          label="Growth Stage"
          labelId="growthStage"
          id="growthStage"
          value={formData || growthStage}
          onChange={(event) => setFormData(event.target.value)}
        >
          <MenuItem value={"Germination"}>Germination</MenuItem>
          <MenuItem value={"Seedling"}>Seedling</MenuItem>
          <MenuItem value={"Vegetative"}>Vegetative</MenuItem>
          <MenuItem value={"Flowering"}>Flowering</MenuItem>
          <MenuItem value={"Harvest"}>Harvest</MenuItem>
        </Select>
      </FormControl>
    ),
    lastWatering: (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          onChange={(date) => setFormData(date)}
          value={lastWatering ? lastWatering : dayjs()}
        />
      </LocalizationProvider>
    ),
    lastFeeding: (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          onChange={(date) => setFormData(date)}
          value={lastFeeding ? lastFeeding : dayjs()}
        />
      </LocalizationProvider>
    ),
  };

  return (
    <Card
      variant="light"
      sx={{
        p: 2,
        borderRadius: 4,
        width: { xs: "100%", md: "30%" },
      }}
    >
      <Typography variant="h4" gutterBottom pt={4} color={"text.main"}>
        My Plant
      </Typography>

      {/* Plant Properties - Renders the List of Properties under the My Plant Header */}
      <Box sx={{ p: { xs: 2, md: 0 } }}>
        {plantProperties.map((property) => (
          <Box
            key={property.property}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "space-between" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={"bold"} textAlign={"left"}>
              {property.placeHolder}:{" "}
            </Typography>
            <Typography
              variant="caption"
              color={"text.subtitle"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              {property.state ? property.state : "Not Set"}{" "}
            </Typography>

            <IconButton onClick={() => handleClick(property)}>
              <EditIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* Edit Property Dialog */}
      <EditProperty
        open={openEditWindow}
        setOpen={setOpenEditWindow}
        plantData={plantData}
        formData={formData}
        setFormData={setFormData}
        title={currentProperty.title}
        caption={currentProperty.caption}
        property={currentProperty.property}
        setStateData={currentProperty.setState}
      >
        {formProps[currentProperty.property]}
      </EditProperty>
    </Card>
  );
};

export default MyPlant;
