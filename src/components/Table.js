import React from 'react';

import PropTypes from 'prop-types';

import mTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const rows = (offers) => {
  return offers.map((offer) => (
    <TableRow key={offer.id}>
      <TableCell component="th" scope="row">
        <img src={offer.merchant.logo_url} />
      </TableCell>
      <TableCell align="left">{offer.merchant.name}</TableCell>
      <TableCell align="left">{offer.offer.display_name}</TableCell>
      <TableCell align="left">{'£' + offer.offer.price}</TableCell>
      <TableCell align="left">
        <a href={offer.offer.link}>Go to Offer</a>
      </TableCell>
    </TableRow>
  ));
};

const Table = (props) => {
  return (
    <TableContainer component={Paper}>
      <mTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Logo</TableCell>
            <TableCell align="left">Seller</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows(props.offers)}</TableBody>
      </mTable>
    </TableContainer>
  );
};

Table.propTypes = {
  offers: PropTypes.array,
};

export default Table;
