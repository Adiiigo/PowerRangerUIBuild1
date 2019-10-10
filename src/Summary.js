import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'Date', label: 'Date', minWidth: 170 },
  { id: 'Transactionamt', label: 'Transaction Amount', minWidth: 100 },
  
  {
    id: 'contribution',
    label: 'Contribution to Go Green',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'score',
    label: 'Credit Score',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2),
  },
];

function createData(Date, Transactionamt, contribution, score) {
 
  return { Date, Transactionamt, contribution, score };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function Summary() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <h4>Green initiative </h4>
    Millennial! Bringing a difference is a bank wide initiative 
    that encourages customers to contribute towards greener environment 
    each time a transaction is triggered from their account. Any decimal 
    value transaction from a retail customer’s account is rounded off to
     the next integer value and delta value is contributed towards green cause.
      At the same time Institutional customers as part of this initiative can agree 
      to contribute a percentage of every transaction towards this cause. In turn 
      customers will be provided with reward benefits.
      </div>
  );
}