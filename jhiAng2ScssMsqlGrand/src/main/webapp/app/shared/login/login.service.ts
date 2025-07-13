import { Injectable, EventEmitter } from '@angular/core';
import { Principal } from '../auth/principal.service';
import { AuthServerProvider } from '../auth/auth-jwt.service';
import { JhiTrackerService } from '../tracker/tracker.service';

@Injectable()
export class LoginService {

    hamburgerEmit =  new EventEmitter<string>();

    constructor(
        private principal: Principal,
        private trackerService: JhiTrackerService,
        private authServerProvider: AuthServerProvider
    ) {}

    login(credentials, callback?) {
        const cb = callback || function() {};

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe((data) => {
                this.principal.identity(true).then((account) => {
                    this.trackerService.sendActivity();
                    resolve(data);
                });
                return cb();
            }, (err) => {
                this.logout();
                reject(err);
                return cb(err);
            });
        });
    }

    loginWithToken(jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    }

    logout() {
        if (this.principal.isAuthenticated()) {
            this.authServerProvider.logout().subscribe();
        }
        this.principal.authenticate(null);
    }

    getHamburgerEvent() {
        return this.hamburgerEmit;
    }
    
}
