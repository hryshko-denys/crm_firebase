<template>
  <div>
    <div class="page-title">
      <h3>{{'Categories_Category' | localize}}</h3>
    </div>
    <section>
      <Loader v-if="loading" />
      <div class="row" v-else>
      <CategoryCreate @created="addNewCategory" />
      <CategoryEdit
        v-if="categories.length"
        :categories="categories"
        :key="categories.length + updateCount"
        @updated="updateCategories"
      />
      <p v-else class="center">{{'Categories_noCategory' | localize}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '@/components/app/CategoryCreate.vue';
import CategoryEdit from '@/components/app/CategoryEdit.vue';

export default {
  name: 'Categories',
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0,
  }),
  components: {
    CategoryCreate, CategoryEdit,
  },
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories');
    this.loading = false;
  },
  methods: {
    addNewCategory(caterogy) {
      this.categories.push(caterogy);
    },
    updateCategories(category) {
      const idx = this.categories.findIndex((c) => c.id === category.id);
      this.categories[idx].title = category.title;
      this.categories[idx].limit = category.limit;
      this.updateCount += 1;
    },
  },
};
</script>
