<template>
	<div class="sort">
		<div v-for="search in searchList" :key="search.id">
			<p class="sort__filterName">{{ search.filterName }}</p>
			<div v-for="(filter, index) in search.filter" :key="index">
				<input type="checkbox" value="{{ filter }}" v-model="checkboxArray" />
				{{ filter }} {{ sortingFlower }}
			</div>
		</div>
		<button>сбросить фильтр</button>
	</div>
</template>
<script>
import { ref } from 'vue'

export default {
	setup() {
		const sortingFlower = ref('')

		const checkboxArray = ref([])
		const searchList = ref([
			{
				id: 1,
				filterName: 'по свету',
				filter: ['нежные', 'яркие'],
			},
			{
				id: 2,
				filterName: 'по цвету',
				filter: ['желтый', 'белый', 'розовый', 'синий', 'микс', 'оранжевый'],
			},
			{
				id: 3,
				filterName: 'по формату',
				filter: ['букет', 'в вазe', 'в корзине'],
			},
			{
				id: 4,
				filterName: 'по цветку',
				filter: [
					'розы',
					'белые розы',
					'розы + синие цветы',
					'белый цветок',
					'розовые цветы',
					'микс',
					'желтые розы',
					'синие цветы',
				],
			},
		])

		return {
			searchList,
			sortingFlower,
			checkboxArray,
		}
	},
}
</script>
<style>
.sort {
	width: 255px;
	height: 408px;
	background: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(20px);
	border-radius: 20px;
}

.sort__filterName {
	font-size: 14px;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	margin-top: 10px;
	color: #43ffd2;
}
</style>
