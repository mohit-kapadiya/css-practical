import { CssSelector } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackGroundComponent } from './homepage/back-ground/back-ground.component';
import { BorderComponent } from './homepage/border/border.component';
import { CombinatorsComponent } from './homepage/combinators/combinators.component';
import { CSSSelectors } from './homepage/css-selectors/css-tut.component';
import { DisplayBlockComponent } from './homepage/display-block/display-block.component';
import { DisplayFlexComponent } from './homepage/display-flex/display-flex.component';
import { DisplayFlex2Component } from './homepage/display-flex/display-flex2/display-flex2.component';
import { GradientsComponent } from './homepage/gradients/gradients.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LinkComponent } from './homepage/link/link.component';
import { PseudoClassesComponent } from './homepage/pseudo-classes/pseudo-classes.component';
import { TextComponent } from './homepage/text/text.component';
import { TransformComponent } from './homepage/transform/transform.component';
import { ZIndexComponent } from './homepage/z-index/z-index.component';

const routes: Routes = [
  {
    path :'homepage',
    component : HomepageComponent
  },
  {
    path :'',
    redirectTo :'homepage',
    pathMatch:'full'
  },
  {
    path :'css-selectors',
    component : CSSSelectors
  },
  {
    path :'back-ground',
    component : BackGroundComponent
  },
  {
    path :'border',
    component : BorderComponent
  },
  {
    path :'text',
    component : TextComponent
  },
  {
    path :'link',
    component : LinkComponent
  },
  {
    path :'z-index',
    component : ZIndexComponent
  },
  {
    path :'display-property',
    component : DisplayBlockComponent
  },
  {
    path :'css-combinatore',
    component : CombinatorsComponent
  },
  {
    path :'pseudo-classes',
    component : PseudoClassesComponent
  },
  {
    path :'gradient',
    component : GradientsComponent
  },
  {
    path :'transform',
    component : TransformComponent
  },
  {
    path :'flex',
    component : DisplayFlexComponent
  },
  {
    path :'flex2',
    component : DisplayFlex2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
