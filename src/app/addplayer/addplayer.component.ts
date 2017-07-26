import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Addplayer } from '../shared/addplayer';

@Component({
    selector: 'app-addplayer',
    templateUrl: './addplayer.component.html',
    styleUrls: ['./addplayer.component.scss']
})
export class AddplayerComponent implements OnInit {

    addplayerForm: FormGroup;
    addPlayer: Addplayer;

    formErrors = {
        'player_name': '',
        'player_surname': '',
        'path_photo': ''
    };

    validationMessages = {
        'player_name': {
            'required':      'First Name is required.',
            'minlength':     'First Name must be at least 2 characters long.',
            'maxlength':     'FirstName cannot be more than 25 characters long.'
        },
        'player_surname': {
            'required':      'Last Name is required.',
            'minlength':     'Last Name must be at least 2 characters long.',
            'maxlength':     'Last Name cannot be more than 25 characters long.'
        },
        'path_photo': {
            'required':      'Last Name is required.'
        }
    };

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {}

    createForm() {
        this.addplayerForm = this.fb.group({
           player_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
           player_surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
           path_photo: ['', Validators.required ]
        });

        this.addplayerForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }

    onSubmit() {
        this.addPlayer = this.addplayerForm.value;
        console.log(this.addPlayer);
        this.addplayerForm.reset({
            player_name: '',
            player_surname: '',
            path_photo: ''
        });
    }

    onValueChanged(data?: any) {
        if (!this.addplayerForm) { return; }
        const form = this.addplayerForm;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
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
}