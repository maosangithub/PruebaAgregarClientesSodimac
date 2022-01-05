import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listClientes: Cliente[] = []
  nombreCliente = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Metodo para Agregar el cliente a la lista y limpiar el input cuando 
  // se muestre en la lista
  agregarCliente(){
    //console.log(this.nombreCliente);
    
    // Crear objeto cliente
    const cliente: Cliente = {
      nombre: this.nombreCliente,
      estado: false
    }
    // Agregar el objeto Cliente al array
    this.listClientes.push(cliente);

    // Reset form
    this.nombreCliente = ''; 
  }

}
