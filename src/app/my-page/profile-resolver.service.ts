import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Profile, ProfilesService } from '../shared';

@Injectable()
export class ProfileResolver implements Resolve<Profile> {
  constructor(
    private profilesService: ProfilesService,
    private router: Router
  ) {
  	console.log('profile resolver');
  	
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
console.log(' route.params[', route.params['username']);
    return this.profilesService.get(route.params['username'])
           .catch((err) => this.router.navigateByUrl('/'));

  }
}
