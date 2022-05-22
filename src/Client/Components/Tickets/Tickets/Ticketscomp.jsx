import React, { useEffect, useState } from "react";
import "./Ticketscomp.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";
import TableFooter from "@mui/material/TableFooter";

function createData(ID, Ticket_Title, Author, Description, Ticket_status, Ticket_type, Priority) {
  return { ID,Ticket_Title, Author, Description, Ticket_status, Ticket_type, Priority };
}

const rows = [
  createData(1, "Error:3433", "Jonathan Lee", "Error distorts the page styling and prevents relevant data from loading", "OPEN", "Issue", "High"),
  createData(2, "Error:3433", "Jonathan Lee", "Error distorts the page styling and prevents relevant data from loading", "OPEN", "Issue", "High"),
  createData(3, "Error:3433", "Jonathan Lee", "Error distorts the page styling and prevents relevant data from loading", "OPEN", "Issue", "High"),
  createData(4, "Error:3433", "Jonathan Lee", "Error distorts the page styling and prevents relevant data from loading", "OPEN", "Issue", "High"),
  createData(5, "Error:3433", "Jonathan Lee", "Error distorts the page styling and prevents relevant data from loading", "OPEN", "Issue", "High")
];

function Ticketscomp() {
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    setTickets(rows);
  }, []);

  return (
    <div>
      <div className="tableContainer">
        <div className="container">
          <TableContainer
            id="tableContainer"
            style={{
              width: "100%",

              border: "1px solid black",
            }}
            component={Paper}
          >
            <div className="ticketHeader">
              <span>Users</span>
            </div>

            <Table aria-label="simple table">
              <TableHead>
                <TableRow className="project-descriptions">
                  <TableCell align="center">ID</TableCell>
                  <TableCell align="center">Ticket Title</TableCell>
                  <TableCell align="center">Author</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Ticket Status</TableCell>
                  <TableCell align="center">Ticket Type</TableCell>
                  <TableCell align="center">Priority</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tickets
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((project) => (
                    <TableRow key={project.ID}>
                      <TableCell align="center">{project.ID}</TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {project.Ticket_Title}
                      </TableCell>
                      <TableCell align="center">
                        {project.Author}
                      </TableCell>
                      <TableCell align="center">
                        {project.Description}
                      </TableCell>
                      <TableCell align="center">
                        {project.Ticket_status}
                      </TableCell>
                      <TableCell align="center">
                        {project.Ticket_type}
                      </TableCell>
                      <TableCell align="center">
                        {project.Priority}
                      </TableCell>
                      <TableCell align="center">
                        {
                          <div className="cellAction">
                            {/* <Link className="viewButton" 
                         to={`/home`}>
                         {/* to={`/${project.id}`}> 
                          View
                        </Link> */}

                            <Link
                              className="viewButton"
                              // to={`/projects/updateproject/${project.id}`}
                              to={`/home`}
                            >
                              Edit
                            </Link>
                            <div className="deleteButton "> Delete</div>
                          </div>
                        }
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TableFooter>
              <div className="footerContainer">
                <div className="tablePagination">
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </div>
                <div className="addTicketbtn">
                  <a className="addTickerbtn" href="/home">
                    Add Ticket
                  </a>
                </div>
              </div>
            </TableFooter>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Ticketscomp;
