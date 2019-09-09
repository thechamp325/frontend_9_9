import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { FormComponent } from './form/form.component';
import { StaffComponent } from './staff/staff.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { ReportComponent } from './report/report.component';
import { RegComponent } from './reg/reg.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { NewRegUserComponent } from './new-reg-user/new-reg-user.component';
import { PdfComponent } from './pdf/pdf.component';
import { SalaryComponent } from './salary/salary.component';
import { ExperienceComponent } from './experience/experience.component';
import { ConfirmationletterComponent } from './confirmationletter/confirmationletter.component';
import { NoobjectionComponent } from './noobjection/noobjection.component';
import { ExpadrelComponent } from './expadrel/expadrel.component';
import { HodComponent } from './hod/hod.component';
import { HodHomeComponent } from './hod-home/hod-home.component';
import { PrincipalComponent } from './principal/principal.component';
import { PriHomeComponent } from './pri-home/pri-home.component';
import { LiverequestComponent } from './liverequest/liverequest.component';
import { PriRequestComponent } from './pri-request/pri-request.component';
import { AdminreqComponent } from './adminreq/adminreq.component';
import { StatusComponent } from './status/status.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'form', component: FormComponent,canActivate:[AuthGuard] },
    { path: 'staff', component: StaffComponent},
    { path: 'staff-home',component:StaffHomeComponent,canActivate:[AuthGuard]},
    { path: 'staff-form',component:StaffFormComponent,canActivate:[AuthGuard]},
    { path: 'report',component:ReportComponent,canActivate:[AuthGuard]},
    { path: 'reg',component:RegComponent,canActivate:[AuthGuard] },
    { path: 'empdetail',component:EmpdetailComponent,canActivate:[AuthGuard] },
    { path: 'new-reg-user',component:NewRegUserComponent,canActivate:[AuthGuard]},
    { path: 'pdf',component:PdfComponent,canActivate:[AuthGuard]},
    { path:'salary',component:SalaryComponent,canActivate:[AuthGuard]},
    { path:'experience',component:ExperienceComponent,canActivate:[AuthGuard]},
    { path:'confirmationletter',component:ConfirmationletterComponent,canActivate:[AuthGuard]},
    { path:'noobjection',component:NoobjectionComponent,canActivate:[AuthGuard]},
    { path:'expadrel',component:ExpadrelComponent,canActivate:[AuthGuard]},
    { path:'hod',component:HodComponent},
    { path:'hod-home',component:HodHomeComponent,canActivate:[AuthGuard]},
    { path:'principal',component:PrincipalComponent},
    { path:'pri-home',component:PriHomeComponent,canActivate:[AuthGuard]},
    { path:'liverequest',component:LiverequestComponent,canActivate:[AuthGuard]},
    { path:'pri-request',component:PriRequestComponent,canActivate:[AuthGuard]},
    { path:'adminreq',component:AdminreqComponent,canActivate:[AuthGuard]},
    { path : 'status',component:StatusComponent,canActivate:[AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);