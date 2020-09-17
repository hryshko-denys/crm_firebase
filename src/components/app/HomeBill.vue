<template>
  <div class="col s12 m6 l8">
    <div class="card orange darken-3 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">{{'Home_currencyRate' | localize}}</span>
        </div>
        <table>
          <thead>
          <tr>
            <th>{{'Home_currency' | localize}}</th>
            <th>{{'Home_rate' | localize}}</th>
            <th>{{'Home_date' | localize}}</th>
          </tr>
          </thead>

          <tbody>
          <tr
            v-for="currency of currencies"
            :key="currency"
          >
            <td>{{currency}}</td>
            <td>{{rates[currency].toFixed(2)}}</td>
            <td>{{date | date('date')}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates', 'date'],
  data: () => ({
    currencies: ['RUB', 'EUR', 'USD'],
  }),
};
</script>
