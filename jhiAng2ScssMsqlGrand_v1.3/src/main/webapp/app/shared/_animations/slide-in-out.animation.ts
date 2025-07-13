// import { trigger, state, animate, transition, style } from '@angular/animations';
import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const slideInOutAnimation =
    trigger('slideInOutAnimation', [

        // end state styles for route container (host)
        state('*', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'relative',
            // top: 0,
            // left: 0,
            // right: 0,
            // bottom: 0,
            // backgroundColor: 'rgba(0, 0, 0, 0.8)'
        })),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                opacity: 0,
                left: '-100%'
            }),

            // animation and styles at end of transition
            animate('.3s ease-in', style({
                opacity: 1,
                left: '0%'
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen,
                // -400% is required instead of -100% because the negative position adds to the width of the element
                left: '0%',
                opacity: 1

                // start with background opacity set to 0 (invisible)
                // backgroundColor: 'rgba(0, 0, 0, 0)'
            }),
            // animation and styles at end of transition
            animate('.3s ease-out', style({
                // transition the right position to -400% which slides the content out of view
                left: '100%',
                opacity: 0,

                // transition the background opacity to 0 to fade it out
                // backgroundColor: 'rgba(0, 0, 0, 0)'
            }))
        ])
    ]);
