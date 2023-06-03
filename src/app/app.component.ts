import { Component, OnInit } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

interface CurrencyData {
  code: string;
  description: string;
  rate: string;
  rate_float: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-bitcoin-calculator';
  btcBought!: string;
  btcAmount!: string;
  btcCurrent!: string;
  updateTime!: string;
  sale!: number;
  salePercentageRound!: number;
  saleOutcome!: string;
  selectedCurrency = 'USD';
  data!: Record<string, CurrencyData>;
  currencies = [
    {
      label: 'USD',
      value: 'USD',
    },
    {
      label: 'GBP',
      value: 'GBP',
    },
    {
      label: 'EUR',
      value: 'EUR',
    },
  ];

  constructor(private bitcoinService: BitcoinService) {}

  ngOnInit(): void {
    this.bitcoinService.getCurrentBalance().subscribe((data: any) => {
      this.data = data.bpi;
      this.setCurrency();
      this.updateTime = data.time.updateduk;
    });
  }

  setCurrency() {
    this.btcCurrent = this.data[this.selectedCurrency].rate_float.toFixed(2);
  }

  calculate() {
    if (this.btcAmount && this.btcBought) {
      const btcAmount = Number(this.btcAmount ?? 0);
      const btcToday = Number(this.btcCurrent);
      const btcBought = Number(this.btcBought ?? 0);
      const sale = btcToday * btcAmount - btcBought * btcAmount;
      this.saleOutcome = sale > 1 ? 'profit' : 'loss';
      this.sale = Math.abs(sale);
      const salePercentage = (this.sale / (btcBought * btcAmount)) * 100;
      this.salePercentageRound = Math.round(salePercentage);
    }
  }

  changeCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.setCurrency();
    this.calculate();
  }
}
