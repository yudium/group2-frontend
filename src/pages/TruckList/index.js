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
import truck from '../../api/truck';
import useDebounce from '../../hooks/useDebounce';
import TransporterMenu from '../../components/TransporterMenu';

export default function TruckList() {
  //
  // DATA
  //
  const [data, setData] = React.useState([]);
  const [truckTypes, setTruckTypes] = React.useState([]);

  useEffect(() => {
    truck.getTrucks().then(setData);
    truck.getTruckTypes().then(setTruckTypes);
  }, []);

  //
  // FILTER
  //
  const [search, setSearch] = React.useState('');
  const [showFilter, setShowFilter] = React.useState(false);
  const [selectedFilters, setSelectedFilters] = React.useState([]);

  function changeTruckTypeFilter(newFilters) {
    setSelectedFilters(newFilters);
    truck.getTrucks({ truckTypesFilter: newFilters, licenseNumber: search }).then(setData);
  }

  function handleSearch(query) {
    setSearch(query);
    truck.getTrucks({ truckTypesFilter: selectedFilters, licenseNumber: query }).then(setData);
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
        accessorFn: (row) => row.license_number,
        id: 'license',
        cell: (info) => info.getValue(),
        header: () => <span>License Number</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.truck_type,
        id: 'type',
        cell: (info) => info.getValue(),
        header: () => <span>Truck Type</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.plate_type,
        id: 'plate',
        header: () => 'Plate Type',
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.production_year,
        id: 'prod-year',
        header: () => <span>Production Year</span>,
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

      {showFilter && (
        <FilterModal
          onChange={changeTruckTypeFilter}
          typeList={truckTypes}
          selectedFilters={selectedFilters}
          onClose={() => setShowFilter(false)}
        />
      )}

      <Row>
        <Col sm={2}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setShowFilter(true);
            }}
          >
            Filter By Type
          </Button>
        </Col>
        <Col></Col>
        <Col sm={4}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search License Number"
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
                              setShowFilter(true);
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
