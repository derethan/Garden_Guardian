import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Avatar,
  Divider,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  Fade,
  useTheme
} from '@mui/material';

// Icons
import QrCodeIcon from '@mui/icons-material/QrCode';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LinkIcon from '@mui/icons-material/Link';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import { PrimaryButton } from '../../components/PrimaryButton';

// Sample data for demonstration
const sampleTags = [
  {
    id: 'TAG001',
    name: 'Tomato Garden A',
    plantId: 'plant_123',
    plantName: 'Cherry Tomatoes',
    assignedDate: '2024-12-15',
    lastScanned: '2024-12-20',
    status: 'active',
    qrCode: 'https://garden-guardian.com/tag/TAG001'
  },
  {
    id: 'TAG002',
    name: 'Basil Herbs',
    plantId: 'plant_456',
    plantName: 'Sweet Basil',
    assignedDate: '2024-12-10',
    lastScanned: '2024-12-18',
    status: 'active',
    qrCode: 'https://garden-guardian.com/tag/TAG002'
  },
  {
    id: 'TAG003',
    name: 'Pepper Zone',
    plantId: null,
    plantName: null,
    assignedDate: null,
    lastScanned: null,
    status: 'unassigned',
    qrCode: 'https://garden-guardian.com/tag/TAG003'
  },
  {
    id: 'TAG004',
    name: 'Rose Bush #1',
    plantId: 'plant_789',
    plantName: 'Red Rose Bush',
    assignedDate: '2024-11-28',
    lastScanned: '2024-12-19',
    status: 'active',
    qrCode: 'https://garden-guardian.com/tag/TAG004'
  }
];

const samplePlants = [
  { id: 'plant_123', name: 'Cherry Tomatoes' },
  { id: 'plant_456', name: 'Sweet Basil' },
  { id: 'plant_789', name: 'Red Rose Bush' },
  { id: 'plant_101', name: 'Cucumber Vine' },
  { id: 'plant_202', name: 'Lettuce Garden' }
];

const TagManagement = () => {
  const theme = useTheme();
  const [tags, setTags] = useState(sampleTags);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showAssignDialog, setShowAssignDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [newTagName, setNewTagName] = useState('');
  const [selectedPlantId, setSelectedPlantId] = useState('');

  // Filter tags based on search and status
  const filteredTags = tags.filter(tag => {
    const matchesSearch = tag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tag.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (tag.plantName && tag.plantName.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterStatus === 'all' || tag.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleMenuClick = (event, tag) => {
    setAnchorEl(event.currentTarget);
    setSelectedTag(tag);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTag(null);
  };

  const handleCreateTag = () => {
    if (newTagName.trim()) {
      const newTag = {
        id: `TAG${String(tags.length + 1).padStart(3, '0')}`,
        name: newTagName,
        plantId: null,
        plantName: null,
        assignedDate: null,
        lastScanned: null,
        status: 'unassigned',
        qrCode: `https://garden-guardian.com/tag/TAG${String(tags.length + 1).padStart(3, '0')}`
      };
      setTags([...tags, newTag]);
      setNewTagName('');
      setShowCreateDialog(false);
    }
  };

  const handleAssignTag = () => {
    if (selectedTag && selectedPlantId) {
      const selectedPlant = samplePlants.find(p => p.id === selectedPlantId);
      const updatedTags = tags.map(tag => 
        tag.id === selectedTag.id 
          ? {
              ...tag,
              plantId: selectedPlantId,
              plantName: selectedPlant.name,
              assignedDate: new Date().toISOString().split('T')[0],
              status: 'active'
            }
          : tag
      );
      setTags(updatedTags);
      setSelectedPlantId('');
      setShowAssignDialog(false);
    }
    handleMenuClose();
  };

  const handleDeleteTag = () => {
    if (selectedTag) {
      setTags(tags.filter(tag => tag.id !== selectedTag.id));
      setShowDeleteDialog(false);
    }
    handleMenuClose();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return theme.palette.success.main;
      case 'unassigned': return theme.palette.warning.main;
      default: return theme.palette.text.subtitle;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <LinkIcon sx={{ fontSize: 16 }} />;
      case 'unassigned': return <LocalOfferIcon sx={{ fontSize: 16 }} />;
      default: return <QrCodeIcon sx={{ fontSize: 16 }} />;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header Section */}
      <Card 
        variant="light" 
        sx={{ 
          mb: 3,
          background: `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.background.shaded})`,
          border: `1px solid ${theme.palette.divider}`
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <QrCodeIcon 
              sx={{ 
                fontSize: 32, 
                mr: 2, 
                color: theme.palette.primary.main 
              }} 
            />
            <Typography 
              variant="h4" 
              component="h1"
              sx={{ 
                fontWeight: 600,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.secondary})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Tag Management
            </Typography>
          </Box>
          
          <Typography 
            variant="subtitle1" 
            color="text.subtitle"
            sx={{ mb: 3 }}
          >
            Create, assign, and manage QR code tags for your plants
          </Typography>

          {/* Action Bar */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            alignItems: { xs: 'stretch', md: 'center' },
            justifyContent: 'space-between'
          }}>
            {/* Search and Filter */}
            <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
              <TextField
                placeholder="Search tags, plants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="small"
                InputProps={{
                  startAdornment: <SearchIcon sx={{ color: 'text.subtitle', mr: 1 }} />
                }}
                sx={{ 
                  minWidth: 250,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2
                  }
                }}
              />
              
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Filter</InputLabel>
                <Select
                  value={filterStatus}
                  label="Filter"
                  onChange={(e) => setFilterStatus(e.target.value)}
                  startAdornment={<FilterListIcon sx={{ mr: 1 }} />}
                >
                  <MenuItem value="all">All Tags</MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="unassigned">Unassigned</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Create Button */}
            <PrimaryButton
              text="Create New Tag"
              onClick={() => setShowCreateDialog(true)}
              sx={{ 
                minWidth: 'fit-content',
                borderRadius: 2
              }}
            >
              <AddIcon sx={{ mr: 1 }} />
            </PrimaryButton>
          </Box>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {[
          { label: 'Total Tags', value: tags.length, color: theme.palette.primary.main },
          { label: 'Active Tags', value: tags.filter(t => t.status === 'active').length, color: theme.palette.success.main },
          { label: 'Unassigned', value: tags.filter(t => t.status === 'unassigned').length, color: theme.palette.warning.main }
        ].map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Fade in timeout={500 + index * 100}>
              <Card variant="light" sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h3" sx={{ color: stat.color, fontWeight: 'bold' }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.subtitle">
                  {stat.label}
                </Typography>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>

      {/* Tags Grid */}
      <Grid container spacing={2}>
        {filteredTags.map((tag, index) => (
          <Grid item xs={12} sm={6} lg={4} key={tag.id}>
            <Fade in timeout={300 + index * 50}>
              <Card 
                variant="light" 
                sx={{ 
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 25px ${theme.palette.primary.main}20`
                  }
                }}
              >
                <CardContent>
                  {/* Tag Header */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: getStatusColor(tag.status),
                          width: 40,
                          height: 40,
                          mr: 2
                        }}
                      >
                        {getStatusIcon(tag.status)}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight="bold" color="text.cardTitle">
                          {tag.name}
                        </Typography>
                        <Typography variant="caption" color="text.subtitle">
                          ID: {tag.id}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <IconButton 
                      size="small"
                      onClick={(e) => handleMenuClick(e, tag)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  {/* Tag Details */}
                  <Box sx={{ space: 2 }}>
                    <Box sx={{ mb: 2 }}>
                      <Chip 
                        label={tag.status.toUpperCase()}
                        size="small"
                        sx={{ 
                          bgcolor: getStatusColor(tag.status),
                          color: 'white',
                          fontWeight: 'bold',
                          mb: 2
                        }}
                      />
                    </Box>

                    {tag.plantId ? (
                      <Box>
                        <Typography variant="body2" color="text.subtitle" gutterBottom>
                          <strong>Assigned to:</strong>
                        </Typography>
                        <Typography variant="body1" color="text.cardTitle" gutterBottom>
                          {tag.plantName}
                        </Typography>
                        <Typography variant="caption" color="text.subtitle">
                          Assigned: {new Date(tag.assignedDate).toLocaleDateString()}
                        </Typography>
                        {tag.lastScanned && (
                          <Typography variant="caption" color="text.subtitle" display="block">
                            Last scanned: {new Date(tag.lastScanned).toLocaleDateString()}
                          </Typography>
                        )}
                      </Box>
                    ) : (
                      <Box>
                        <Typography variant="body2" color="text.subtitle" sx={{ fontStyle: 'italic' }}>
                          Not assigned to any plant
                        </Typography>
                        <PrimaryButton
                          text="Assign to Plant"
                          size="small"
                          onClick={() => {
                            setSelectedTag(tag);
                            setShowAssignDialog(true);
                          }}
                          sx={{ mt: 2, borderRadius: 2 }}
                        />
                      </Box>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>

      {/* Context Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => {
          setShowAssignDialog(true);
          handleMenuClose();
        }}>
          <EditIcon sx={{ mr: 2 }} />
          {selectedTag?.plantId ? 'Reassign Plant' : 'Assign to Plant'}
        </MenuItem>
        <MenuItem onClick={() => {
          // Copy QR code URL
          navigator.clipboard.writeText(selectedTag?.qrCode);
          handleMenuClose();
        }}>
          <QrCodeIcon sx={{ mr: 2 }} />
          Copy QR URL
        </MenuItem>
        <MenuItem 
          onClick={() => {
            setShowDeleteDialog(true);
            handleMenuClose();
          }}
          sx={{ color: 'error.main' }}
        >
          <DeleteIcon sx={{ mr: 2 }} />
          Delete Tag
        </MenuItem>
      </Menu>

      {/* Create Tag Dialog */}
      <Dialog open={showCreateDialog} onClose={() => setShowCreateDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AddIcon sx={{ mr: 2, color: 'primary.main' }} />
            Create New Tag
          </Box>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Tag Name"
            fullWidth
            variant="outlined"
            value={newTagName}
            onChange={(e) => setNewTagName(e.target.value)}
            placeholder="Enter a descriptive name for your tag"
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <PrimaryButton 
            text="Cancel" 
            onClick={() => setShowCreateDialog(false)}
            sx={{ mr: 2 }}
          />
          <PrimaryButton 
            text="Create Tag" 
            onClick={handleCreateTag}
            disabled={!newTagName.trim()}
          />
        </DialogActions>
      </Dialog>

      {/* Assign Plant Dialog */}
      <Dialog open={showAssignDialog} onClose={() => setShowAssignDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LinkIcon sx={{ mr: 2, color: 'primary.main' }} />
            Assign Tag to Plant
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedTag && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.subtitle">
                Tag: <strong>{selectedTag.name}</strong> ({selectedTag.id})
              </Typography>
            </Box>
          )}
          <FormControl fullWidth margin="dense">
            <InputLabel>Select Plant</InputLabel>
            <Select
              value={selectedPlantId}
              label="Select Plant"
              onChange={(e) => setSelectedPlantId(e.target.value)}
            >
              {samplePlants.map((plant) => (
                <MenuItem key={plant.id} value={plant.id}>
                  {plant.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <PrimaryButton 
            text="Cancel" 
            onClick={() => setShowAssignDialog(false)}
            sx={{ mr: 2 }}
          />
          <PrimaryButton 
            text="Assign Tag" 
            onClick={handleAssignTag}
            disabled={!selectedPlantId}
          />
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} maxWidth="xs" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'error.main' }}>
            <DeleteIcon sx={{ mr: 2 }} />
            Delete Tag
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete the tag &ldquo;{selectedTag?.name}&rdquo;? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <PrimaryButton 
            text="Cancel" 
            onClick={() => setShowDeleteDialog(false)}
            sx={{ mr: 2 }}
          />
          <PrimaryButton 
            text="Delete" 
            onClick={handleDeleteTag}
            sx={{ bgcolor: 'error.main' }}
          />
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TagManagement;
