import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemBuilderValidationMessageError } from 'src/app/utils/interfaces/ItemBuilderValidationMessageError';
import { BuilderValidationMessageError } from 'src/app/utils/models/BuilderValidationMessageError';
import { UserCredentials } from '../../interfaces/UserCredentials';
import { AuthSupabaseService } from '../../services/auth-supabase.service';
import { MessageService } from 'primeng/api';
import { Constants } from 'src/app/utils/helpers/Constants';
import { StorageSupasbaseService } from 'src/app/shared/services/storage-supasbase.service';
import { ManagerLocalStorage } from 'src/app/utils/helpers/ManagerLocalStorage';
import { UserCurrent } from '../../models/UserCurrent';

@Component({
  selector: 'auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrls: ['./auth-login-page.component.css']
})
export class AuthLoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  validationsMessages: ItemBuilderValidationMessageError = { itemsValidationMessageError: {} };

  constructor(private formBuilder: FormBuilder, private builderValidationMessage: BuilderValidationMessageError, private authService: AuthSupabaseService,
    private messageService: MessageService, private storageService: StorageSupasbaseService, private managerLocalStorage: ManagerLocalStorage) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(255), Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(255)]]
    });
    this.generateValidationsMessage();
  }
  onSubmitSignIn(): void {
    const credentials: UserCredentials = this.formLogin.value as UserCredentials;
    this.signIn(credentials);
  }

  signIn(userCredentials: UserCredentials) {
    this.authService.signInSupabase(userCredentials)
      .subscribe(
        {
          next: (response) => {
            const uid:string = response.session.user.id;
            if (response.user === null || response.session === null) this.messageService.add({ severity: Constants.DIALOG_TYPE_ERROR, summary: 'Error en autenticación', detail: 'El username o password son incorrectos.' });
            this.getCurrentUser(uid);
            console.log(response);
          },
          error: (error) => console.log(error)

        }
      );
  }

  generateValidationsMessage(): void {

    this.builderValidationMessage.addValidationMessage('username', {
      required: 'El Username es requerido.',
      maxLength: 'El Username solo admite máximo 255 caracteres.',
      email: 'Debe tener un formato de correo.'
    });

    this.builderValidationMessage.addValidationMessage('password', {
      required: 'El Password es requerido.',
      maxLength: 'El Password solo admite máximo 255 caracteres.'
    });

    this.validationsMessages = this.builderValidationMessage.getValidationsMessage;
  }

  getCurrentUser(uid: string): void {
    this.authService.getCurrentUserSupaBase(uid)
      .subscribe(
        {
          next: (response) => {
            const result: UserCurrent = response;
            this.managerLocalStorage.setObjectItemStorage<UserCurrent>("user", result);
            console.log(response);
          },
          error: (error) => console.log(error)
        }
      )
  }
}
