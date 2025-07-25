// import { trigger, state, animate, transition, style } from '@angular/animations';
import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const slideInDownAnimation: AnimationEntryMetadata =
trigger('slideInDownAnimation', [
  state('*',
    style({
      opacity: 1,
      transform: 'translateX(0)'
    })
  ),
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    animate('0.2s ease-in')
  ]),
  transition(':leave', [
    animate('0.5s ease-out', style({
      opacity: 0,
      transform: 'translateY(100%)'
    }))
  ])
]);
