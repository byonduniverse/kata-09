import config from './config'
import { Config, Store } from './types'

class CheckOut {
  private value: number
  private config: Config = {}
  private store: Store = {}

  constructor() {
    this.value = 0
  }

  setConfig(config: Config) {
    this.config = config
  }

  input(product: string) {
    const config = this.config[product]
    if (!config) return 0
    this.store[product] = (this.store[product] ?? 0) + 1
    this.value += config.value
    if (config.special && this.store[product] >= config.special.count) {
      this.value = this.value - config.value * config.special.count + config.special.value
      this.store[product] -= config.special.count
    }
  }

  getValue() {
    return this.value
  }
}

function totalPrice(products: string) {
  const checkOut = new CheckOut()
  checkOut.setConfig(config.prices)
  products.split('').forEach((product: string) => checkOut.input(product))
  return checkOut.getValue()
}

export default totalPrice
