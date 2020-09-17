<template>
  <div>
    <Loader v-if="loading" />
  <div  v-else-if="record">
    <div class="breadcrumb-wrap">
      <router-link to="/history" class="breadcrumb">
        {{'Detail_description' | localize}}
      </router-link>
      <a @click.prevent class="breadcrumb">
        {{ record.type === 'income' ? 'Detail_income' : 'Detail_outcome' | localize }}
      </a>
    </div>
    <div class="row">
      <div class="col s12 m6">
        <div
          class="card"
          :class="{
            'red': record.type === 'outcome',
            'green': record.type === 'income',
          }"
        >
          <div class="card-content white-text">
            <p>{{'Detail_description' | localize}} {{ record.description }}</p>
            <p>{{'Detail_sum' | localize}} {{ record.amount | currency }}</p>
            <p>{{'Detail_category' | localize}}  {{ record.categoryName }}</p>

            <small>{{ record.date | date('datetime') }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="center" v-else>
      Такой записи нет <router-link to="record">Добавить новую запись</router-link>
    </p>
  </div>
</template>

<script>
import Loader from '@/components/app/Loader.vue';

export default {
  name: 'detail',
  metaInfo() {
    return {
      title: this.$title('Detail_name'),
    };
  },
  components: {
    Loader,
  },
  data: () => ({
    loading: true,
    record: null,
  }),
  async mounted() {
    const { id } = this.$route.params;
    const record = await this.$store.dispatch('fetchRecordById', id);
    const category = await this.$store.dispatch('fetchCategoryById', record.categoryId);
    this.record = {
      ...record,
      categoryName: category.title,
    };
    this.loading = false;
  },
};
</script>
