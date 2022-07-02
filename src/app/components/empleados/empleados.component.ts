import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from 'src/app/interfaces/empleados';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  ELEMENT_DATA: Empleado[] = [
    {usuario: "pepito", nombre: 'Jose Madrid Molina', correo: "pepe.smx@gmail.com", dni: '48601480L'},
    {usuario: "albaida", nombre: 'Andrea Tormo Part', correo: "andrea@gmail.com", dni: '55501480L'},
    {usuario: "ontinyent", nombre: 'Josep Espi Sancho', correo: "josep@gmail.com", dni: '66601480L'},
    {usuario: "alcoi", nombre: 'Eric Torregrosa Blasco', correo: "eric@gmail.com", dni: '77701480L'},
    {usuario: "beniganim", nombre: 'Ruben Sarrio Sanjuan', correo: "ruben@gmail.com", dni: '88801480L'},
    {usuario: "benisoda", nombre: 'Diego Navarro Espi', correo: "diego@gmail.com", dni: '99901480L'},
    {usuario: "atzeneta", nombre: 'Maria Molina Perez', correo: "maria@gmail.com", dni: '11101480L'},
  ];
  
  displayedColumns: string[] = ['Usuario', 'Nombre', 'Correo', 'DNI', 'Acciones'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
