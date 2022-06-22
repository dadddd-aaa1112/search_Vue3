<template>
	<div class="container">
		<div class="filter_block">
			<select v-model="filterFlower">
				<option selected>Выберите сортировку</option>
				<option value="price">Сортировать по убыванию цены</option>
				<option value="priceAsc">Сортировать по возрастанию цены</option>
			</select>
		</div>

		<div class="general_content">
			<div class="search_block">
				<Sorting />
			</div>
			<div class="flower_list">
				<FlowersList :flowersList="sorteredItems" />
			</div>
		</div>
	</div>

	<FlowersItem />
	<Cart />
</template>

<script>
import { ref } from 'vue'

import FlowersList from './components/FlowersList.vue'
import FlowersItem from './components/FlowersItem.vue'
import Cart from './components/Cart.vue'
import Sorting from './components/Sorting.vue'
import { useFiltered } from './hook/filtered.js'

export default {
	name: 'App',
	components: {
		FlowersList,
		FlowersItem,
		Cart,
		Sorting,
	},
	setup() {
		const flowersList = ref([
			{
				id: 6,
				name: 'flower 6',
				price: 666,
				color: 'микс',
				flower: 'микс',
				format: 'в корзине',
				byShade: 'яркие',
			},
			{
				id: 11,
				name: 'flower 11',
				price: 1111,
				color: 'желтый',
				flower: 'желтые розы',
				format: 'в вазе',
				byShade: 'яркие',
			},
			{
				id: 12,
				name: 'flower 12',
				price: 2222,
				color: 'синий',
				flower: 'синие цветы',
				format: 'букет',
				byShade: 'яркие',
			},
			{
				id: 7,
				name: 'flower 7',
				price: 777,
				color: 'микс',
				flower: 'микс',
				format: 'букет',
				byShade: 'нежные',
			},
			{
				id: 8,
				name: 'flower 8',
				price: 888,
				color: 'розовый',
				flower: 'розовые цветы',
				format: 'букет',
				byShade: 'яркие',
			},
			{
				id: 9,
				name: 'flower 9',
				price: 999,
				color: 'микс',
				flower: 'микс',
				format: 'букет',
				byShade: 'нежные',
			},
			{
				id: 10,
				name: 'flower 10',
				price: 1000,
				color: 'розовый',
				flower: 'розовые цветы',
				format: 'букет',
				byShade: 'яркие',
			},
			{
				id: 1,
				name: 'flower 1',
				price: 100,
				color: 'оранжевый',
				flower: 'розы',
				format: 'в корзине',
				byShade: 'яркие',
			},
			{
				id: 2,
				name: 'flower 2',
				price: 222,
				color: 'белый',
				flower: 'белые розы',
				format: 'букет',
				byShade: 'нежные',
			},
			{
				id: 3,
				name: 'flower 3',
				price: 333,
				color: 'синий',
				flower: 'розы + синие цветы',
				format: 'букет',
				byShade: 'яркие',
			},
			{
				id: 4,
				name: 'flower 4',
				price: 444,
				color: 'белый',
				flower: 'белый цветок',
				format: 'букет',
				byShade: 'нежные',
			},
			{
				id: 5,
				name: 'flower 5',
				price: 555,
				color: 'розовый',
				flower: 'розовые цветы',
				format: 'букет',
				byShade: 'яркие',
			},
		])

		const { filterFlower, sorteredItems } = useFiltered(flowersList)

		return {
			flowersList,
			filterFlower,
			sorteredItems,
		}
	},
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	background: #282828;
	color: #fff;
	font-family: 'Cormorant', serif;
	font-family: 'Oswald', sans-serif;
}

.container {
	margin: 0 auto;
}

.flower_list {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 60%;
}

.general_content {
	display: flex;
	flex-direction: row;
	width: 80%;
	margin: 0 auto;
}

.search_block {
	width: 40%;
}

.filter_block {
	display: flex;
	justify-content: flex-end;
	width: 80%;
	margin: 20px 0;
}
</style>
