import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface Items {
  checkbox: boolean;
  documento: number;
  nombre: string;
  mes: number;
  anio: number;
  tipo: string;
  estado: number;
  obs: string;
}

const ELEMENT_DATA: Items[] = [
  {checkbox: false, documento: 505025451, nombre: "Ali, Muhammad", mes: 1, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {checkbox: false, documento: 505025451, nombre: "Ali, Muhammad", mes: 2, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {checkbox: false, documento: 505025451, nombre: "Ali, Muhammad", mes: 3, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {checkbox: false, documento: 505025451, nombre: "Ali, Muhammad", mes: 4, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {checkbox: false, documento: 648987456, nombre: "Jobs, Steve", mes: 1, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
  {checkbox: false, documento: 648987456, nombre: "Jobs, Steve", mes: 2, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
  {checkbox: false, documento: 648987456, nombre: "Jobs, Steve", mes: 3, anio: 2019, tipo: "Mensual", estado: 3, obs: "Lorem ipsum dolor"},
  {checkbox: false, documento: 648987456, nombre: "Jobs, Steve", mes: 4, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {checkbox: false, documento: 603027333, nombre: "Kent, Clark", mes: 1, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {checkbox: false, documento: 603027333, nombre: "Kent, Clark", mes: 2, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {checkbox: false, documento: 603027333, nombre: "Kent, Clark", mes: 3, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {checkbox: false, documento: 603027333, nombre: "Kent, Clark", mes: 4, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {checkbox: false, documento: 469901345, nombre: "Monroe, Marilyn", mes: 1, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
  {checkbox: false, documento: 469901345, nombre: "Monroe, Marilyn", mes: 2, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
  {checkbox: false, documento: 469901345, nombre: "Monroe, Marilyn", mes: 3, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
  {checkbox: false, documento: 469901345, nombre: "Monroe, Marilyn", mes: 4, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
];

/**
 * @title `<table mat-table>`
 */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})


export class DataTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['checkbox', 'documento', 'nombre', 'mes', 'anio', 'tipo', 'estado', 'obs', 'more'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

