<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Create a product</h2>
    <h5 class="mb-4">This is just a fake placeholder form</h5>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Product title"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

 
    <div class="input-group mb-3">
        <span class="input-group-text">€</span>
        <input
          type="text"
                    placeholder="Product price"
          class="form-control"
          aria-label="Amount (to the nearest euro)"
        />
        <span class="input-group-text">.00</span>
      </div>

      <div class="input-group">
        <span class="input-group-text">Description</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>

      <div class="input-group mt-4">
        <button type="button" class="btn btn-primary" @click="addProduct">Create product</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CreateProduct",
  methods: {
      addProduct() {
          // navigate to products here

      }
  }
};
</script>

<style>
</style>