import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  subjectForm = this.fb.group({
    name:'',
    email:'',
    phone:'',
    date:'',
    time:'',
    people:'',
    message:'',
  })

  constructor(private fb:FormBuilder, private subSrv: ProductService) { }

  ngOnInit(): void {
  }
  // onSubmit(){
  //   // alert('Tạo thành công')
  //   // console.log(this.subjectForm.value);
  //   this.subSrv.add(this.subjectForm.value).subscribe(res => {
  //     this.subjectForm.reset();
  //   })
  // }
}
