import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CSSSelectors } from './homepage/css-selectors/css-tut.component';
import { BackGroundComponent } from './homepage/back-ground/back-ground.component';
import { BorderComponent } from './homepage/border/border.component';
import { TextComponent } from './homepage/text/text.component';
import { LinkComponent } from './homepage/link/link.component';
import { ZIndexComponent } from './homepage/z-index/z-index.component';
import { DisplayBlockComponent } from './homepage/display-block/display-block.component';
import { CombinatorsComponent } from './homepage/combinators/combinators.component';
import { PseudoClassesComponent } from './homepage/pseudo-classes/pseudo-classes.component';
import { GradientsComponent } from './homepage/gradients/gradients.component';
import { TransformComponent } from './homepage/transform/transform.component';
import { DisplayFlexComponent } from './homepage/display-flex/display-flex.component';
import { DisplayFlex2Component } from './homepage/display-flex/display-flex2/display-flex2.component';


@NgModule({
  declarations: [
    HomepageComponent,
    CSSSelectors,
    BackGroundComponent,
    BorderComponent,
    TextComponent,
    LinkComponent,
    ZIndexComponent,
    DisplayBlockComponent,
    CombinatorsComponent,
    PseudoClassesComponent,
    GradientsComponent,
    TransformComponent,
    DisplayFlexComponent,
    DisplayFlex2Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
