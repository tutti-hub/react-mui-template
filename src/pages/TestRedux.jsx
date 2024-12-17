import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForever, Save } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { cleartTodoItems, addTodoItem } from '../state/todoSlice';
import { useState } from 'react';
import { inputBaseClasses } from '@mui/material/InputBase';
import { indigo } from '@mui/material/colors';

function Header() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(addTodoItem(task));
    setTask('');
  };
  return (
    <Box marginBottom={4} p={4} sx={{ bgcolor: indigo[100] }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          value={task}
          label="Add New Task"
          onChange={(e) => setTask(e.target.value)}
          sx={{ color: 'inherit' }}
          slotProps={{
            input: {
              endAdornment: (
                <IconButton
                  color="primary"
                  onClick={handleSave}
                  sx={{
                    opacity: 0,
                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                      opacity: 1,
                    },
                  }}
                  disabled={task.length === 0}>
                  <Save />
                </IconButton>
              ),
            },
          }}
        />
        <Button
          variant="outlined"
          color="error"
          onClick={() => dispatch(cleartTodoItems())}
          startIcon={<DeleteForever />}>
          Clear
        </Button>
      </Container>
    </Box>
  );
}

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.09 },
  { field: 'task', headerName: 'Task', flex: 1 },
];

export default function Test() {
  const { todoItems } = useSelector((state) => state.todo);

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h2" align="center">
          Tasks
        </Typography>
        <DataGrid
          columns={columns}
          rows={todoItems}
          checkboxSelection></DataGrid>
      </Container>
    </>
  );
}
