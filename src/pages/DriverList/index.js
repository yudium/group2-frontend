import React, { useEffect, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { makeData } from './makeData';
import { Button, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import FilterModal from './FilterModal';
import driver from '../../api/driver';
import useDebounce from '../../hooks/useDebounce';
import TransporterMenu from '../../components/TransporterMenu';
import { Link } from 'react-router-dom';

export default function DriverList() {
  //
  // DATA
  //
  const [data, setData] = React.useState([]);

  useEffect(() => {
    driver.getDrivers().then(setData);
  }, []);

  //
  // FILTER
  //
  const [search, setSearch] = React.useState('');

  function handleSearch(query) {
    setSearch(query);
    driver.getDrivers({ name: query }).then(setData);
  }

  const searchDebounce = useDebounce(search, 500);

  useEffect(() => {
    handleSearch(searchDebounce);
  }, [searchDebounce]);

  //
  // SORTING
  //
  const [sorting, setSorting] = React.useState([]);

  //
  // REACT TABLE CONFIGURATION
  //
  const columns = React.useMemo(
    () => [
      {
        accessorFn: (row) => <Link to={`/drivers/${row.id}`}>{row.driver_name}</Link>,
        id: 'name',
        cell: (info) => info.getValue(),
        header: () => <span>Driver Name</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.phone_number,
        id: 'phone_number',
        cell: (info) => info.getValue(),
        header: () => <span>Phone Number</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.created_at,
        id: 'created_at',
        header: () => 'Created At',
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.status,
        id: 'Status',
        header: () => <span>Status</span>,
        footer: (props) => props.column.id,
      },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <Layout>
      <TransporterMenu />

      <Row>
        <Col></Col>
        <Col sm={4}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search by name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <div className="p-2">
        <div className="h-2" />

        <div class="overflow-x-auto relative">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th key={header.id} colSpan={header.colSpan} className="py-4 px-6">
                        {header.isPlaceholder ? null : (
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? 'cursor-pointer select-none'
                                : '',
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{
                              asc: ' 🔼',
                              desc: ' 🔽',
                            }[header.column.getIsSorted()] ?? null}
                          </div>
                        )}
                      </th>
                    );
                  })}
                  <th>Action</th>
                </tr>
              ))}
            </thead>
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, 10)
                .map((row) => {
                  return (
                    <tr key={row.id} class="bg-white border-b">
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            key={cell.id}
                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        );
                      })}
                      <td>
                        <ButtonGroup>
                          <Button
                            variant="secondary"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            Update
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
