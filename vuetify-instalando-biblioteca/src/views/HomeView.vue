<template>
  <main>
    <h1>Home</h1>
    
    <v-btn append-icon="mdi-check-bold" color="green" variant="tonal">
      Button
    </v-btn>

    <v-card class="container"  title="Poema do Manolo" subtitle="Categoria: Coragem" variant="tonal"
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ex pariatur dolores incidunt quo 
      optio fugiat nulla quaerat magni ipsam, animi nihil reprehenderit repellendus tenetur aliquid doloribus, ducimus iste rerum!">

      <v-card-actions>
        <v-btn prepend-icon="mdi-thumb-up-outline">Curtir</v-btn>
      </v-card-actions>
    </v-card>
    
  </main>
</template>

<script >

</script>

<style scoped>
.container{
display: flex;
flex-direction: column;
gap: 10px;
width: 50%;
}
</style>