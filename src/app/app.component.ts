import { AppState } from './app.global';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs/Subject';
//provider
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  activePage = new Subject();
  public authToken: any;
  public email: string;
  public user: any;

  MENU = {
    DEFAULT: 'menu-components',
    MATERIAL: 'menu-material',
    AVATAR: 'menu-avatar',
  };

  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  state: any;
  placeholder = 'assets/img/profile/profile.png';
  chosenPicture: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashscreen: SplashScreen,
    public global: AppState,
    public menuCtrl: MenuController,
    private auth: AuthProvider,
  ) {
    this.authToken = this.auth.loadToken();
    this.initializeApp();
    if (this.auth.authToken) {
      this.rootPage = 'HomePage';
    } else {
      this.rootPage = 'LoginSliderPage';
    }


    this.pages = [
      { title: 'Home', component: 'HomePage', active: true, icon: 'home' },
      { title: 'Scan QR', component: 'BarcodeScannerPage', active: false, icon: 'camera' },
      { title: 'Request Item', component: 'RequestItemsPage', active: false, icon: 'cart' },
      { title: 'Report Items', component: 'ReportItemPage', active: false, icon: 'cart' },
      { title: 'Profile', component: 'ProfileFivePage', active: false, icon: 'camera' },
      { title: 'Notification', component: 'TimelinePage', active: false, icon: 'alarm' },
      { title: 'Login', component: 'LoginSliderPage', active: false, icon: 'archive' },
    ];

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
  }

  initializeApp() {
    this.changeMenu(this.MENU.AVATAR);
    if (this.auth.authToken) {
      this.platform.ready().then(() => {
        this.global.set('theme', '');
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashscreen.hide();
        this.menuCtrl.enable(false, 'right');
        this.changeMenu(this.MENU.AVATAR);
      });
    } else {
      this.rootPage = 'LoginSliderPage';
    }
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
    
  }

  changeMenu(menu) {
    // Disables all other sidemenus
    Object.keys(this.MENU).map(k => this.menuCtrl.enable(false, this.MENU[k]));

    // Enables then open the selected menu
    this.menuCtrl.enable(true, menu);
    this.getUser();
  }

  getUser(){
    if (this.auth.authToken){
      var user = JSON.parse(window.localStorage.getItem('user'));
      this.email = user.email;
    }
    
  }
}
