import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ConversationHistoryComponent } from './pages/conversation-history/conversation-history.component';

const routes: Routes = [

  {path:'',redirectTo:'/register',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  { path: 'chat/user/:userId', component: ConversationHistoryComponent},
  {path:'chat',component:ChatComponent},
  // { path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
