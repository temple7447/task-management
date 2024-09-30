// UserTable.js
import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox,
  TableSortLabel
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import UserRow from './UserRow'; // Import the UserRow component
import { rows } from '../../_mock/user';

const UserTable = () => {
  const [sortDirection, setSortDirection] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const theme = useTheme();

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && sortDirection === 'asc';
    setSortDirection(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedRows = rows.sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[orderBy].localeCompare(b[orderBy]);
    }
    return b[orderBy].localeCompare(a[orderBy]);
  });

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table aria-label="user table">
        <TableHead>
          <TableRow sx={{ bgcolor: theme.palette.grey[100] }}>
            <TableCell padding="checkbox" >
              <Checkbox size="small" />
            </TableCell>
            <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>
              <TableSortLabel
                active={orderBy === 'name'}
                direction={sortDirection}
                onClick={() => handleSortRequest('name')}
              >
              PROJECT NAME
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>
              <TableSortLabel
                active={orderBy === 'email'}
                direction={sortDirection}
                onClick={() => handleSortRequest('email')}
              >
              CREATED BY
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>
              <TableSortLabel
                active={orderBy === 'branch'}
                direction={sortDirection}
                onClick={() => handleSortRequest('branch')}
              >
              DEADLINE
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>
              <TableSortLabel
                active={orderBy === 'branch'}
                direction={sortDirection}
                onClick={() => handleSortRequest('branch')}
              >
              MEMBERS
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>
              <TableSortLabel
                active={orderBy === 'role'}
                direction={sortDirection}
                onClick={() => handleSortRequest('role')}
              >
              STATUS
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>
              ACTION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{bg:'green'}}>
          {sortedRows.map((row) => (
            <UserRow key={row.email} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(UserTable)
