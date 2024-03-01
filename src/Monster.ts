import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this.lifePoints;
  }

  private set lifePoints(value: number) {
    if (value < 1) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = value;
    }
  }

  public get strength(): number {
    return this.strength;
  }

  public receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) {
      const currentLife = this.lifePoints - attackPoints;
      this.lifePoints = currentLife;
    }
    return this.lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;