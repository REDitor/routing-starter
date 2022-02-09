<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <router-link to="/" activeClass="active" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/products" activeClass="active" class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" activeClass="active" class="nav-link">Create Product</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" activeClass="active" class="nav-link">About Us</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
</style>