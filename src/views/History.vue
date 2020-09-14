<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>

    <div class="history-chart">
      <canvas></canvas>
    </div>

    <Loader v-if="loading" />

    <p class="center" v-else-if="!records.length">
      Записей пока нет <router-link to="record">Добавить новую запись</router-link>
    </p>

    <section v-else>
      <HistoryTalbe :records="records" />
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import HistoryTalbe from '@/components/app/HistoryTalbe.vue';
import Loader from '@/components/app/Loader.vue';

export default {
  name: 'history',
  components: {
    HistoryTalbe,
    Loader,
  },
  data: () => ({
    loading: true,
    records: [],
    categories: [],
  }),
  async mounted() {
    const records = await this.$store.dispatch('fetchRecords');
    const categories = await this.$store.dispatch('fetchCategories');
    this.categories = categories;
    this.records = records.map(record => {
      return {
        ...record,
        categoryName: this.categories.find((c) => c.id === record.categoryId).title,
        typeClass: record.type === 'income' ? 'green' : 'red',
        typeText: record.type === 'income' ? 'Доход' : 'Расход',
      };
    });

    this.loading = false;
  },
};
</script>
