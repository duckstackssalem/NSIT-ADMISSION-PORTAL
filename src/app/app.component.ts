import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

export interface student {
  Name: string;
  fg_name: string;
  Mobile: string;
  Standard: string;
  School: string;
  District: string;
  State: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentForm: FormGroup;
  submitted = false;
  url: any;



  constructor(private formBuilder: FormBuilder, private db: AngularFirestore,private toastr: ToastrService,) {

    // const things = db.collection('test').add({
    //   username:'jp',
    //   friend : 'gaya'
    // })
    // console.log('db created');


  }


  //ng initial
  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      Name: ['', Validators.required],
      fg_name: ['', Validators.required],
      Mobile : ['', Validators.required],
      Standard: ['', Validators.required],
      School:['', Validators.required],
      District:['', Validators.required],
      State:['', Validators.required],
    })
  }

  submittest(valid, value) {
    this.submitted = true;
    this.db.collection("AdmissionList").add(value)
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
      // this.toastr.success('successfully Submitted!', 'Thank You!');
      this.studentForm.reset()
      alert('successfully Submitted')
  }



}
