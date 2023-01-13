abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log(`I'm gonna punch you`);
  }

  specialMove(): void {
    console.log('Punch');
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
    console.log(`I'm gonna shoot you`);
  }

  specialMove(): void {
    console.log('Shoot');
  }
}

function useCharacter(character: Character) {
  character.talk();
  character.specialMove();
}

useCharacter(new MeleeCharacter());
useCharacter(new LongRangeCharacter());