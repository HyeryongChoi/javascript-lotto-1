import Console from '../util/Console.js';
import QUERY from '../constant/query.js';

const InputView = {
  async readLottoPrice() {
    const lottoPrice = await Console.readline(QUERY.LOTTO_PRICE);

    return parseInt(lottoPrice, 10);
  },

  async readLuckyNumbers() {
    const luckyNumbers = await Console.readline(QUERY.LUCKY_NUMBERS);

    return luckyNumbers;
  },
};

export default InputView;
