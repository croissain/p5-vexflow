// [VexFlow](https://vexflow.com) - Copyright (c) Mohit Muthanna 2010.
// Author Mark Meeus 2019

import p5 from 'p5';

import { KeySignature } from './keysignature';
import { ModifierContext } from './modifiercontext';
import { Note } from './note';
import { Category } from './typeguard';

export class KeySigNote extends Note {
  static get CATEGORY(): string {
    return Category.KeySigNote;
  }

  protected keySignature: KeySignature;

  constructor(p: p5, keySpec: string, cancelKeySpec?: string, alterKeySpec?: string[]) {
    super(p, { duration: 'b' });

    this.keySignature = new KeySignature(this.p, keySpec, cancelKeySpec, alterKeySpec);

    // Note properties
    this.ignore_ticks = true;
  }

  /* Overridden to ignore */
  // eslint-disable-next-line
  addToModifierContext(mc: ModifierContext): this {
    // DO NOTHING.
    return this;
  }

  preFormat(): this {
    this.preFormatted = true;
    this.keySignature.setStave(this.checkStave());
    this.setWidth(this.keySignature.getWidth());
    return this;
  }

  draw(): void {
    const ctx = this.checkStave().checkContext();
    this.setRendered();
    this.keySignature.setX(this.getAbsoluteX());
    this.keySignature.setContext(ctx);
    this.keySignature.draw();
  }
}
