export abstract class RandomHelper {
  public static pickRandomNumber(min, max) {
    const maxOffset = max - min + 1;
    const fullRandom = Math.random() * maxOffset + min;
    return Math.floor(fullRandom);
  }

  public static shuffle(deck: any[]): any[] {
    let currentIndex = deck.length;

    while (0 !== currentIndex) {

      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      const temporaryValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporaryValue;
    }

    return deck;
  }
}
