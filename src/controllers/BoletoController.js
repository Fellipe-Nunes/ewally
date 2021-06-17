const utils = require('../utils');
const worker = require('../workers');

module.exports = {
  async store(request, response) {
    const { linhaDigitavel } = request.body;
    const sanitizedLinhaDigitavel = utils.sanitizeBoleto(linhaDigitavel);
    const linhaDigitavelValida = worker.isValid(sanitizedLinhaDigitavel, true);
    const valor = worker.getValorBoleto(sanitizedLinhaDigitavel);
    const dataVencimento = worker.getDataVencimento(sanitizedLinhaDigitavel);
    const codigoBarras = worker.getCodigoDeBarras(sanitizedLinhaDigitavel);

    response.status(200).send({
      linhaDigitavelValida,
      valor,
      dataVencimento,
      codigoBarras
    });
  },
}
