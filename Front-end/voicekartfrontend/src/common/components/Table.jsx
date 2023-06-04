import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  tableCellClasses,
  TablePagination,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import Input from "./Input";
import CardLayout from "./CardLayout";
import ToggleSwitch from "./Switch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ActionButton from "./Button";
const useStyles = makeStyles((theme) => ({
  deleteIconStyle: {
    marginLeft: "25px",
    cursor: "pointer",
    color: "red",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00b5ff30",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  [`&.${tableCellClasses.root}`]: {
    padding: "8px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables(props) {
  const classes = useStyles();
  const columns = props.colsData;
  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selected, setSelected] = React.useState([]);
  React.useEffect(() => {
    setRows(props.rowsData);
  }, [props.rowsData]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    props.getPaginationListApiCall(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRows([]);
    setRowsPerPage(+event.target.value);
    props.getPaginationListApiCall(page, event.target.value);
    // setPage(0);
  };
  const isSelected = (name) => selected.indexOf(name) !== -1;
  const handleChangeSearch = (e) => {
    props.handleChange(e);
    setPage(0);
  };
  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelected = rows.map((n) => n);
  //     setSelected(newSelected);
  //     return;
  //   }
  //   setSelected([]);
  // };

  const handleClick = (event, row) => {
    const selectedIndex = selected.indexOf(row);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  return (
    <CardLayout
      cardContent={
        <div>
          {props.hideSearch ? (
            ""
          ) : (
            <div style={{ float: "right" }}>
              <Input
                label="Search"
                name="search"
                shrink={true}
                watch={props.watch}
                widht="fit-content"
                handleChange={handleChangeSearch}
              />
            </div>
          )}
          <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table">
              {/* <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <StyledTableCell key={index}>
                      {column.label}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead> */}
              <TableHead style={{background:'#38ab8b'}}>
                <TableRow>
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      indeterminate={
                        selected.length > 0 && selected.length < rows.length
                      }
                      checked={
                        rows.length > 0 && selected.length === rows.length
                      }
                      onChange={handleSelectAllClick}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                  </TableCell> */}
                  {columns.map((column, index) => (
                    <StyledTableCell style={{color:'white'}} key={index}>{column.name}</StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {rows && rows.length > 0
                  ? rows

                      // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                        const isItemSelected = isSelected(row);
                        const labelId = `enhanced-table-checkbox-${index}`;
                        return (
                          <StyledTableRow
                            key={row.name}
                            onClick={(event) => handleClick(event, row)}
                            // role="checkbox"
                            // aria-checked={isItemSelected}
                            // tabIndex={-1}
                            // selected={isItemSelected}
                          >
                            {/* <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            //   inputProps={{
                            //     'aria-labelledby': labelId,
                            //   }}
                          />
                        </TableCell> */}
                            {columns.map((column) => {
                              let value = "";
                              if (column.id === "sNo") {
                                value = rowsPerPage * page + index + 1;
                              } else if (column.id === "actions") {
                                value = (
                                  <div style={{ whiteSpace: "nowrap" }}>
                                    <span style={{ cursor: "pointer" }}>
                                      <EditIcon
                                        onClick={() =>
                                          props.getRowData(row, "Update")
                                        }
                                      />
                                    </span>
                                    <span className={classes.deleteIconStyle}>
                                      <ToggleSwitch
                                        checked={
                                          row.status === 1 ? true : false
                                        }
                                        handleChange={() =>
                                          props.handleDeleteModal(row)
                                        }
                                      />
                                    </span>
                                  </div>
                                );
                              } else if (column.id === "buttonAction") {
                                value = (
                                  <span style={{ cursor: "pointer" }}>
                                    <ActionButton
                                      buttonText={
                                        props.buttonText
                                          ? props.buttonText
                                          : "Cancel Service"
                                      }
                                      backgroundColor={
                                        props.backgroundColor
                                          ? props.backgroundColor
                                          : "red"
                                      }
                                      width="fit-content"
                                      handleSubmit={() =>
                                        props.handleActionClick(row)
                                      }
                                    />
                                  </span>
                                );
                              } else if (column.id === "viewAction") {
                                value = (
                                  <span style={{ cursor: "pointer" }}>
                                    <VisibilityIcon
                                      onClick={() => {
                                        props.handlePasswordIcon(row);
                                      }}
                                    />
                                  </span>
                                );
                              } else if (column.id === "statusFlag") {
                                value =
                                  row[column.id] === 1 ? "Active" : "InActive";
                              } else if (column.id === "view") {
                                value = (
                                  <span style={{ cursor: "pointer" }}>
                                    <EditIcon
                                      onClick={() =>
                                        props.getRowData(row, "Update")
                                      }
                                    />
                                  </span>
                                );
                              } else {
                                value = row[column.id];
                              }

                              return (
                                <StyledTableCell
                                  key={column.id}
                                  align={column.align}
                                >
                                  {value}
                                </StyledTableCell>
                              );
                            })}
                          </StyledTableRow>
                        );
                      })
                  : null}
              </TableBody>
            </Table>
            {props.paginationRequired ? (
              <div>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={
                    props.tableData
                      ? props.tableData.totalElements
                      : rows.length
                  }
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </div>
            ) : (
              ""
            )}
          </TableContainer>
        </div>
      }
    />
  );
}
