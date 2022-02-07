<template>
<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 p-2">
          <div class="card product-card h-100">
            <div class="card-body">
              <img
                :src="product.image"
                :alt="product.title"
                :title="product.title"
              />
              <p>{{ product.title }}</p>
              <p>
                <small>{{ product.category }}></small>
              </p>
            </div>
            <div class="card-footer">
              <span class="price float-start">{{
                product.price.toFixed(2)
              }}</span>
              <button class="btn btn-secondary float-end">+</button>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: "ProductListItem",
  props: {
    product: Object,
  },
};
</script>

<style>
</style>