import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Items {
  position: number;
  documento: number;
  nombre: string;
  mes: number;
  anio: number;
  tipo: string;
  estado: number;
  obs: string;
}

const ELEMENT_DATA: Items[] = [
  {position: 1, documento: 505025451, nombre: "Ali, Muhammad", mes: 1, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {position: 2, documento: 505025451, nombre: "Ali, Muhammad", mes: 2, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {position: 3, documento: 505025451, nombre: "Ali, Muhammad", mes: 3, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {position: 4, documento: 505025451, nombre: "Ali, Muhammad", mes: 4, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {position: 5, documento: 648987456, nombre: "Jobs, Steve", mes: 1, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
  {position: 6, documento: 648987456, nombre: "Jobs, Steve", mes: 2, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
  {position: 7, documento: 648987456, nombre: "Jobs, Steve", mes: 3, anio: 2019, tipo: "Mensual", estado: 3, obs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
  {position: 8, documento: 648987456, nombre: "Jobs, Steve", mes: 4, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {position: 9, documento: 603027333, nombre: "Kent, Clark", mes: 1, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {position: 10, documento: 603027333, nombre: "Kent, Clark", mes: 2, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {position: 11, documento: 603027333, nombre: "Kent, Clark", mes: 3, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {position: 12, documento: 603027333, nombre: "Kent, Clark", mes: 4, anio: 2019, tipo: "Mensual", estado: 2, obs: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  {position: 13, documento: 469901345, nombre: "Monroe, Marilyn", mes: 1, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
  {position: 14, documento: 469901345, nombre: "Monroe, Marilyn", mes: 2, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
  {position: 15, documento: 469901345, nombre: "Monroe, Marilyn", mes: 3, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
  {position: 16, documento: 469901345, nombre: "Monroe, Marilyn", mes: 4, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
  {position: 17, documento: 470012456, nombre: "Bowie, David", mes: 1, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
  {position: 18, documento: 470012456, nombre: "Bowie, David", mes: 2, anio: 2019, tipo: "Mensual", estado: 2, obs: ""},
  {position: 19, documento: 470012456, nombre: "Bowie, David", mes: 3, anio: 2019, tipo: "Mensual", estado: 3, obs: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"},
  {position: 20, documento: 470012456, nombre: "Bowie, David", mes: 4, anio: 2019, tipo: "Mensual", estado: 1, obs: ""},
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
  displayedColumns: string[] = ['select', 'documento', 'nombre', 'mes', 'anio', 'tipo', 'estado', 'obs', 'more'];
  dataSource = new MatTableDataSource<Items>(ELEMENT_DATA);
  selection = new SelectionModel<Items>(true, []);


  constructor() {}

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Items): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
  }

  // @Input() filtro: string = "f";
  
  // applyFilter(fdService: FilterDataService){
  //   // const filterValue = fdService;
  //   this.dataSource.filter = fdService.filterData;
  // }
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}

