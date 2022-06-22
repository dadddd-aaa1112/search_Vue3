import { computed, ref } from 'vue'

export function useFiltered(flowersList) {
	const filterFlower = ref('')

	const sorteredItems = computed(() => {
		if (filterFlower.value === 'price') {
			return [...flowersList.value].sort(
				(flower1, flower2) =>
					flower2[filterFlower.value] - flower1[filterFlower.value]
			)
		} else if (filterFlower.value === 'priceAsc') {
			return [...flowersList.value].sort(
				(flower1, flower2) => flower1.price - flower2.price
			)
		} else {
			return [...flowersList.value]
		}
	})

	return { filterFlower, sorteredItems }
}
