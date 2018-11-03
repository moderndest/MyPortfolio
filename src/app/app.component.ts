import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// declare var lottie: any;
import * as lottie from 'lottie-web';
// import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  // @ViewChild('body') body: ElementRef;
  @ViewChild('modalnavoverlay') takeover: ElementRef;
  @ViewChild('modal') menu: ElementRef;
  title = 'Chatsuda Rattarasan';
  bgurl = 'assets/img/bg.jpg';
  public HamConfig: Object;
  public SideModalConfig: Object;
  private Hamanim: any;
  private SideModelanim: any;
  body = document.body;
  // takeover = document.getElementById('modal-nav-overlay');
  // menu = document.getElementById('modal');

  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
      });
    });
  }

  ngAfterViewInit() {
    this.HamConfig = {
        path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1229210/burger.json',
        container: document.getElementById('toggle'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        prerender: false,
        rendererSettings: { progressiveLoad: false,
                            preserveAspectRatio: 'none' }
    };
    // lottie.setLocationHref(document.location.href);
    this.Hamanim = lottie.loadAnimation(this.HamConfig);
    this.Hamanim.setDirection(-1);

    this.SideModalConfig = {
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1229210/transition_anim.json',
      container: document.getElementById('modalnavoverlay'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      prerender: false,
      rendererSettings: { progressiveLoad: false,
                          preserveAspectRatio: 'none' }
    };

    this.SideModelanim = lottie.loadAnimation(this.SideModalConfig);
     // set initial animation direction
    this.SideModelanim.setDirection(-1);

    // const show = function (elem) {
    //   elem.classList.add('is-visible');
    // };

    // // Toggle element visibility
    // const toggle = function (elem) {
    //   elem.classList.toggle('is-visible');
    // };

    // document.addEventListener('click', function (event) {

    //   // Make sure clicked element is our toggle
    //   if (!event.target.classList.contains('toggle')) { return; }

    //   // Prevent default link behavior
    //   event.preventDefault();

    //   // Get the content
    //   const content = document.querySelector(event.target.hash);
    //   if (!content) { return; }

    //   // Toggle the content
    //   toggle(content);

    // }, false);

    // this.anim.addEventListener('toggle', () => {
    //   this.anim.setSpeed(1.5);
    //   this.anim.playSegments([0, 55], true);
    // });
  }

  hamaction() {

    // If the menu is invisible, play the open animation to visible
    if ((this.SideModelanim.playDirection === -1) && (this.Hamanim.playDirection === -1)) {
        this.takeover.nativeElement.style.zIndex = '20';
        this.menu.nativeElement.style.zIndex = '21';
        this.SideModelanim.setDirection(1);
        this.Hamanim.setDirection(1);
        this.SideModelanim.play();

        this.Hamanim.goToAndPlay([15], true);
        this.Hamanim.playSegments([15, 34], true);
        this.Hamanim.addEventListener('complete', () => {
          this.body.classList.remove('closes');
          this.body.classList.add('open');
        });
    } else  {
      this.body.classList.remove('open');
      this.body.classList.add('closes');
      this.SideModelanim.setDirection(-1);
      this.SideModelanim.play();
      this.Hamanim.setDirection(-1);
      this.Hamanim.play();
      setTimeout(() => {
        this.takeover.nativeElement.style.zIndex = '-4';
        }, 600);
        setTimeout(() => {
        this.menu.nativeElement.style.zIndex = '-1';
        }, 600);



      this.Hamanim.addEventListener('complete', () => {
      this.body.classList.remove('open');
      this.body.classList.add('closes');
      });

    }
  }
}
