import React from "react";
import { Table } from "semantic-ui-react";

export default function job({ job }) {
  return (
    <div className='job'>
      <Table singleLine align="centre">
        <Table.Body>
          <Table.Row>
            <Table.Cell align="centre" style={{width: 300}}>{job.title}</Table.Cell>
            <Table.Cell align="centre" style={{width: 300}}>{job.company}</Table.Cell>
            <Table.Cell align="centre" style={{width: 300}}>{job.location}</Table.Cell>
            <Table.Cell align="centre" style={{width: 300}}>{job.created_at.split(' ').slice(0,3).join(' ')}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
