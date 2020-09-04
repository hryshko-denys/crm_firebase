<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
      <CategoryCreate @created="addNewCategory" />
      <CategoryEdit />
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
  }),
  components: {
    CategoryCreate, CategoryEdit,
  },
  methods: {
    addNewCategory(caterogy) {
      this.categories.push(caterogy);
      console.log(this.categories);
    },
  },
};
</script>
