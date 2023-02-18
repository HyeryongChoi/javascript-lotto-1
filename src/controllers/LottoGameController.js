import inputView from '../views/inputView.js';
import outputView from '../views/outputView.js';
import LottoGame from '../domains/LottoGame.js';
import Console from '../utils/Console.js';

class LottoGameController {
  #lottoGame;

  async start() {
    await this.init();
  }

  async init() {
    const lottosPrice = await inputView.readLottosPrice();
    this.#lottoGame = new LottoGame(lottosPrice);

    outputView.printLottoNumbersList(this.#lottoGame.getLottoNumbersList());

    const luckyNumbers = await inputView.readLuckyNumbers();
    const bonusNumber = await inputView.readBonusNumber(luckyNumbers);
    this.#lottoGame.initWinningNumbers(luckyNumbers, bonusNumber);

    this.execute();
  }

  async execute() {
    outputView.printStatistics(this.#lottoGame.execute(), this.#lottoGame.calculateProfit());

    const retryCommand = await inputView.readRetry();
    if (this.#lottoGame.isRetry(retryCommand)) {
      this.start();
      return;
    }

    this.exit();
  }

  exit() {
    Console.close();
  }
}

export default LottoGameController;
