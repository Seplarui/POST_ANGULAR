import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/service/data-api.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-save-empresa',
  templateUrl: './save-empresa.component.html',
  styleUrls: ['./save-empresa.component.css']
})
export class SaveEmpresaComponent implements OnInit {

  constructor(private dataApiService: DataApiService, private location: Location) { }

  ngOnInit() {
  }

  onSaveEmpresa(empresaForm: NgForm): void {
    console.log('INPUTCIF ' + empresaForm.value.inputCIF);
    this.dataApiService.saveEmpresa(empresaForm.value).subscribe(empresa => location.reload());
  }

}
