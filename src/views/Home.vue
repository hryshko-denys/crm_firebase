<template>

<div>
  <div class="page-title">
    <h3>{{'Home_account' | localize}}</h3>

    <button
      class="btn waves-effect waves-light btn-small"
      @click="refresh"
      >
      <i class="material-icons">refresh</i>
    </button>
  </div>

  <Loader v-if="loading" />

  <div v-else class="row">
    <HomeCurrency
      :rates="currency.rates"
    />
    <HomeBill
      :rates="currency.rates"
      :date="currency.date" />
  </div>
</div>

</template>

<script>
import HomeBill from '@/components/app/HomeBill.vue';
import HomeCurrency from '@/components/app/HomeCurrency.vue';
import Loader from '@/components/app/Loader.vue';

export default {
  metaInfo() {
    return {
      title: this.$title('Home'),
    };
  },
  data: () => ({
    loading: true,
    currency: null,
  }),
  async mounted() {
    this.currency = await this.$store.dispatch('fetchCurrency');
    console.log(this.currency);
    this.loading = false;
  },
  methods: {
    async refresh() {
      this.loading = true;
      this.currency = await this.$store.dispatch('fetchCurrency');
      this.loading = false;
    },
  },
  components: {
    HomeBill, HomeCurrency, Loader,
  },
  name: 'Home',
};
</script>
