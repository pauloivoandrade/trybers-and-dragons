import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._cost = 0;
    this._special = 0;
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public get cost(): number {
    return this._cost;
  }

  public get special(): number {
    return this._special;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;