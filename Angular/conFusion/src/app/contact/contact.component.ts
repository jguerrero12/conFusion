import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import { flyInOut, expand } from '../animations/app.animation';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  errMess: string;
  submitting = false;
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'First name is required',
      'minlength': 'First name must be at least 2 characters long',
      'maxlength': 'First name cannot be more than 25 characters long'
    },
    'lastname': {
      'required': 'Last name is required',
      'minlength': 'Last name must be at least 2 characters long',
      'maxlength': 'Last name cannot be more than 25 characters long'
    },
    'telnum': {
      'required': 'Tel. number is required',
      'pattern': 'Tel. number must contain only numbers'
    },
    'email': {
      'required': 'Email is required',
      'email': 'Email not in valid format'
    }
  };

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {
    this.createForm();
  }

  createForm(): void {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );
    this.onValueChanged(); // (reset form validation messages)
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }

  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitting = true;
    
    this.feedbackService
      .submitFeedback(this.feedbackForm.value) // Submit feedback form data to REST server db. 
      .subscribe(feedback => {
        this.feedback = feedback;
        this.submitting = false;
        setTimeout(so => {this.feedbackForm.reset({
          firstname: '',
          lastname: '',
          telnum: '',
          email: '',
          agree: false,
          contacttype: 'None',
          message: ''
        }); this.feedback = null;}, 5000);
      },
      error => {
        this.submitting = false;
        this.errMess = <any>error;
      });

  }

}
