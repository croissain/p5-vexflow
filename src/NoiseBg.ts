import P5Base from './P5Base';
import adjustAlpha from '../utils/adjustAlpha';
import type p5 from 'p5';

export interface INoiseBg {
  noiseScale?: number;
  dotSize?: number;
  dotColor?: string;
  opacity?: number;
}

export class NoiseBg extends P5Base {
  protected gp: p5.Graphics;

  protected noiseScale: number;

  protected dotSize: number;

  protected dotColor: string;

  protected opacity: number;

  static DEFAULT_NOISESCALE = 0.01;

  static DEFAULT_DOTSIZE = 2;

  static DEFAULT_DOTCOLOR = '#573c28';

  static DEFAULT_OPACITY = 5;

  constructor(p: p5, props: INoiseBg) {
    super(p);

    const { noiseScale, dotSize, dotColor, opacity } = props;

    this.gp = p.createGraphics(p.width, p.height);
    this.noiseScale = noiseScale || NoiseBg.DEFAULT_NOISESCALE;
    this.dotSize = dotSize || NoiseBg.DEFAULT_DOTSIZE;
    this.dotColor = dotColor || NoiseBg.DEFAULT_DOTCOLOR;
    this.opacity = opacity || NoiseBg.DEFAULT_OPACITY;
  }

  show(): void {
    const { noiseScale, dotSize, dotColor, opacity } = this;
    const w = this.p.width;
    const h = this.p.height;
    const colorWithAlpha = adjustAlpha(dotColor, opacity);

    this.gp.push();
    for (let x = 0; x < w; x += 1) {
      for (let y = 0; y < h; y += 1) {
        const noiseVal = this.p.noise(x * noiseScale, y * noiseScale);

        if (noiseVal > 0.5 && noiseVal < 0.515) {
          this.gp.fill(colorWithAlpha);
          this.gp.noStroke();
          this.gp.circle(x, y, dotSize);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.p.random([0, 1])
          ? (() => {
              if (noiseVal > 0.43) {
                this.gp.fill(colorWithAlpha);
                this.gp.noStroke();
                this.gp.circle(x, y, dotSize);
              }
            })()
          : null;

        if (noiseVal > 0.4 && noiseVal < 0.415) {
          this.gp.fill(colorWithAlpha);
          this.gp.noStroke();
          this.gp.circle(x, y, dotSize);
        }
      }
    }
    this.p.image(this.gp, 0, 0);
    this.gp.pop();
  }
}
