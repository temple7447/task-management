// UserTable.js
import React, { useState, useMemo } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox,
  TableSortLabel, TablePagination
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import UserRow from './UserRow'; // Import the UserRow component
import { rows } from '../../_mock/user';
import { getComparator, applyFilter } from './utils';

const UserTable = () => {
  const [sortDirection, setSortDirection] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterName, setFilterName] = useState('');
  const theme = useTheme();

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && sortDirection === 'asc';
    setSortDirection(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredUsers = useMemo(
    () => applyFilter({
      inputData: rows,
      comparator: getComparator(sortDirection, orderBy),
      filterName,
    }),
    [sortDirection, orderBy, filterName]
  );

  const paginatedUsers = useMemo(
    () => filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [filteredUsers, page, rowsPerPage]
  );

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
             NAME
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>
              <TableSortLabel
                active={orderBy === 'email'}
                direction={sortDirection}
                onClick={() => handleSortRequest('email')}
              >
              EMAIL ADDRESS
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>
              <TableSortLabel
                active={orderBy === 'branch'}
                direction={sortDirection}
                onClick={() => handleSortRequest('branch')}
              >
              BRANCH
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>
              <TableSortLabel
                active={orderBy === 'branch'}
                direction={sortDirection}
                onClick={() => handleSortRequest('branch')}
              >
              ROLE
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>
              <TableSortLabel
                active={orderBy === 'role'}
                direction={sortDirection}
                onClick={() => handleSortRequest('role')}
              >
              LAST ACTIVITY
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>
              ACTION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedUsers.map((row) => (
            <UserRow key={row.email} row={row} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default React.memo(UserTable);
