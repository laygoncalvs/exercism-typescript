export class DnDCharacter {

    public strength: number
    public dexterity: number
    public constitution: number
    public intelligence: number
    public wisdom: number
    public charisma: number
    public hitpoints: number

    constructor() {
        this.strength = DnDCharacter.generateAbilityScore()
        this.dexterity = DnDCharacter.generateAbilityScore()
        this.constitution = DnDCharacter.generateAbilityScore()
        this.intelligence = DnDCharacter.generateAbilityScore()
        this.wisdom = DnDCharacter.generateAbilityScore()
        this.charisma = DnDCharacter.generateAbilityScore()

        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
    }

    public static generateAbilityScore(): number {
        const dice: number[] = []

        for (let i = 0; i < 4; i++) {
            dice.push(Math.floor(Math.random() * 6) + 1)
        }

        dice.sort((a, b) => b - a)

        return dice[0] + dice[1] + dice[2]
    }

    public static getModifierFor(abilityValue: number): number {
        return Math.floor((abilityValue - 10) / 2)
    }
}