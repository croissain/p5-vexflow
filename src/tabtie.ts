// / [VexFlow](https://vexflow.com) - Copyright (c) Mohit Muthanna 2010.
//
// ## Description
// This class implements varies types of ties between contiguous notes. The
// ties include: regular ties, hammer ons, pull offs, and slides.

import p5 from 'p5';

import { StaveTie, TieNotes } from './stavetie';
import { Category } from './typeguard';

export class TabTie extends StaveTie {
  static get CATEGORY(): string {
    return Category.TabTie;
  }

  static createHammeron(p: p5, notes: TieNotes): TabTie {
    return new TabTie(p, notes, 'H');
  }

  static createPulloff(p: p5, notes: TieNotes): TabTie {
    return new TabTie(p, notes, 'P');
  }

  /**
   * @param notes is a struct that has:
   *  {
   *    first_note: Note,
   *    last_note: Note,
   *    first_indices: [n1, n2, n3],
   *    last_indices: [n1, n2, n3]
   *  }
   *
   * @param text
   */
  constructor(p: p5, notes: TieNotes, text?: string) {
    super(p, notes, text);

    this.render_options.cp1 = 9;
    this.render_options.cp2 = 11;
    this.render_options.y_shift = 3;

    this.direction = -1; // Tab tie's are always face up.
  }
}
