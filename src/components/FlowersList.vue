<template>
	<div class="flower_cart" v-for="flower in props.flowersList" :key="flower.id">
		<img :src="require(`../assets/img/${flower.id}.jpg`)" />
		<p>Карточка: {{ flower.name }}</p>
		<p>Цвет:{{ flower.color }}</p>
		<p>Наименование: {{ flower.flower }}</p>
		<p>Формат: {{ flower.format }}</p>
		<p>Свет: {{ flower.byShade }}</p>
		<p style="margin: 10px 0">Цена: {{ flower.price }} руб.</p>
		<button>В корзину</button>
	</div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps(['flowersList'])
</script>
<style>
.flower_cart {
	display: flex;
	flex-direction: column;
	margin-right: 20px;
	margin-bottom: 10px;
}
</style>
