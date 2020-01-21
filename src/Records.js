/* eslint-disable import/first */
import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import records from './data';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    table: {
      minWidth: 650,
    },
  });

class SimpleTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            record: records
        };
    }
    render() {
        const { classes } = this.props;
        const { record } = this.state;
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Project Name</TableCell>
                                <TableCell>Employee Name</TableCell>
                                <TableCell >Marklogic</TableCell>
                                <TableCell >JIRA</TableCell>
                                <TableCell >Jenkins</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {records.map(record=> (
                                <TableRow key={record.id} align="start">
                                
                                <TableCell >{record.Project}</TableCell>
                                <TableCell >{record.Employee}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}
export default withStyles(styles) (SimpleTable);
